import Axios from "axios"
import * as cheerio from "cheerio"

const httpClient = Axios.create({
  timeout: 15000000
})

const scrape = async (url) => {
  const htmlData = await httpClient.get(
    url
  )

  const $ = cheerio.load(htmlData.data)

  const parsedData = {
    title: $('head title').text(),
    description: $('meta[name="description"]').attr('content'),
    keywords: $('meta[name="keywords"]').attr('content'),

    ogTitle: $('meta[property="og:title"]').attr('content'),
    ogDescription: $('meta[property="og:description"]').attr('content'),
    ogType: $('meta[property="og:type"]').attr('content'),
    ogUrl: $('meta[property="og:url"]').attr('content'),
    ogImage: $('meta[property="og:image"]').attr('content'),
    ogVideo: $('meta[property="og:video"]').attr('content'),
    ogkeywords: $('meta[property="og:keywords"]').attr('content'),
    images: $("img").toArray().filter(x => x.attribs && x.attribs.src && x.attribs.src.startsWith("http")).map(x => x.attribs.src)
  }

  return {
    title: parsedData.ogTitle || parsedData.title,
    description: parsedData.ogDescription || parsedData.description,
    type: parsedData.ogType,
    keywords: parsedData.ogkeywords || parsedData.keywords,
    url: parsedData.ogUrl,
    video: parsedData.ogVideo,
    images: [...new Set([parsedData.ogImage, ...(parsedData.images || [])])]
  }
}


export { scrape }