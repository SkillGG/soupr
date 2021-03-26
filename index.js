// Discord.js
const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
(async()=>{await client.login(process.env.DISCORD_BOT_SECRET);})().catch(_=>{
  console.error("Error logging in!", _);
  console.error(`Failed Token: ${process.env.DISCORD_BOT_SECRET}`)
  process.exit();
});

require('./keep_alive.js')(); 

let DiscordReady = async _=>{
  console.log("Ready");
}

let DiscordMessage =  async message=>{

}

client.on('ready', DiscordReady);
client.on('message', DiscordMessage);