const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");
const fs = require("fs");
const moment = require("moment");
        
module.exports.run = async (bot, message, args) => {
    message.delete();
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
    const member = message.mentions.members.first()
    if (!member) return message.channel.send('⛔**Veuillez mentionner le membre à exclure.**')
    if (member.id === message.guild.ownerID) return message.channel.send('<:1626_warning_1:761999326930534400>**Vous ne pouvez pas exclure le propriétaire du serveur.**')
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('⛔**Vous ne pouvez pas exclure ce membre.**')
    if (!member.kickable) return message.channel.send('⛔**Le bot ne peut pas exclure ce membre.**')
    const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
    await member.kick(reason)
    message.channel.send(`<:2990_yes:761999327215878174>${member.user.tag} **a été exclu !**`)
        
}

module.exports.help = {
    name: "kick"
        
}
        