const express = require('express');
const axios = require('axios');
const app = express();

// START - https://www.digitalocean.com/community/tutorials/use-expressjs-to-deliver-html-files
const path = require('path');
// END

const PORT = 3000;



// Middleware to parse JSON requests
app.use(express.json());

// START - https://www.digitalocean.com/community/tutorials/use-expressjs-to-deliver-html-files
// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
// END

app.post('/generate-chords', async (req, res) => {
    const genre = req.body.genre;
    const promptText = `Generate a chord progression for a ${genre} song with a verse, bridge, and chorus.`;

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
            prompt: promptText,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY', // Replace with your OpenAI API key
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data.choices[0].text.trim());
    } catch (error) {
        res.status(500).send('Error generating chord progression');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});