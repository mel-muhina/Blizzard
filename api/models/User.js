const db = require("../database/connect");

class User {
  constructor({ user_id, username, password, highscore, role }) {
    this.user_id = user_id;
    this.username = username;
    this.password = password;
    this.highscore = highscore;
    this.role = role;
  }

  static async findByUsername(username) {
    if (!username) throw new Error("Please provide a username");

    const query = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    console.log(query.rows);

    if (query.rows.length !== 1) {
      throw new Error("Unable to authenticate user");
    }

    return new User(query.rows[0]);
  }

  static async create({ username, password }) {
    if (!username || !password)
      throw new Error("Please provide required fields");

    const query = await db.query(
      "INSERT INTO users (username , password , highscore , role) VALUES ($1 , $2 , 0 , 'user') RETURNING *",
      [username, password]
    );

    if (query.rows.length !== 1) {
      throw new Error("Unable to authenticate user");
    }

    return new User(query.rows[0]);
  }
}

module.exports = User;
