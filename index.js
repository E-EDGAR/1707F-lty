const Koa = require('koa')
const app = new Koa();

const router = require("koa-router")()
const query = require('./db/index')

app.use(router.routes())
app.use(router.allowedMethods());

router.get('/userliu',async(ctx,next)=>{
    let data = await query()
    ctx.body = {
        code:1,
        data
    }
})

app.listen(3000,()=>{
    console.log("服务启动成功");
})