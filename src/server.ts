import express,{Express} from 'express'
import morganBody from 'morgan-body'
import path from 'path'
import fs from 'fs'
import moment from 'moment'
import router from '../src/router'
const config = require('../src/config/config.ts')

const app:Express = express()
app.use(express.json())


const log = fs.createWriteStream(
  path.join(__dirname, "logs", moment().format('YYYY-MM-DD')+".log"), { flags: "a" }
  );
  
morganBody(app,{
  stream:log
})  
console.log();

app.use('/api/v1',router)

app.listen(3001)