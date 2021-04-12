import { Magazine, MagazineTC } from '../models/magazine.js';

export const MagazineQuery = {
  magazineById: MagazineTC.getResolver('findById'),
  magazineByIds: MagazineTC.getResolver('findByIds'),
  magazineOne: MagazineTC.getResolver('findOne'),
  magazineMany: MagazineTC.getResolver('findMany'),
  magazineCount: MagazineTC.getResolver('count'),
  magazineConnection: MagazineTC.getResolver('connection'),
  magazinePagination: MagazineTC.getResolver('pagination'),
}

export const MagazineMutation = {
  magazineCreateOne: MagazineTC.getResolver('createOne'),
  magazineCreateMany: MagazineTC.getResolver('createMany'),
  magazineUpdateById: MagazineTC.getResolver('updateById'),
  magazineUpdateOne: MagazineTC.getResolver('updateOne'),
  magazineUpdateMany: MagazineTC.getResolver('updateMany'),
  magazineRemoveById: MagazineTC.getResolver('removeById'),
  magazineRemoveOne: MagazineTC.getResolver('removeOne'),
  magazineRemoveMany: MagazineTC.getResolver('removeMany'),
};