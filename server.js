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
        const guild = await client.guilds.cache.get('723594962851332197');
        guild.members.fetch().then(members => {
            var guildmembers = [];
            members.forEach(member => {
                guildmembers.push(member)
            });
            // client.destroy();
            return guildmembers;
        });
    // });
    
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
