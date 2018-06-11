const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

let home = new Router();
home.get('/jspang', async(ctx) => {
  ctx.body = 'home jspang page!';
}).get('/todo', async(ctx) => {
  ctx.body = 'home todo page!';
})

let todo = new Router();
todo.get('/jspang', async(ctx) => {
  ctx.body = 'todo jspang page!';
}).get('/todo', async(ctx) => {
  ctx.body = 'todo todo page!';
})

router.use('/home', home.routes(), home.allowedMethods());
router.use('/todo', todo.routes(), todo.allowedMethods());

app.use(router.routes(),router.allowedMethods());

app.listen(300)
