const Koa = require('koa');
const app = new Koa()

app.use(async(ctx) => {
    ctx.body = 'hello xiaofan';
})

app.listen(300)
console.log('this demo is starting in port 300');