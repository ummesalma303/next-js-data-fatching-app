import { MongoClient, ServerApiVersion } from "mongodb"

function dbConnect() {
    const uri = process.env.MONGODB_URL
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      return client.db('plantNet-session').collection('plants')
}
export default dbConnect