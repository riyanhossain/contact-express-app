const bcrypt = require("bcrypt");

async function hashIt(password) {
  const salt = await bcrypt.genSalt(6);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
}

async function compareIt(password , hashedPassword) {
  const validPassword = await bcrypt.compare(password, hashedPassword);
    return validPassword;
}

module.exports = { hashIt, compareIt };
