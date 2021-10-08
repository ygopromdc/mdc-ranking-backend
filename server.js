// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const { Client, Intents } = require('discord.js');
// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });
const client = new Client({ intents: [Intents.FLAGS.GUILD_MEMBERS] });

// Declare a route
fastify.get('/', async (req, res) => {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
        const guild = client.guilds.cache.get('723594962851332197');

        // Fetch and get the list named 'members'
        guild.members.fetch().then(members => {
            // Loop through every members
            var guildmembers = [];
            members.forEach(member => {
                // Do whatever you want with the current member
                // console.log(member.user.username)
                // console.log(member.user)
                guildmembers.push(member)
            });
            // client.destroy();
            return guildmembers;
        });
    });
    // fastify.log.info(req.query)
    client.login('ODk0ODE2MDI0MTIwMTM5Nzg2.YVvgXQ.BD1uNlbiQfBy4hfRxfVHdDS3syU');
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
