import { resolve } from "styled-jsx/css";
import Data from "../../model/dataSchema";
import data from "../../utils/data";
import db from "../../utils/db";

const handler = async (req, res) => {
  await db.connect();
  const { query } = req.body;
  const newquery = {};
  if (query.brand.length) newquery.manufacturer = query.brand;
  if (query.type.length) newquery.productType = query.type;
  if (query.gears.length) newquery.numberGears = query.gears;
  if (query.breakType.length) newquery.breakType = query.breakType;
  if (query.material.length) newquery.material = query.material;
  console.log(newquery);
  Data.find(newquery)
    .lean()
    .exec(function (error, read) {
      if (error) {
        console.log("error");
        res.json(error);
        res.status(405).end();
        resolve();
      } else {
        res.status(200).json({ read });
        res.end();
      }
    });
  await db.disconnect();
};

export default handler;
