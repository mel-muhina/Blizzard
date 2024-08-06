const Character = require("../models/Character");

const show = async (req, res) => {
  try {
    const character_id = req.params.id;
    const findCharacter = await Character.getOneById(character_id);
 
    res.status(200).json(findCharacter);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = { show };