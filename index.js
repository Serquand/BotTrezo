require("dotenv").config();
const { Client } = require("discord.js");
const setup = require("./models/setup.js");

const client = new Client({ intents: 1 });

const main = async () => {
    console.clear();
    await setup();
}

main();