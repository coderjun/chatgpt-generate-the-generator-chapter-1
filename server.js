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
        // https://help.openai.com/en/articles/6283125-what-happened-to-engines -- had to change it from https://api.openai.com/v1/engines/davinci/completions
        // Also, went to https://platform.openai.com/playground?lang=node.js&mode=chat&model=gpt-3.5-turbo and reviewed the code snippet to figure out how to form the object.
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [
              {
                "role": "system",
                "content": promptText
              }
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        }, {
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY', // Replace with your OpenAI API key
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data.choices[0].message.content.trim());
    } catch (error) {
        res.status(500).send('Error generating chord progression');
        // START - Response Debugging
        // res.status(500).send('Error generating chord progression: ' + error.response.data.error.message);
        // END 
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});