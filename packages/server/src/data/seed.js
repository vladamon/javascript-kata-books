/* @flow */

import fs from 'fs';
import csv from 'csvtojson'

const collectionPrefix = null;

export default async function seed(db) {
  const files = ['authors', 'books', 'magazines'];

  const collectionNames = (await db.listCollections().toArray()).map((o) => o.name);
  //const collectionNames = [...files]

  return Promise.all(
    files.map((file) => {
      return (async function () {
        const colName = `${collectionPrefix || ''}${file}`;

        const filePath = `${__dirname}/${file}.csv`

        const jsonContent = await csv({
          output: "json",
          delimiter: ";"
        }).fromFile(filePath)

        //const data = JSON.parse(fs.readFileSync(`${__dirname}/${file}.json`, 'utf8'));

        const data = jsonContent;

        if (collectionNames.indexOf(colName) > -1) {
          console.log(collectionNames)
          await db.dropCollection(colName);
          console.log(`  '${colName}' dropped`);
        }

        const result = await db.collection(colName).insertMany(data);
        console.log(`  '${colName}' created with ${result.insertedCount} records`);
      })();
    })
  );
}