const Discord = require('discord.js')

module.exports.run = (client, message, agrs) => {
    message.delete()

    const embeb = new Discord.MessageEmbed()
    .setTitle("✅ Voici toute les commande du SlayerBot : ")
    return message.channel.send(embeb)
}

module.exports.help = {
    name : "test"
}