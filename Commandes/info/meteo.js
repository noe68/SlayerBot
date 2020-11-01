  const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "meteo",
    description: "Checks a weather forecast",

    async run (client, message, args){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Veuillez spécifier une localisation')

        if(result === undefined || result.length === 0) return message.channel.send('**Localisation non valide**');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Prévisions météorologiques pour ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Type de degré', 'Celsius', true)
        .addField('Vent', current.winddisplay, true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Humiditer', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}