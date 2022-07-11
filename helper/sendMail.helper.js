const sendMail = async (url, e, time) => {
    console.log("Response \nURL: ", url.url, "\nName: ", url.name, "\nError: ", e.message ? e.message : e, "\nTime: ", time)

}
module.exports = sendMail