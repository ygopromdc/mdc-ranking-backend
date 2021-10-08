// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const { Client, Intents } = require('discord.js');
// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });
const client = new Client({ intents: [Intents.FLAGS.GUILD_MEMBERS] });
client.login('ODk0ODE2MDI0MTIwMTM5Nzg2.YVvgXQ.BD1uNlbiQfBy4hfRxfVHdDS3syU');

// Declare a route
fastify.get('/', async (req, res) => {
    // client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const guild = client.guilds.cache.get('723594962851332197');
    const members = await guild.members.fetch();
    var data = [];
    members.map(async (member, i) => {
        // console.log(member.user.username)
        let obj = {
            "id": member.user.id,
            "username": member.user.username,
            "discriminator": member.user.discriminator,
            "avatar":`https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png`
            // ...payload
        };
        data.push(obj);
    });
    return data;
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(process.env.PORT, '0.0.0.0')
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
