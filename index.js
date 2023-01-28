//const core = require("@actions/core");
const { argv } = require('node:process');
const fs = require('fs').promises;
const axios = require("axios");

console.log(argv);

const category = argv[2] || 'inspire'; //core.getInput('category') || 'inspire';
const file_path = argv[3] || 'output.md'; //core.getInput('file_path') || 'output.md';
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
    quote = quote.concat(`💬 Quote of the Day: "${qotd}"\n`);
    console.log(quote);
    // Write file with new quote
    await fs.writeFile(file_path, quote, { signal });
    console.log('done');
  } catch (error) {
    console.log(error.message);
  }
})();
