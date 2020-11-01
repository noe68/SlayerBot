const Discord = require("discord.js");
const {PREFIX} = require("../../config.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
    if(message.author.id !== "VOTRE ID") return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commands`);

    let bicon = bot.user.displayAvatarURL();

    let string = '';
    bot.guilds.cache.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;

    let botembed = new Discord.MessageEmbed()
        .setColor("#4135FF")
        .setTitle("ServerList")
        .setDescription(string)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())
        .setThumbnail(bicon)
    
    message.channel.send(botembed);
}

module.exports.help = {
    name: "botlist"
}