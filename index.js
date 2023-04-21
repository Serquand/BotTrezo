require("dotenv").config();
const { Client, Collection } = require("discord.js");
const setup = require("./models/setup.js");
const commandHandlers = require("./utils/handlers/CommandHandlers");
const eventHandlers = require("./utils/handlers/EventHandlers");

const client = new Client({ intents: 1 });
client.commands = new Collection();
client.login(process.env.botToken);

const main = async () => {
    console.clear();
    await setup();
    await commandHandlers(client);
    await eventHandlers(client);
}

main();