import { Schema } from "mongoose";

export const videoSchema = new Schema({
  urlThumbnail: {
    type: String, 
    required: true
  }
});