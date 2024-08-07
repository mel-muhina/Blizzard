const db = require("../database/connect");

class Character {
    constructor({  character_id, character_name, birth_year }) {
        this.character_id = character_id;
        this.character_name = character_name;
        this.birth_year = birth_year;
    }

    static async getOneById(character_id) {
        const response = await db.query("SELECT * FROM characters WHERE character_id = $1;", [character_id]);

        if (response.rows.length != 1) {
          throw new Error("Unable to locate chosen character.")
        }

        return new Character(response.rows[0]);
      }

      static async getAll() {
        const response = await db.query("SELECT * FROM characters;");

        if (response.rows.length < 1) {
          throw new Error("Unable to locate any characters.")
        }
        return response.rows.map(c => new Character(c));
      }  
     
}


module.exports = Character;
