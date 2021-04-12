import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const BookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    isbn: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
    },
    authors: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      lowercase: true,
      trim: true,
      required: false,
    }
  },
  {
      collection: 'books',
  }
)

BookSchema.plugin(timestamps);

BookSchema.index({ createdAt: 1, updatedAt: 1 });

export const Book = mongoose.model('Book', BookSchema);
export const BookTC = composeWithMongoose(Book);
