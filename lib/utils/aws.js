const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-2' });

const s3Client = s3(
  process.env.s3_ACCOUNT_SID,
  process.env.s3_AUTH_TOKEN,
  process.env.BUCKET_NAME
);

module.exports = {
  s3Client,
};
