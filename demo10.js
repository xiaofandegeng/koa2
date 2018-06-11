const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
  if(ctx.url === '/index'){
    ctx.cookies.set(
      'myname','xiaofan',{
        domain:'127.0.0.1',
        path:'/index',
        maxAge:1000*60*60*24,
        httpOnly:false,
        overwrite:false
      }
      );
    ctx.body = 'cookies is ok'
  }
  else{
    if(ctx.cookies.get('myname')){
      ctx.body = ctx.cookies.get('myname');
    }
    else{
      ctx.body = 'cookies is no';
    }
  }
})

app.listen(300)
