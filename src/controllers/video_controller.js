export default class VideoController {
  constructor(videoService) {
    this.videoService = videoService;
  }

   // Create video
   async createVideo(urlThumbnail) {
    return await this.videoService.createVideo(urlThumbnail);
  }

  // Get video
  async getVideo(videoID) {
    return await this.videoService.getVideo(videoID);
  }

  // Get all video
  async getAllVideos() {
    return await this.videoService.getAllVideos();
  }

  // Update video
  async updateVideo(videoID, urlThumbnail) {
    return await this.videoService.updateVideo(videoID, urlThumbnail);
  }

  // Delete video
  async deleteVideo(videoID) {
    return await this.videoService.deleteVideo(videoID);
  }
}