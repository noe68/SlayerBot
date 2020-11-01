const Discord = require("discord.js")

module.exports = async client => {
var now = new Date(); 
var hour= now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var times = (`[${hour}:${minute}:${second}]/`);

console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connexion en cours...');
console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connexion à l\'API Discord.js en cours...');
console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m', 'Connexion à l\'API Discord.js effectuée');
console.log(times+`\x1b[36m%s\x1b[0m`,'[INFO]', '\x1b[0m','Connecté sur ' + client.user.username + '#' + client.user.discriminator);
console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Chargement terminé');
console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Prêt et connecté');

const embed = new Discord.MessageEmbed()
.setTitle("Voici le status de SlayerBot")
.setDescription("✅ <@763786835037519903> **est désormais en ligne!**\n**Vous pouvez denouveaux l'utilisé!**")
.setThumbnail("https://cdn.discordapp.com/attachments/768916536844746782/769323313133912064/Slayer___Bot_1.png")
.setFooter("©️ Slayer Bot - 2020. Tous droits réservés.", client.user.avatarURL())

client.channels.cache.get('769896991441682462').send(embed)

}