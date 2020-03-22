const Router = require('koa-router')
const router = new Router();

router
  .get('/api/', (ctx, next) => {
    ctx.body = 'Hello world!'
  })
  .get('/api/test', (ctx, next) => {
    ctx.body = {
      msg: 'here is the message',
      query: ctx.query,
      queryStr: ctx.querystring,
    }
  })

module.exports = router