module.exports = client => {

    const channelId = '795758984966438912' //testing channel
    client.on('GuildMemberAdd', (member) =>{
        console.log(member)

        const message = `Welcome to the server <@${member.id}>, I will ping <@${664063399092813834}> for you`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
