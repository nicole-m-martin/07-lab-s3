const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

// const s3Client = require('../lib/utils/aws');

// jest.mock('s3Client', () => () => ({
//   uploads: {
//     create: jest.fn(),
//   },
// }));

const uploadFile = (fileName) => {
const fileContent = fs.readFileSync(fileName);

describe('07-lab CRUD routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let upload;
  beforeEach(async () => {
    upload = await Upload.insert({
      fileName:
      fileBody: 
     });
  });

  it('Uploads a file to the asw s3 bucket', () => {
    return request(app)
      .post('/api/v1/orders')
      .send({ file })
      
      expect(res.body).toEqual({
          id: '2',
          quantity: 10,
        });
      });
  });
