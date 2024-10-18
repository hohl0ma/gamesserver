const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Путь для обновления счётчика
app.post('/update_stat', (req, res) => {
    let counter = parseInt(fs.readFileSync('counter.txt', 'utf8')) || 0;
    counter += 1;
    fs.writeFileSync('counter.txt', counter);
    res.json({ status: 'success', counter: counter });
});

// Путь для получения текущего значения счётчика
app.get('/get_stat', (req, res) => {
    let counter = parseInt(fs.readFileSync('counter.txt', 'utf8')) || 0;
    res.json({ counter: counter });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
