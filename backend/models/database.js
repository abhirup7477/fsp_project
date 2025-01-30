const { MongoClient, ServerApiVersion } = require('mongodb');

// const url = process.env.MONGO_CONNECTION
const url = 'mongodb+srv://abhirup7477:JpiSPlLMCpvvcoru@cluster0.b8pau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
}
)

let db;

async function connect() {
    try {
        await client.connect()
        console.log("Connected to the database")
        db = client.db('db1')
    }
    catch(error){
        console.error("Connect failed", error)
        process.exit(1)
    }
}

connect()

module.exports = {
    getDb: () => db,
};