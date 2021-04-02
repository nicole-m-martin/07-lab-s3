const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Upload = require('../lib/models/Upload');
const UploadService = require('../lib/services/UploadService');
// const AWS = require('aws-sdk');

// const s3Client = require('../lib/utils/aws');

// jest.mock('s3Client', () => () => ({
//   uploads: {
//     create: jest.fn(),
//   },
// }));

describe('07-lab CRUD routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let upload;
  beforeEach(async () => {
    upload = await Upload.insert({ fileName: 'textFile.txt' });
  });
});

// POST TEST
it('Uploads a file to the asw s3 bucket', async () => {
  const res = await request(app)
    .post('/api/v1/uploads')
    .send({ fileName: 'moes.png' });

  expect(res.body).toEqual({
    id: '1',
    filePath: 'https://nic-s3-bucket.s3-us-west-2.amazonaws.com/moes.png',
  });
});
