import fs from "fs";
import path from "path";

function uninstallPackage(packageName) {
  const packageDir = path.join("node_modules", packageName);

  if (!fs.existsSync(packageDir)) {
    throw new Error(
      `Cannot uninstall ${packageName}, package is not installed`
    );
  }

  fs.rmSync(packageDir, { recursive: true, force: true });

  console.log(`Successfully uninstalled ${packageName}`);
}

export default uninstallPackage;
