const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "calcul",
    description: "Get the answer to a math problem",


    async run (client, message, args){

        if(!args[0]) return message.channel.send('Veuillez poser une question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Veuillez fournir une question **valide**')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculatrice')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Réponse', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}