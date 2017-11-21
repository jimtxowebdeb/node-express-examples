- https://thedevs.network/blog/build-a-simple-telegram-bot-with-node-js

```
npm init

npm install telegraf --save  
```
Now let's add it to our script and make a simple bot:
```
const Telegraf = require('telegraf');
const app = new Telegraf(YOUR_TOKEN_HERE);

app.hears('hi', ctx => {
  return ctx.reply('Hey!');
});

app.startPolling();
```
