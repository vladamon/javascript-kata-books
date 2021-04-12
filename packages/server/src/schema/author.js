import { Author, AuthorTC } from '../models/author.js';

export const AuthorQuery = {
  authorById: AuthorTC.getResolver('findById'),
  authorByIds: AuthorTC.getResolver('findByIds'),
  authorOne: AuthorTC.getResolver('findOne'),
  authorMany: AuthorTC.getResolver('findMany'),
  authorCount: AuthorTC.getResolver('count'),
  authorConnection: AuthorTC.getResolver('connection'),
  authorPagination: AuthorTC.getResolver('pagination'),
}

export const AuthorMutation = {
  authorCreateOne: AuthorTC.getResolver('createOne'),
  authorCreateMany: AuthorTC.getResolver('createMany'),
  authorUpdateById: AuthorTC.getResolver('updateById'),
  authorUpdateOne: AuthorTC.getResolver('updateOne'),
  authorUpdateMany: AuthorTC.getResolver('updateMany'),
  authorRemoveById: AuthorTC.getResolver('removeById'),
  authorRemoveOne: AuthorTC.getResolver('removeOne'),
  authorRemoveMany: AuthorTC.getResolver('removeMany'),
};