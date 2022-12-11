import db from "../../utils/db";
import User from "../../model/schema";

db.connect();

export default async function handler(req, res) {
  try {
    const user = await User.create(req.body);
    res.redirect("/login");
    if (!user) {
      return res.json({ code: "User not created" });
    }
  } catch (error) {
    res.status(400).json({ status: "Not able to create a new user" });
  }
}
