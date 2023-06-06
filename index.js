import searchPackages from "./src/searchPackages.js";
import installPackage from "./src/commands/install.js";
import uninstallPackage from "./src/uninstallPackage.js";

const [command, packageName] = process.argv.slice(2);

if (command === "search") {
  search(packageName).catch((error) => {
    console.error(`Error while searching for package: ${error.message}`);
  });
} else if (command === "install") {
  install(packageName).catch((error) => {
    console.error(`Error while installing package: ${error.message}`);
  });
} else if (command === "uninstall") {
  uninstall(packageName).catch((error) => {
    console.error(`Error while uninstalling package: ${error.message}`);
  });
} else {
  console.log(
    'Invalid command. Please use "search", "install", or "uninstall".'
  );
}
