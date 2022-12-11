import Data from "../../model/dataSchema";
import data from "../../utils/data";
import db from "../../utils/db";
const handler = async (req, res ) => {
  await db.connect()
  await Data.deleteMany()
  await Data.insertMany(data.data)
  await db.disconnect()

  res.send({message : 'seeded successfully'})

  
}

export default handler