import fetch from "node-fetch";

async function searchPackages(packageName) {
  const response = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${packageName}`
  );
  const data = await response.json();

  return data.objects.map((obj) => obj.package);
}

export default searchPackages;
