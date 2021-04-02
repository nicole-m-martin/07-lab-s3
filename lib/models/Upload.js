const pool = require('../utils/pool');

module.exports = class Upload {
  id;
  fileName;

  constructor(row) {
    this.id = row.id;
    this.file_name = row.fileName;
  }

  static async insert(upload) {
    const {
      rows,
    } = await pool.query(
      `INSERT INTO uploads (file_name) VALUES ($1) RETURNING *`,
      [upload.fileName]
    );
    return new Upload(rows[0]);
  }
};
