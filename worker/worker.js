const readWebsite = require("../controller/readWebsite.controller")
const Urls = require("../model/urls.model")

const worker = async () => {

  const time = new Date();
  try {
    const urls = await Urls.find({})
    urls.map(async (user) => {
      readWebsite(user, time)
    })
  }
  catch (e) {
    throw e
  }
}



module.exports = worker;
