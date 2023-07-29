const { openai } = require("../Config/config")

const generateImage = async (req, res) => {
    console.log(req.body.prompt)
    try {
        const image = await openai.createImage({
            prompt: req.body.prompt,
            n: 1,
            size: '1024x1024'
        })

        res.json({
            url: image.data.data[0].url
        })
    } catch (error) {

        res.json({
            url: 'https://www.apple.com/v/privacy/l/images/og__ishslgdhhimq.png?202210270446'
        })

    }

}

module.exports = { generateImage }