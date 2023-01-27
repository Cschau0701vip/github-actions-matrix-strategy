import { getInput } from "@actions/core";
import { promises as fs } from 'fs';
import { get } from "axios";

const category = getInput('category') || 'inspire';
const file_path = getInput('readme_path') || 'output.md';

(async () => {
  try {
    // Fetch the quote from API
    const { data } = await get(
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