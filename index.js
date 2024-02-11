const express = require('express')
const app = express()

app.listen(8000, () => {
    console.log('Express app run successfully');
})



app.get('/', (req, res) => {
    res.send('Hello This is first express app')
})

app.post("/about", function (req, res) {
    res.send('This is about page and hi this is Raian')
})

app.put("/contact", function (req, res) {
    res.send('This is contact page and hi this is Raian')
})

// status code :
app.get("/status", function (req, res) {
    res.status(401).end('Unauthorized')
})

// JSON Response :
app.get('/json', (req, res) => {
    const jasonFile = [
        {
            name: "raian",
            id: 1,
            password: "csde34"
        },
        {
            name: "raian",
            id: 1,
            password: "csde34"
        },
        {
            name: "raian",
            id: 1,
            password: "csde34"
        },
    ]

    res.json(jasonFile);
})

// Download file :
app.get('/download', (req, res) => {
    res.download('./assets/certificate.pdf')
})