import express from 'express'
const app = express()
import {
   start
} from 'live-server'

async function main() {
   app.listen(3001, () => {
      start({
         port: 3000,
         logLevel: 0,
         root: './public'
      })
   })
}

main()