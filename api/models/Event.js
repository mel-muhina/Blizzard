const db = require("../database/connect");

class Event {
  constructor({ event_id, character_id, event_date, event_description }) {
    this.event_id = event_id;
    this.character_id = character_id;
    this.event_date = event_date;
    this.event_description = event_description;
  }

  static async show(character_id) {
    const events = await db.query(
      "SELECT * FROM events WHERE character_id = $1",
      [character_id]
    );

    if (events.rows.length === 0) throw new Error("Unable to find events");

    return events.rows.map((e) => new Event(e));
  }
}

module.exports = Event;
