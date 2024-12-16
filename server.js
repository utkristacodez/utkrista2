const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/'))); // Serve static files from the website folder

app.post('/submit', (req, res) => {
    const { name, email, phone, amount, date, location } = req.body;
    const data = `Name: ${name}, Email: ${email}, Phone: ${phone}, Amount: ${amount}, Date: ${date}, Location: ${location}\n`;

    // Save the information to a file
    fs.appendFile('data.txt', data, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred while saving the data.');
        }
        res.status(200).send('Data saved successfully.');
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
