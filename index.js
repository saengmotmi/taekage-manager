import searchPackages from "./src/searchPackages.js";

const args = process.argv.slice(2);
const searchQuery = args[0];

searchPackages(searchQuery)
  .then((packages) => {
    for (const pkg of packages) {
      console.log(pkg.name);
    }
  })
  .catch((error) => {
    console.error(`Error while searching for packages: ${error.message}`);
  });
