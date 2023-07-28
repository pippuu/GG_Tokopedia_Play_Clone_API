export default class VideoService {
  constructor(videoRepo) {
    this.videoRepo = videoRepo;
  }

  // Create video
  async createVideo(urlThumbnail) {
    return await this.videoRepo.createVideo(urlThumbnail);
  }

  // Get video
  async getVideo(videoID) {
    return await this.videoRepo.getVideoByID(videoID);
  }

  // Get all video
  async getAllVideos() {
    return await this.videoRepo.getAllVideos();
  }

  // Update video
  async updateVideo(videoID, urlThumbnail) {
    try {
      const video = await this.videoRepo.getVideoByID(videoID);
      return await this.videoRepo.updateVideo(video, urlThumbnail);
    } catch (error) {
      return error;
    }
  }

  // Delete video
  async deleteVideo(videoID) {
    try {
      const video = await this.videoRepo.getVideoByID(videoID);
      return await this.videoRepo.deleteVideo(video);
    } catch (error) {
      return error;
    }
  }
}