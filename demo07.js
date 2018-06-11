const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'hello,xiaofan!';
})
.get('/tode', (ctx, next) => {
  ctx.body = 'this is todo page'
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(300, () => {
  console.log('the demo is starting at port 300');
})
