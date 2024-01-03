const express = require('express');
const fs = require('fs');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 5173;

app.get('/fetch-and-store', async (req, res) => {
  try {
    // Fetch data from an API (replace URL with your API endpoint)
    const response = await axios.get('https://api.example.com/data');

    // Assuming the API response is an array of objects
    const data = response.data;

    // Convert data to JSX format
    const jsxContent = generateJSX(data);

    // Store JSX content in a file
    const filePath = path.join(__dirname, 'output.jsx');
    fs.writeFileSync(filePath, jsxContent);

    res.status(200).send('Data fetched and stored successfully!');
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

function generateJSX(data) {
  // Customize this function based on the structure of your data
  // This is just a simple example
  const jsxArray = data.map(item => (
    `<div key="${item.id}">
       <h2>${item.title}</h2>
       <p>${item.description}</p>
     </div>`
  ));

  // Wrap JSX content with a React component
  const jsxContent = `
    import React from 'react';

    const MyComponent = () => (
      <div>
        ${jsxArray.join('\n')}
      </div>
    );

    export default MyComponent;
  `;

  return jsxContent;
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});