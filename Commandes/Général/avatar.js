const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");

module.exports.run = (client, message, args) => {
        message.delete();

        var mentionned = message.mentions.users.first() || message.author

        let embed = new Discord.MessageEmbed()
        .setDescription(`Avatar de [${mentionned.username}](${mentionned.avatarURL()})`)
        .setImage(mentionned.avatarURL())
        .setColor("#0380F6")

        message.channel.send(embed)
    

}

module.exports.help = {
    name: 'avatar',
  };
