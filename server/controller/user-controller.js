import User from "../model/user-schema.js";

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).json({ message: "Username already exist" });
    }

    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;

    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return response.status(200).json({ data: user });
    } else {
      return response.status(401).json("invalid login");
    }
  } catch (error) {
    response.status(500).json("Error ", error.message);
  }
};

export const get_user = async (request, response) => {
  User.find(function (error, foundUser) {
    if (!error) {
      response.send(foundUser);
    } else {
      response.send("No data found !!");
    }
  });
};

export const delete_userById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send({ message: "user not found" });
    }
    res.send(deletedUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
export const get_userByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};
export const put_userByUsername = async (req, res) => {
  try {
    const updatedUser = req.body;

    const result = await User.updateOne(
      { username: req.params.username },
      { $set: updatedUser }
    );
    console.log(result);
    res.status(200).send("User updated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating user");
  }
};
