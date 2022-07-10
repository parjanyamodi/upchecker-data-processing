//Worker Import statement
const worker = require("./worker/worker");
//Connect To DataBase
require("./db/db");

require("dotenv").config();


const callWorker = async () => {
  console.log("Worker called!");
  worker();
}
callWorker()
//setInterval(callWorker, 10000);
