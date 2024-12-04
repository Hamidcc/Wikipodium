// /netlify/functions/list-files.js
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  const dirPath = path.join(__dirname, '../../wiki'); // Path to your HTML files folder
  const files = fs.readdirSync(dirPath); // List files in the folder
  
  const htmlFiles = files.filter(file => file.endsWith('.html')).map(file => file);
  
  return {
    statusCode: 200,
    body: JSON.stringify(htmlFiles)
  };
};
