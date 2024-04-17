const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3500

app.use('/',express.static(path.join(__dirname, 'public')))

app.use('/', require(path.join(__dirname, 'routes', 'root')))

app.all('*', (req,res) => {
    res.status(404)

    req.accepts('html') ? res.sendFile(path.join(__dirname, 'views', '404.html')) 
        : req.accepts('json') ? res.json({message:'404 Resource not found'}) 
            : res.type('txt').send('404 Resource not found')
  
})

app.listen(PORT, () => console.log("Server listening on PORT : " + PORT))