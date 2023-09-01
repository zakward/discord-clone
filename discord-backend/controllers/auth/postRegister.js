const User = require("../../models/user");
const bcrypt = require("bcryptjs");

const postRegister = async (req, res) => {
  try {
    const { username, password, mail } = req.body;
    const userExists = await User.exists({ mail: mail.toLowerCase() });
    if (userExists) {
      return res.status(409).send("E-mail is already registered");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      password: encryptedPassword,
    });
    const token = "JWT Token";
    res.status(201).json({
      userDetails: {
        mail: user.mail,
        token: token,
        username: user.username,
      },
    });
  } catch (err) {
    return res.status(500).send("Error occured. Please try again");
  }
};

module.exports = postRegister;
