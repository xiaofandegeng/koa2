const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    let url = ctx.url;
    let requese = ctx.request;
    let req_query = requese.query;
    let req_querystring = requese.querystring;

    ctx.body = {
        url,
        // requese,
        req_query,
        req_querystring
    }
});
app.listen(300, () => {
    console.log("[demo] server is starting in port 300!");
})