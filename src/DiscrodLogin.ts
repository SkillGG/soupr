import * as discordJS from "discord.js"

export let isTextChannel = (channel: discordJS.Channel): channel is discordJS.TextChannel => channel.type === "text";
export let isDMChannel = (channel: discordJS.Channel): channel is discordJS.DMChannel => channel.type === "dm";

export const DiscordClient = new discordJS.Client()

// login to Discord
export let DiscordLogin = (token: string, onsuccess?: (attr: string) => string, onfail?: (reason: any) => PromiseLike<never>): void => {
    DiscordClient.login(token).then(onsuccess || ((_) => console.log("Logged in!")), onfail || ((r) => console.error(r)))
}