import * as Koa from "koa"
import * as Router from "koa-router"
import * as bodyparser from "koa-bodyparser"
import { scraperRouter } from "./router"

export const app = new Koa()

app.use(bodyparser())

const router = new Router()
router.use("/scraper-service", scraperRouter.routes())
app.use(router.routes())