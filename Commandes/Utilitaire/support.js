const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");

module.exports.run = (client, message, args) => {
        message.delete();

        const embed = new Discord.MessageEmbed()
        .setDescription("🛠️**Tu veux rejoindre le serveur support ??\n\n✅Voila le lien pour le rejoindre :** [Rejoind-moi!](https://discord.gg/9XZA9BS)")
        .setColor("#0380F6")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setThumbnail("https://cdn.discordapp.com/attachments/768916508884729898/769091338259922954/Slayer___Bot_1.png")
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'support',
  };