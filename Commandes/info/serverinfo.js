const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");
const fs = require("fs");
const moment = require("moment");
const ms = require("ms");

module.exports.run = (client, message, args) => {
        message.delete();


        const embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#0380F6')
            .setTitle(`${message.guild.name} server stats`)
            .addFields(
                {
                    name: "🏅Créateur: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "🌐Région: ",
                    value: message.guild.region.toUpperCase(),
                    inline: true
                },
                {
                    name: "👥Membres: ",
                    value: `Il y a  ${message.guild.memberCount} membre!`,
                    inline: true
                },
                {
                    name: "👤Membres en ligne: ",
                    value: `Il y a ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} utilisateurs en ligne!`,
                    inline: true
                },
                {
                    name: "🤖Total Bots: ",
                    value: `Il y a ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "🕧Date de création: ",
                    value: message.guild.createdAt.toLocaleDateString("fr-eu"),
                    inline: true
                },
                {
                    name: "📄Nombre de rôles: ",
                    value: `Il y a ${message.guild.roles.cache.size} rôles dans ce serveur.`,
                    inline: true,
                },
                {
                    name: `👍Vérifié: `,
                    value: message.guild.verified ? 'Le serveur est vérifié' : `Le serveur n’est pas vérifié`,
                    inline: true
                },
                {
                    name: '🔮Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Il y a ${message.guild.premiumSubscriptionCount} Boosters` : `Il n’y a pas de boosters`,
                    inline: true
                },
                {
                    name: "✅Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `Il y a ${message.guild.emojis.cache.size} emojis!` : 'Il n’y a pas d’emojis' ,
                    inline: true
                }
            )
        message.channel.send(embed)
    }

        

    



module.exports.help = {
    name: 'serverinfo',
  };

