import express from 'express'
import 'dotenv/config'
const app = express()
const port=4000
fafdaf
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user',(req,res)=>{
    res.send("Siddharth Kushwaha")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('youtube')
})
app.get('/youtube2',(req,res)=>{
    res.send('youtube2')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})