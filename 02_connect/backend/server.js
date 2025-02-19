import express from 'express';
import 'dotenv/config'

const app=express();
const port=process.env.PORT || 3000;

// app.get('/',(req,res)=>{
//     res.send("server is ready");
// });

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'second joke',
            content:'This is a second joke'
        },
        {
            id:3,
            title:'third joke',
            content:'This is a third joke'
        },
        {
            id:4,
            title:'forth joke',
            content:'This is a forth joke'
        },
        {
            id:5,
            title:'fifth joke',
            content:'This is a fifth joke'
        },
        {
            id:6,
            title:'sixth joke',
            content:'This is a sixth joke'
        },
    ]
    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})


