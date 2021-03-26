// Discord.js
const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
(async()=>{await client.login(process.env.DISCORD_BOT_SECRET);})().catch(_=>{
  console.error("Error logging in!", _);
  console.error(`Failed Token: ${process.env.DISCORD_BOT_SECRET}`)
  process.exit();
});

const Database = require("./Mongo/mongo.js");

require('./keep_alive.js')(); 

let DiscordReady = async _=>{
  await Database.Connect().catch(_=>console.error("Error connecting to Database!"));
  console.log("Ready");
}

let DiscordMessage =  async message=>{
  console.log("")
}

client.on('ready', DiscordReady);
client.on('message', DiscordMessage);