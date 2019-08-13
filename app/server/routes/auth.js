// models
const User = require("../models/user");
// helpers
const { getErrMsg, serverRes } = require("../helpers/serverRes");

module.exports = app => {
  app.post("/api/register", async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const haveUser = await User.findOne({ email });

      // handle duplicate emails
      if (haveUser) {
        const msg = getErrMsg("haveUser");
        return serverRes(res, 400, msg);
      }

      const user = new User({ username, email, password });

      user["role"] = "user";

      await user.save();

      // user is saved create an token
      const { token, err } = await user.generateAuthToken();

      if (err) {
        const msg = err;
        return serverRes(res, 400, msg);
      }

      const msg = `${user.email} is now registered.`;

      serverRes(res, 200, msg, { token });
    } catch (err) {
      console.log("Err: Register", err);
      const msg = getErrMsg("err", "register", "user");
      serverRes(res, 400, msg);
    }
  });
};
