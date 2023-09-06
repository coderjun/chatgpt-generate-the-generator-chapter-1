# chatgpt-generate-the-generator-chapter-1
Experimenting with ChatGPT App Dev Skills.

For this experiment I am using ChatGPT+ with the plugins "Prompt Perfect" and "WebPilot". Each commit will be a prompt and response with the associated code and recommendations. You will see the progression through git commits.

# First Volley

**Prompt:** perfect I would like to build a simple single file webpage that has a field to specify genre and a button that will invoke a call to chatgpt api to return chord progressions for an original verse, bridge, and chorus in that style 

**Response:** I understand your request. You want to create a single-file webpage with the following features:

1. A field where users can specify a musical genre.
2. A button that, when clicked, will make a call to the ChatGPT API.
3. The API call should return chord progressions for an original verse, bridge, and chorus in the specified genre.

Let's start by building the HTML structure for your webpage. Would you like me to provide you with a basic HTML template to achieve this?

**Prompt:** yes

**Response:** Alright, here's a basic HTML template for your webpage:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chord Progression Generator</title>
    <style>
        /* Add your CSS styles here */
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <h1>Chord Progression Generator</h1>
    <label for="genre">Select Genre:</label>
    <select id="genre">
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="jazz">Jazz</option>
        <!-- Add more genres as needed -->
    </select>
    <button onclick="getChordProgression()">Generate Chord Progression</button>

    <div id="result">
        <!-- The chord progression will be displayed here -->
    </div>

    <script>
        function getChordProgression() {
            const genre = document.getElementById('genre').value;
            // Make an API call to ChatGPT with the selected genre
            // Display the result in the 'result' div
        }
    </script>
</body>
</html>
```

This is a basic structure. You'll need to implement the getChordProgression function to make the API call to ChatGPT and handle the response. If you're unfamiliar with making API calls in JavaScript, I can guide you through that as well. Would you like assistance with that?