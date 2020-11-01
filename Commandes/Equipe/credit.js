const Discord = require("discord.js");
const {PREFIX} = require("../../config")

module.exports.run = (client, message, args) => {
    message.delete();

    const embed = new Discord.MessageEmbed()
    .setTitle("Voici tous les credits du bot!!")
    .setDescription("**🥇 Le créateur du bot** : Jack's Nooob#6859\n\n**⌨️ Développeur** du bot: Ayato#1732 \n\n**🌐 Responsable du site** : Jack's Nooob#6859\n\n**🖥️ Responsable du discord** : Azoki#0001")
    .setFooter("©️ Slayer Bot - 2020. Tous droits réservés.", client.user.avatarURL())
    .setTimestamp()
    .setColor("#0380F6")
    return message.channel.send(embed)

}

module.exports.help = {
    name: 'credit'
};