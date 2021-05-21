module.exports = (client) => {

    const channelId = '835324451553148958' //general channel
    client.on('guildMemberAdd', (member) =>{
        console.log(member)

        //const message = `Welcome to the server <@${member.id}> I will ping <@664063399092813834> for you`
        const message = `Selamat datang ke Langit <@${member.id}> ! <a:NanaSmugGlasses:838780271641624617>`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}
