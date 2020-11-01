const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");
const moment = require("moment");
const ms = require('parse-ms');

module.exports.run = (client, message, args) => {
        message.delete();

        const embed = new Discord.MessageEmbed()
        .setColor("#0380F6")
        .setAuthor(`${client.user.username}`)
        .setThumbnail(client.user.avatarURL())
        .setDescription(`__**Lien du support**__ : [Support](https://discord.gg/DVN7qjy)`)
        .addFields(
            { name: '📊Mémoire', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}
            MB`, inline: true},
            { name: ':timer:Uptime', value: `${Math.floor(client.uptime / 1000 / 60).toString()}
            minutes`, inline: true},
            { name: '👥Utilisateurs', value: `${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}`, inline: true}, 
            { name: '📈Serveurs', value: `${client.guilds.cache.size.toString()}`, inline: true}, 
            { name: '✏️Salons', value: `${client.channels.cache.size}`, inline: true}, 
            { name: '🧾Version', value: `discord.js/V12`, inline: true}, 
            { name: '🗃️Hébergement :', value: `Hostim.fr`, inline: true},
            { name: '⌨️ Développeur :', value: `Jack's Nooob#6859 et Ayato#1732`, inline: true},
            { name: '🛠️Créer le :', value: `22/10/2020 à 13h30 **(${ms(Date.now()- client.user.createdAt, {long: true})})**`, inline: true},
            { name: '🛠️Version :', value: `1.0.0`, inline: true},
        )
        .setFooter("©️ Slayer Bot - 2020. Tous droits réservés.", client.user.avatarURL())
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'botinfo',
  };

