const express = require ('express')
const app = express();
const authRoutes = require ('./auth');

app.use('/auth',authRoutes)

app.listen(9000,function()
{
    console.log('server is running on port:9000')
})