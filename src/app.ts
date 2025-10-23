import { envs } from "./config/plugins/envs.plugin";
// import { MongoDatabase } from "./data/mongo"
import { MongoDatabase } from "./data/mongo";



(async()=>{
    await MongoDatabase.connect({mongoUrl: envs.MONGO_URL, dbName: envs.MONGO_DB_NAME})
})();