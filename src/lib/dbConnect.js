import { MongoClient, ServerApiVersion } from "mongodb"

const collectionNames={
   TEST_USER: "test_user",
    PRACTICE_DATA: "practice_data"
}
function dbConnect() {
    const uri = process.env.MONGODB_URL
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      return client.db('practice-next-js').collection(collectionNames)
}
export default dbConnect