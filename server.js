import express from 'express'
import * as dotenv from 'dotenv'
import usersRouter from './routers/users.js'
dotenv.config()  // must have, gọi hàm config trong thư viện dotenv
const app = express()
const port = process.env.PORT || 3000
// router
app.use('/users', usersRouter)


// thêm 1 cái root router khi client call đến đường dẫn root , tức là localhost:3002/
app.get('/', (req, res) => {
  res.send('respone from root router, haha12345')
})
app.listen(port, async() =>{
  console.log(`listening on port: ${port}`)
})

/*
import { sum, multiply, substract } from "./calculation.js"
console.log('Hello world')
console.log(`3 + 2 = ${sum(3, 2)}`)         
console.log(`3 * 2 = ${multiply(3, 2)}`)                     
console.log(`3 - 2 = ${substract(3, 2)}`)
*/