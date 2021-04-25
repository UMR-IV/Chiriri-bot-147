module.exports = (client) => {

    const channelId = '795758984966438912' //bot channel
    client.on('guildMemberAdd', (member) =>{
        console.log(member)

        const message = `Welcome to the server <@${member.id}>`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
