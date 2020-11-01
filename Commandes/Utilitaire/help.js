const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");

module.exports.run = (client, message, args) => {
        message.delete();

        const embed = new Discord.MessageEmbed()
        .setDescription("__**Lien pour m'ajouter**__ : [Ajoute-Moi!](https://discord.com/api/oauth2/authorize?client_id=763786835037519903&permissions=8&scope=bot)\n\n**Voici mon prefix** : ``s!``\nA utilisé sur toutes les commandes!\n\nImportant :\n•``report`` <Votre Reports>\n\n **🏅 Administration :**\n•``mp``•``annonce``•``sondage``\n\n**🥇 Equipe:**\n•``credit``\n\n**👮 Modération:**\n• ``ban``•``kick``•``clear``•``say``•``mp``\n\n**🎧 Musique:**\n•``join``\n\n**👍 Géneral:**\n•``avatar``•``ping``\n\n**📢 Information:**\n•``botinfo``•``serverinfo``•``userinfo``•``covid``•``meteo``•``botlist``\n\n**✅ Utilitaire:**\n•``invite``•``support``•``help``•``vraieoufaux``\n\n**🎮 Jeux:**\n•``8ball``•``dice``•``calcul``\n\n**🕹️ Fun:**\n•``meme``•``kiss``•``calin``•``frapper``•``soigner``\n\n**🆕 Gifs:**\n•``cat``•``dog``•``fail``•``pout``")
        .setColor("#0380F6")
        .setTitle("📃 Voici la liste des commandes")
        .setThumbnail("https://cdn.discordapp.com/attachments/768916508884729898/769091338259922954/Slayer___Bot_1.png")
        .setFooter("©️ Slayer Bot - 2020. Tous droits réservés.", client.user.avatarURL())
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'help',
  };

