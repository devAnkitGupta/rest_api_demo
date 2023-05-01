import mongoose from "mongoose";
import config from 'config';
import { error } from "console";

function connect() {
    const dbUri = config.get<string>("dbUri")

    return mongoose.connect(dbUri).then(() => {
         console.log('connected to DB')
    }).catch((error) => {
        console.error("Could not connect to db");
        process.exit(1);
    })
}

export default connect