//const core = require("@actions/core");
const { argv } = require('node:process');
const fs = require('fs');
const axios = require("axios");

console.log(argv);

const category = argv[2] || 'inspire'; //core.getInput('category') || 'inspire';
const file_path = argv[3] || 'output.md'; //core.getInput('file_path') || 'output.md';
const platform = argv[4];
const version = argv[5];
const sha= argv[6];

console.log(category);
console.log(file_path);

(async () => {
  try {
    // Fetch the quote from API
    console.log(`https://quotes.rest/qod?category=${category}`);
    const { data } = await axios.get(
      `https://quotes.rest/qod?category=${category}`
    );
    console.log(data);
    let qotd = data.contents.quotes[0].quote;
    console.log(qotd);
    let quote = `💬 Quote of the Day: "${qotd}"\n${sha}`;
    console.log(quote);
    // Write file with new quote
    fs.writeFile([file_path.slice(0, file_path.lastIndexOf('.')), platform+'-'+version, file_path.slice(file_path.lastIndexOf('.'))].join('')), quote, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
      }    
    });
    console.log('done');
  } catch (error) {
    console.log(error.message);
  }
})();
