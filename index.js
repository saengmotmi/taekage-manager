import searchPackages from "./src/searchPackages.js";
import installPackage from "./src/installPackage.js";
import uninstallPackage from "./src/uninstallPackage.js";

const [command, packageName] = process.argv.slice(2);

if (command === "search") {
  searchPackages(packageName)
    .then((packages) => {
      for (const pkg of packages) {
        console.log(pkg.name);
      }
    })
    .catch((error) => {
      console.error(`Error while searching for packages: ${error.message}`);
    });
} else if (command === "install") {
  installPackage(packageName)
    .then(() => {
      console.log(`Successfully installed ${packageName}`);
    })
    .catch((error) => {
      console.error(`Error while installing package: ${error.message}`);
    });
} else if (command === "uninstall") {
  try {
    uninstallPackage(packageName);
    console.log(`Successfully uninstalled ${packageName}`);
  } catch (error) {
    console.error(`Error while uninstalling package: ${error.message}`);
  }
} else {
  console.log(
    'Invalid command. Please use "search", "install", or "uninstall".'
  );
}
