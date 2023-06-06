import fetch from "node-fetch";
import tar from "tar";
import fs from "fs";
import path from "path";

async function installPackage(packageName) {
  const response = await fetch(`https://registry.npmjs.org/${packageName}`);
  const data = await response.json();

  const tarballUrl = data.versions[data["dist-tags"].latest].dist.tarball;

  const responseTarball = await fetch(tarballUrl);
  if (!responseTarball.ok) {
    throw new Error(`Failed to fetch tarball for package: ${packageName}`);
  }

  // Ensure node_modules/test-package directory exists
  const packageDir = path.join("node_modules", packageName);
  if (!fs.existsSync(packageDir)) {
    fs.mkdirSync(packageDir, { recursive: true });
  }

  // Extract package to node_modules/test-package
  await new Promise((resolve, reject) => {
    const extract = tar.x({
      C: packageDir,
      strip: 1, // Strip package top-level directory
      onfinish: resolve,
      onerror: reject,
    });

    responseTarball.body.pipe(extract);
  });
}

export default installPackage;
