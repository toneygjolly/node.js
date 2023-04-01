var express=require('express')
const port =3001
var app=express()
app.listen(port,function(){
    console.log(`port is listening on${port}`)
})