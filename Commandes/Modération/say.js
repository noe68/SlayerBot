const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");
const fs = require("fs");
const moment = require("moment");

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
         var error_permissions = new Discord.MessageEmbed()
            .setDescription("❌ Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#0380F6")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("ADMINISTRATOR")) {
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ");
    if (!args[0]) {
        var error = new Discord.MessageEmbed()
            .setDescription("❌ **Merci d'entrer un message pour effectuer cette commande.**")
            .setColor("#0380F6")
        message.channel.send(error)
    }else {
    var say = new Discord.MessageEmbed()
        .setDescription(thingToEcho)
        .setColor("#0380F6")
    message.channel.send(say)
    message.delete();
}
}
}

module.exports.help = {
    name: "say"
}