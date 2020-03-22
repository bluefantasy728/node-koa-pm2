const Koa = require('koa')
const app = new Koa()
const router = require('./api/test.js')

app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = Date.now() - start;
    console.log(ms + 'ms');

})

app.use(router.routes())

console.log('link!!!');

app.listen(3300);
