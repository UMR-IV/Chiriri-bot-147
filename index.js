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
        
    } else if(command == 'youtube'){                                        //change message input here
            if(message.member.roles.cache.has('664063399092813834')){
                message.channel.send('https://cdn.discordapp.com/attachments/792676622939455512/806168433749131344/Wife2.mp4')
            } else if(message.member.roles.cache.has('769820874353147944')){
                message.channel.send('https://cdn.discordapp.com/attachments/792676622939455512/806168433749131344/Wife2.mp4')
            } else{
                message.channel.send('No permission')
    }
});

client.login(process.env.DJS_TOKEN)
