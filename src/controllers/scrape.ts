import * as Koa from "koa"
import { scrape } from "../scrape"

export namespace ScrapeController {

  export const scrapeUrl: Koa.Middleware = async ctx => {
    const { url } = ctx.request.body as { url: string }

    const metadata = await scrape(url)
    
    console.log('asd')
    console.log(metadata)
    
    ctx.body = {
      success: true,
      data: metadata
    }

  }

}