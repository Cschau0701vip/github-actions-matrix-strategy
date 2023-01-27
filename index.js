const core = require("@actions/core");
const fs = require('fs').promises;
const axios = require("axios");

const category = core.getInput('category') || 'inspire';
const file_path = core.getInput('readme_path') || 'output.md';

(async () => {
  try {
    // Fetch the quote from API
    const { data } = await axios.get(
      `https://quotes.rest/qod?category=${category}`
    );

    let qotd = data.contents.quotes[0].quote;
    quote = quote.concat(`💬 Quote of the Day: "${qotd}"\n`);

    // Write file with new quote
    await fs.writeFile(file_path, quote, { signal });

  } catch (error) {
    console.log(error.message);
  }
})();
