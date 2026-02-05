const UserModel = require("../models/user");

exports.register = async (req, res) => {
  try {
    const { email, name, photoUrl } = req.body;

    const userExist = await UserModel.findOne({ email: email });
    if (!userExist) {
      let newUser = new UserModel({ name, email, photoUrl });
      await newUser.save();
      return res.status(200).json({
        message: "User Registered successfully",
        user: newUser,
      });
    }
    //if user exist
    return res.status(200).json({
      message: "Welcome Back",
      user: userExist,
    });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error", message: error.message });
  }
};
