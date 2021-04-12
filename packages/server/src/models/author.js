import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const AuthorSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
    },
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    }
  },
  {
      collection: 'authors',
  }
)

AuthorSchema.plugin(timestamps);

AuthorSchema.index({ createdAt: 1, updatedAt: 1 });

export const Author = mongoose.model('Author', AuthorSchema);
export const AuthorTC = composeWithMongoose(Author);
