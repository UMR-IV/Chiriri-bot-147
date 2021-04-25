const Discord = require('discord.js')
const client = new Discord.Client()

const command = require('./command')

//=============================================
client.on('ready', () =>{
    console.log('Chiriri is online!')

    command(client, 'ping', message =>{
        message.channel.send('Pong!')
    })
})
//=============================================



//=============================================
client.login(process.env.DJS_TOKEN)
 
