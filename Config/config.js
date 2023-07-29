const { model } = require("mongoose");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);


module.exports = { openai };