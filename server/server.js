const express = require('express');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static('../public')); // Serve your frontend files (HTML, CSS, JS)

app.get('/', (req, res) => {
    res.send('Welcome to the Cat App!');
});

app.get('/cat-gif', async (req, res) => {
    try {
        const response = await fetch(
            'https://api.thecatapi.com/v1/images/search?mime_types=gif',
            {
                headers: { 'x-api-key': process.env.API_KEY },
            }
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching cat GIF:', error);
        res.status(500).send('Error fetching cat GIF');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
