const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  message.delete();
    const embedok = new Discord.MessageEmbed()
    .setDescription(":x: | Désolé, Veuillez me posé une question avant d'effectuer cette action.")
    .setFooter("Slayer")
    .setColor("#2f3136")
    .setTimestamp()
    if (!args[1]) return message.reply(embedok);
  
    let replies = ["Oui", "Non", "Peut-être", "Probablement que oui", "Probablement que non"];
    let question = args.slice(0).join(" ");
    let res = Math.floor(Math.random() * replies.length);
    
    let askEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag)
      .setColor("#2f3136")
      .addField("Question", question)
      .addField("Réponse", replies[res])
      .setFooter("Slayer");
    
    message.channel.send(askEmbed)
  };

  module.exports.help = {
      name: '8ball',
      cooldown: 10,
  };