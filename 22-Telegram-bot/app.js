const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => {
  console.log('started:', ctx.from.id)
  return ctx.reply('Kaixo 2!')
})
bot.command('help', (ctx) => ctx.reply('Try send a sticker!'))
bot.hears('kaixo', (ctx) => ctx.reply('Kaixo. Zer moduz?'))
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy!'))
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.startPolling()
