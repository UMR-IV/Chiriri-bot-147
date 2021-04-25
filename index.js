const Discord = require('discord.js')
const client = new Discord.Client()

const command = require('./command')



//=============================================
client.on('ready', () =>{
    console.log('Chiriri is online!')

    command(client, ['ping', 'test'], message =>{
        message.channel.send(`${message.author.toString()} Pong! <a:WavyNanaYay:795365605146492979>`)
        message.react('<a:UMRPat:805597149509320734>')
    })

    command(client, 'help', message =>{
        let embed = new Discord.MessageEmbed()
         .setTitle("Commands")
         .setDescription("-help\r\n-ping/test\r\n-status\r\n-servers\r\n-cc/clearchannel")//`${message.author.toString()} you are about to be banned`)
         .setColor("BLUE")
         .setFooter("Author: UMR_IV   Latest update: 25/4/2021")
         message.channel.send(embed)
    })

    command(client, 'servers', message =>{
        client.guilds.cache.forEach(guild =>{
            message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`)
        })
    })

    command(client, ['cc', 'clearchannel'], message =>{
        if (message.member.hasPermission('ADMINISTRATOR')){
            message.channel.messages.fetch().then((results) =>{
                message.channel.bulkDelete(results)
            })
        }
    })
    command(client, 'status', message =>{
        const content = message.content.replace('%status ', '')
        // "%status hello world" -> "hello world"

        client.user.setPresence({
            activity: {
                name: content,
                type:0,
            },
        })
    })
})

//=============================================
client.login(process.env.DJS_TOKEN)
