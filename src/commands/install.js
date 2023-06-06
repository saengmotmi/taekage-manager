import path from "path";
import downloadPackage from "../utils/downloadPackage.js";
import extractTarball from "../utils/extractTarball.js";

async function installPackage(packageName) {
  const packageInfo = await downloadPackage(packageName);
  const tarballUrl =
    packageInfo.versions[packageInfo["dist-tags"].latest].dist.tarball;
  const outputPath = path.join("node_modules", packageName);

  await extractTarball(tarballUrl, outputPath);

  return packageInfo;
}

export default installPackage;
