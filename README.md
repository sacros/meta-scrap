# Webpage Metadata Scrapper

## Steps to run:

1. clone into local machine 
```sh
git clone https://github.com/sacros/meta-scrap
```

2. install node packages
```sh
npm i
```

3. build the app
```sh
npm run build
```

4. start the app
```sh
# default is 3001
PORT=5001 npm run start
```

5. call the api
```sh
curl --request POST \
  --url http://localhost:3001/scraper-service/scrape \
  --header 'content-type: application/json' \
  --data '{
	"url": "https://z.cash/technology/zksnarks/"
}
'
```