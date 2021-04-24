const Discord = require('discord.js')
const client = new Discord.Client()


client.on('ready', () =>{
    console.log('Chiriri is online!')
})

client.login(process.env.DJS_TOKEN)
