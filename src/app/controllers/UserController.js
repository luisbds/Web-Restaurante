import User from "../models/User";

class userController {
  async store(req, res) {
    const { id, name, email } = await User.create(
      req.body
    );

    return res.json({ id, name, email });
  }
}

export default new userController();