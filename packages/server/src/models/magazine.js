import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const MagazineSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    isbn: {
        type: String,
        trim: true,
        required: true,
    },
    authors: {
        type: String,
        trim: true,
        required: true,
    },
    publishedAt: {
        type: String,
        trim: true,
        required: true,
    }
  },
  {
      collection: 'magazines',
  }
)

MagazineSchema.plugin(timestamps);

MagazineSchema.index({ createdAt: 1, updatedAt: 1 });

export const Magazine = mongoose.model('Magazine', MagazineSchema);
export const MagazineTC = composeWithMongoose(Magazine);
