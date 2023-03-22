

const db = require('../db');



class Contact {

  static async submit({name, email, message}) {

    const key = (Math.random()*10).toString(36);
    const timeStamp = new Date();

    const result = await db.query (
      `INSERT INTO messages
          (timeStamp, name, email, message, key) VALUES ($1, $2, $3, $4, $5)
          RETURNING name, email, message`,
          [timeStamp, name, email, message, key],
    );
    return result
  }
}

module.exports = Contact;