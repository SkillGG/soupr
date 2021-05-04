require("dotenv").config();
import { DiscordAPIError, Message, TextChannel } from "discord.js";

// Discord.js
import { DiscordClient, DiscordLogin, isTextChannel } from "./DiscrodLogin";
DiscordLogin(process.env.DISCORD_BOT_SECRET)
// get Database support
import { DatabaseAccess } from "./Mongo/mongo";
// keep alive
import keepAlive from "./keep_alive";
keepAlive();

interface ChannelList {
  obj: {
    Main: TextChannel
  }
  Main: string
}

// Channel's IDs
const Channels: ChannelList = {
  obj: {
    "Main": null
  },
  "Main": "824704601717604353"
}

// on.ready
let DiscordReady = () => {
  // load channels to Channels
  DiscordClient.channels.fetch(Channels.Main).then(ch => { if (isTextChannel(ch)) Channels.obj.Main = ch });
  DatabaseAccess.Connect(async (client, db, collection) => {
    // What to do in the database
  }).then(connectData => {
    // connected to database!
  }).catch(err => {
    // error
    console.log("Mongo Connection error!", err.message);
  })
}

// on.message
let DiscordMessage = async (message: Message) => {
  // if on main and not bot
  if (message.channel.id === Channels.Main && message.author.id !== DiscordClient.user.id) {
    let msg = message.content;
    // check command
    let rx = /^!(.+?)([\S:]?(.*?))?$/; // !<name>[[ :]<arguments>]
    let rxMatch;

    if (rxMatch = rx.exec(msg)) {

      let command = rxMatch[1]; msg = rxMatch[2];
      switch (command.toLowerCase()) {
        case "play":
          break;
      }
    } else {
      console.error("Command not found!");
    }

  }
}

// set up callbacks
DiscordClient.on('ready', DiscordReady).on('message', DiscordMessage);