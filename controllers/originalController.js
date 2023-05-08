const axios = require("axios");
const AF_URL = process.env.AZURE_FUNCTION_URL;
const MY_URL = process.env.MY_URL;

const originalController = {

    originalIndex: (req, res) => {
        res.render('original/index');
    },

    originalQueryAction: async(req, res) => {
        const shortQuery = req.body["url"];
        let postUrl = AF_URL + "?original=" + shortQuery;
        let response = await axios.post(postUrl);
        let result = response.data;
        res.render('original/response', {MY_URL, result});
    }
}

module.exports = originalController;