import fs from "fs";
import path from "path";

function uninstallPackage(packageName) {
  const packageDir = path.join("node_modules", packageName);

  if (!fs.existsSync(packageDir)) {
    throw new Error(
      `Cannot uninstall ${packageName}, package is not installed`
    );
  }

  return new Promise((resolve, reject) => {
    fs.rm(packageDir, { recursive: true, force: true }, (error) => {
      if (error) {
        reject(error);
      } else {
        console.log(`Successfully uninstalled ${packageName}`);
        resolve();
      }
    });
  });
}

export default uninstallPackage;
