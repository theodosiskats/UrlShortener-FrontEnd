const axios = require("axios");
const AF_URL = process.env.AZURE_FUNCTION_URL;
const MY_URL = process.env.MY_URL;

const shortController = {

    shortIndex: (req, res) => {
        res.render('short/index');
    },

    shortQueryAction: async(req, res) => {
        const shortQuery = req.body["url"];
        let postUrl = AF_URL + "?short=" + shortQuery;
        let response = await axios.post(postUrl)
        let result = response.data;
        res.render('short/response', {MY_URL, result});
    }
}

module.exports = shortController;