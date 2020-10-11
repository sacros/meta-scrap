import * as Router from "koa-router"
import { ScrapeController } from "./controllers"

export const scraperRouter = new Router()

scraperRouter.post("/scrape", ScrapeController.scrapeUrl)