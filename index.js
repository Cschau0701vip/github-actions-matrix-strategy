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
    echo `https://quotes.rest/qod?category=${category}`;
    const { data } = await axios.get(
      `https://quotes.rest/qod?category=${category}`
    );
    echo data;
    let qotd = data.contents.quotes[0].quote;
    quote = quote.concat(`💬 Quote of the Day: "${qotd}"\n`);

    // Write file with new quote
    await fs.writeFile(file_path, quote, { signal });

  } catch (error) {
    console.log(error.message);
  }
})();
