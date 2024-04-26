
                (async()=>{
                const Discord = require("discord.js");
                const Database = require("easy-json-database");
                const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                const s4d = {
                    Discord,
                    database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                    joiningMember:null,
                    reply:null,
                    tokenInvalid:false,
                    tokenError: null,
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION"]
                });

                s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == 'test') {
    s4dmessage.channel.send(String('Hey!'));
  }

});

await s4d.client.login('MTIyOTE0NTMxNzc5OTEwMDU1Ng.G2FXYU.83xRh-wOJi2QxQC6YzSQoYc_RHDPnXzLib8PjA').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });


                return s4d;
                })();
            