import { SchemaComposer } from 'graphql-compose';

import '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { AuthorQuery, AuthorMutation } from './author'
import { BookQuery, BookMutation } from './book'
import { MagazineQuery, MagazineMutation } from './magazine'


schemaComposer.Query.addFields({
    ...AuthorQuery,
    ...BookQuery,
    ...MagazineQuery
});

schemaComposer.Mutation.addFields({
    ...AuthorMutation,
    ...BookMutation,
    ...MagazineMutation
});

export default schemaComposer.buildSchema();