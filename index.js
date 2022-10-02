const Discord = require('discord.js')
const client = new Discord.Client()

const command = require('./command.js')  
const welcome = require('./welcome.js')
//=============================================
client.on('ready', () =>{
    console.log('Chiriri is online!')

    welcome(client)
    
    command(client, ['ping', 'test'], message =>{
        message.channel.send(`${message.author.toString()} Pong!`)
        message.react('😄')
    })

    command(client, 'help', message =>{
         let embed = new Discord.MessageEmbed()
         .setTitle("Commands [%]")
         .setDescription("- help\r\n(list the commands)\r\n- ping/test\r\n(for testing purpose)\r\n- status\r\n(to change the status display for the bot)\r\n- servers\r\n(display the number of members in the servers)\r\n- cc/clearchannel\r\n(clearing the whole messages in the channel *only for messsages that are not exeeded 14 days)")
         .setColor("BLUE")
         .setFooter("Author: UMR_IV   Latest update: 25/4/2021")
         message.channel.send(embed)
    })
    
        command(client, 'rules', message =>{
        let embed = new Discord.MessageEmbed() 
         .setTitle("Server Rules")
         .setDescription("**#1 Be mature and polite.**\r\nRespect everybody regardless of race, religion, where they live, etc. Do not discriminate against others.\r\n\r\n**#2 Respect each others views and opinions.**\r\nDo not attack others for not sharing the same opinion and do not force your views on them.\r\n\r\n**#3 Have fun**")
         .setColor("BLUE")
         .setFooter("")
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
