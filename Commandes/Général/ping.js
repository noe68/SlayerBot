const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");
const fs = require("fs");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  message.delete().catch(console.error);

    waiting = await message.channel.send("🏓 Je calcule le ping... ").catch(console.error);

    const embed = new Discord.MessageEmbed()
    .setAuthor("LATENCE DU BOT ", bot.user.avatarURL)
    .setColor("0380F6")
    .addField("** 🏓 Slayer Bot :**", + `${waiting.createdTimestamp - message.createdTimestamp}` + "ms", true)
    .setTimestamp(message.createdAt)
    .setThumbnail("https://cdn.discordapp.com/attachments/768916508884729898/769091338259922954/Slayer___Bot_1.png")
    .setFooter("Demandé par @" + message.author.tag, bot.user.avatarURL)
    waiting.edit(embed).catch(console.error);
}
module.exports.help = {
  name: "ping"
}
