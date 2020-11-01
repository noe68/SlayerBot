//----------------Discord.js----------------
const {Collection, Client} = require("discord.js"),
        client = new Client();
        const Discord = require('discord.js');

const fs = require('fs');
const {TOKEN, PREFIX } = require("./config.js");
const moment = require("moment");
const ms = require("ms");
const weather = require('weather-js')
const request = require('request');
const ytdl = require('ytdl-core-discord');

client.commands = new Collection();

client.login(TOKEN);

//----------------Handler.js----------------

// Recherche de toutes les commandes
fs.readdir("./Commandes/", (err, content) => {
    if(err) console.log(err);
    if(content.length < 1) return console.log('Veuillez créer des dossiers dans le dossier commandes !');
    var groups = [];
    content.forEach(element => {
        if(!element.includes('.')) groups.push(element); // Si c'est un dossier
    });
    groups.forEach(folder => {
        fs.readdir("./Commandes/"+folder, (e, files) => {
            let js_files = files.filter(f => f.split(".").pop() === "js");
            if(js_files.length < 1) return console.log('Veuillez créer des fichiers dans le dossier "'+folder+'" !');
            if(e) console.log(e);
            js_files.forEach(element => {
                let props = require('./Commandes/'+folder+'/'+element);              client.commands.set(element.split('.')[0], props);
            });
        });
    });
  });

// EVENTS
fs.readdir('./Events/', (error, f) => {
  if (error) {
      return console.error(error);
  }
  console.log(`[INFO] ${f.length} fichiers dans le dossier events chargé avec succès ! `);

  f.forEach((f) => {
      let events = require(`./Events/${f}`);
      let event = f.split('.')[0];

      client.on(event, events.bind(null, client));

  });
});


//---------------Connection------------
client.on("ready", async () =>{ 
  console.log("Le bot est Allumé!")
  client.user.setStatus("dnd");
  setInterval(() => {
      client.user.setActivity(`${PREFIX} Mon prefix`, {type: "PLAYING"});
      setTimeout(function() {
        client.user.setActivity("Créer par toute son équipe!!", {type: "PLAYING"});
      }, 10000)
      setTimeout(function() {
        client.user.setActivity(`${PREFIX}invite`, {type: "PLAYING"});
      }, 10000)
      setTimeout(function() {
        client.user.setActivity(`sur ${client.guilds.cache.size.toString()} serveur`, {type: "PLAYING"});
      }, 10000)
  }, 30000)

});

client.on('guildCreate', guild => { 
  const embed = new Discord.MessageEmbed()
      .setDescription(`Voici un nouveaux serveur qui a ajouter **${client.user.username}**`)
      .addField(`📇 Nom du serveur :`, `${guild.name}`)
      .addField(`👑 Propriétaire:`, `${guild.owner}`)
      .addField(` Nombre de membres:`, `${guild.memberCount}`)
      .addField(":earth_asia: **• Région du serveur** :", guild.region, true)
      .addField(` Id du serveur:`, `${guild.id}`)
      .addField(" 📝 **• Nombre de salons** :", guild.channels.cache.size, true)
      .addField(" 📝 **• Nombre de rôles** :", guild.roles.cache.size, true)
      .addField(" 📝 **• Nombre d'emojie** :", guild.emojis.cache.size, true)
      .setColor("#fc3d12")
      .setThumbnail(guild.iconURL())
      .setFooter( `SlayerBot est dans ${client.guilds.cache.size} serveurs maintenant`, client.user.displayAvatarURL())
    client.channels.cache.get('769896817046978600').send(embed);
});

client.on('message', async message => {
  let config = require("./config.js")
if (message.channel.type === "dm") return;
if (message.author.bot) return;
       

const mentionemb = new Discord.MessageEmbed()
.setDescription(`Bonjour, je suis <@763786835037519903> si vous voulez de l'aide écrivez : \`s!help\`\n\nVous pouvez aussi m'ajoutez dans votre serveur en fesant cette commande: \`s!invite\``)
.setColor(`#4F6CFF`)
if(message.mentions.users.has(client.user.id)) {message.channel.send(mentionemb);};

})

