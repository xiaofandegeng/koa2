const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
            <h1> Koa2 request post <h1>
            <form method='post' action = '/'>
                <p>username</p>
                <input name='usename'/><br/>
                <p>age</p>
                <input name='age'/><br/>
                <p>websit</p>
                <input name='website'/><br/>
                <button type='submit'>Click Me!</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        ctx.body = '接受到请求'
    } else {
        ctx.body = '这是404页面'
    }
})

app.listen(300, () => {
    console.log('starting!')
})