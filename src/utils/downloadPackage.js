import fetch from "node-fetch";

export default async function downloadPackage(packageName) {
  const response = await fetch(`https://registry.npmjs.org/${packageName}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch info for package: ${packageName}`);
  }

  const data = await response.json();

  return data;
}
