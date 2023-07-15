// console.log("Hey!!");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey : process.env.OPENAI_SECRET_KEY,
})

const openai = new OpenAIApi(configuration);

const app = express()
app.use(express.json())

app.use(cors({ origin: true }));

app.get("/", (req, res) => {
    return res.send("Hello World");
});

app.post("/chat", async(req, res) => {
    const {prompt } = req.body;

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt : prompt 
        })
    } catch (error) {
        console.log(error);
    }
})

const port = 8080;
app.listen(port || process.env.PORT, () =>
    console.log("Listening on port 8080")
);