import { model } from "mongoose";
import { videoSchema } from "./schemas/video.js";

const Video = model("Video", videoSchema);

export default class VideoRepository {
  // Create video
  async createVideo(urlThumbnail) {
    try {
      console.log(urlThumbnail);
      const newVideo = new Video({ urlThumbnail: urlThumbnail });
      return await newVideo.save();
    } catch (error) {
      return error;
    }
  }

  // Get all video
  async getAllVideos() {
    try {
      const videos = await Video.find({});
      return videos;
    } catch (error) {
      return error;
    }
  }

  // Get video by videoID
  async getVideoByID(videoID) {
    try {
      const video = await Video.findById(videoID);
      return video;
    } catch (error) {
      return error;
    }
  }

  // Update video
  async updateVideo(video, urlThumbnail) {
    try {
      if (urlThumbnail != undefined) {
        video.urlThumbnail = urlThumbnail;
      }
      return await product.save();
    } catch (error) {
      return error;
    }
  }

  // Delete video
  async deleteVideo(video) {
    try {
      return await video.deleteOne();
    } catch (error) {
      return error;
    }
  }
}
