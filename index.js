const Discord = require('discord.js')
const client = new Discord.Client()

const prif = ''; //prefix

const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name, command);
}

client.on('ready', () =>{
    console.log('Chiriri is online!')
})

client.on('message', message =>{
    if(!message.content.startsWith(prif) || message.author.bot) return;

    const args = message.content.slice(prif.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
         message.channel.send('<@!664063399092813834>')
         message.channel.send('<a:UMRPat:805597149509320734>')
         message.react('<a:UMRPat:805597149509320734>')
        
    } 
});

client.login(process.env.DJS_TOKEN)
