import db from "../../utils/db";
import mongoose from "mongoose";
import User from "../../model/schema";

db.connect();

export default async function loginhandler(req, res) {
  User.findOne({ userid: req.body.userid }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "해당 아이디에 해당하는 유저가 없음",
      });
    }
    // 요청된 아이디가 db에 있으면 비밀번호 맞는지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호 틀림" });
      // 비밀번호 까지 맞다면 토큰 생성
      res.redirect("/main");
    });
  });
}
