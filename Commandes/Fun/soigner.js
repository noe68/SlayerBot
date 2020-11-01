const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");
const fs = require("fs");

module.exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error_nomentions = new Discord.MessageEmbed()
            .setDescription("❌ Merci de mentionner une personne pour effectuer cette action.")
            .setColor("#F53436")
        message.channel.send(error_nomentions)
    }else {
        var soigner = new Discord.MessageEmbed()
            .setDescription("<@" + message.author.id + "> viens de soigner <@" + member.user.id + "> !")
            .setColor("#34363C")
            .setImage("https://zupimages.net/up/19/10/y5ao.jpg")
        message.channel.send(soigner)
    }
}

module.exports.help = {
    name: "soigner"
}