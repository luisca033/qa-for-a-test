const express=require('express');
const { test } = require('./test/test');
const app=express()

app.get('/',test)
app.listen(5000,()=>{
    console.log('To run the test go to the localhost:5000');
})