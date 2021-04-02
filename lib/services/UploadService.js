const Upload = require('../models/Upload');
const { AWS } = require('../utils/aws');

module.exports = class UploadService {
  static async create({ fileName }) {
    const upload = await Upload.insert({ fileName });
    await 
    return upload;
  }
};
