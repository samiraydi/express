const express = require('express')

const app = express()


app.use(date = (req, res, next) => {

    let requersAt = new Date().toString().
        replace(/T/, ' ').
        replace(/\..+/, '')
        .slice(16, 18)
               console.log(requersAt-1)
        if(requersAt-1<=17 && requersAt-1>=8){ next()}
        else{res.send('Our office is not open now')}

})


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
})

app.get('/ourservices', (req, res) => {
    res.sendFile(__dirname + '/public/ourservices.html')
})

app.listen(3000, (err) => {
    if (err) console.log("server is not running")
    else console.log("server is running on port 3000")
})