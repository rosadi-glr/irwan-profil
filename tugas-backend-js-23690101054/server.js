const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.post('/contact', (req, res) => {
    const { name, message } = req.body;
    if (name.length < 3) {
        return
    res.status(400).send("Gagal: pesan minimal harus 3 karakter!");
    }
    if (message.length < 10) {
        return
    res.status(400).send("Gagal: pesan minimal harus 10 karakter!");
    }
    res.send('Terima kasih ${name}, pesan anda: "${message}" telah kami terima.');
});

app.listen(3000, () => {
    console.log("server jalan di http://localhost:3000");
});