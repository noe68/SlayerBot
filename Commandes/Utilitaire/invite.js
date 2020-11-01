const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");

module.exports.run = (client, message, args) => {
        message.delete();

        const embed = new Discord.MessageEmbed()
        .setDescription("**✅Voici le lien pour inviter le bot:** [Invitation](https://discord.com/api/oauth2/authorize?client_id=763786835037519903&permissions=8&scope=bot)")
        .setColor("#0380F6")
        .setTitle("❓Tu veux inviter le bot dans ton serveur ?")
        .setThumbnail("https://cdn.discordapp.com/attachments/768916508884729898/769091338259922954/Slayer___Bot_1.png")
        .setFooter("©️ Slayer Bot - 2020. Tous droits réservés.", client.user.avatarURL())
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'invite',
};