const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error_permissions = new Discord.MessageEmbed()
            .setDescription("⛔ Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
            .setColor("#0380F6")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let arg = message.content.split(" ").slice(1);
        let thingToEcho = arg.join(" ")
        if (!args[0]) return message.channel.send("⛔ Votre syntaxe est incorrecte. \n```Syntaxe : s!trueorfalse <Message>```")
        var trueorfalse = new Discord.MessageEmbed()
            .setTitle("❓ VRAI OU FAUX :")
            .addField(thingToEcho, "Répondez avec les réactions ✅ ou ⛔!")
            .setColor("#0380F6")
        message.channel.send(trueorfalse)
        .then(function (message){
            message.react("✅")
            message.react("⛔")
        }).catch(function(){

        });
        message.delete()
    }
}

module.exports.help = {
    name: "vraieoufaux"
}