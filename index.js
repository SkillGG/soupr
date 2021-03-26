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

client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
  FixMessage();
});

client.on('message', msg => {
    if (msg.content = '.TEST') {
      //FixMessage();
      //msg.channel.send('yo');
    }
    if (msg.author.id != client.user.id) {
    //    bot.BOT(Discord, client, msg);
    }
});