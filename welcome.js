module.exports = (client) => {

    const channel = 'testing' //bot channel
    client.on('guildMemberAdd', (member) =>{
        console.log(member)

        const message = `Welcome to the server <@${member.id}>`

        const channel = member.guild.channels.cache.get(channel)
        channel.send(message)
    })
}
