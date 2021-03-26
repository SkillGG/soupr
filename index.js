// Discord.js
const Discord = require("discord.js");
const client = new Discord.Client();

// useful regular expressions
const RX = require("./useful-regx.js")

// .env handling
require("dotenv").config();
// safe Discord login (catches errors)
(async()=>{await client.login(process.env.DISCORD_BOT_SECRET);})().catch(_=>{
  console.error("Error logging in!", _);
  console.error(`Failed Token: ${process.env.DISCORD_BOT_SECRET}`)
  process.exit();
});

// get Database support
const Database = require("./Mongo/mongo.js");

// keep alive
require('./keep_alive.js')(); 

// Channel's IDs
const Channels = {
  Main:"824704601717604353"
}

// on.ready
let DiscordReady = async _=>{
  await Database.CheckConnectionOnStart()
  .catch(_=>console.error("Error connecting to Database!"));
  console.log("Ready");
}

// on.message
let DiscordMessage =  async message=>{

  // if on main and not bot
  if(message.channel.id === Channels.Main && message.author.id !== client.user.id){
    let msg = message.content;
    // check command
    let rx = /^!(.+?)([\S:]?(.*?))?$/; // !<name>[[ :]<arguments>]
    let rxMatch;
    
    if(rxMatch = rx.exec(msg)){
    
      let command = rxMatch[1]; msg = rxMatch[2];
      switch(command.toLowerCase()){
        case "show":


        break;
      }
    }else {
      console.error("Command not found!");
    }

  }
}


// set up callbacks
client.on('ready', DiscordReady);
client.on('message', DiscordMessage);