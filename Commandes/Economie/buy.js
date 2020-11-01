const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "buy",
    description: "Buy an item from the store",

    async run (client, message, args) {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Veuillez fournir un article à acheter')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'voiture' || 'voiture'){
            if(amount < 500) return message.channel.send('Vous n\'avez pas assez d\'argent pour acheter cet article. Veuillez en essayer un autre');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "Car");
            message.channel.send('A acheté une voiture avec succès')
        }
        if(purchase === 'télé' || 'télé'){
            if(amount < 250) return message.channel.send('Vous n\'avez pas assez d\'argent pour acheter cet article. Veuillez en essayer un autre');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 250);
            db.push(message.author.id, "télé");
            message.channel.send('A acheté une télé avec succès')
        }
    }
}