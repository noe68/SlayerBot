const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");
const fs = require("fs");
const moment = require("moment");

module.exports.run = (client, message, args) => {
        message.delete();

        if(message.mentions.users.first()) {
            user = message.mentions.users.first();
       } else{
            user = message.author;
        }
        const member = message.guild.member(user);

        var mentionned = message.mentions.users.first() || message.author
        
        const embed = new Discord.MessageEmbed() 
        .setColor('#0380F6')
        .setThumbnail(user.avatarURL)
        .setTitle(`📝Information sur ${user.username}#${user.discriminator} :`)
        .addField('📃ID du compte:', `${user.id}`, true)
        .addField('✏️Pseudo sur le serveur :', `${member.nickname ? member.nickname : 'Aucun'}`, true)
        .addField('🕐A crée son compte le :', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('⏰A rejoint le serveur le :', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('🖥️Status:', `${user.presence.status}`, true)
        .addField('🕹️Joue a :', `${user.presence.game ? user.presence.game.name : 'Rien'}`, true)
        .addField('👥Roles :', member.roles.cache.map(roles => `${roles.name}`).join(', '), true)
        .addField(`💬En réponse a :`,`${message.author.username}#${message.author.discriminator}`)
        message.channel.send(embed).then(message => message.delete({ timeout: 15000 }));
        return message.channel.send(embed)
    

}

module.exports.help = {
    name: 'userinfo',
  };
