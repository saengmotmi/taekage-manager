const searchPackages = require("./searchPackages.js");

test("should return packages related to the search term", async () => {
  const packages = await searchPackages("express");

  // 검색 결과에 express 패키지가 포함되어 있는지 확인합니다.
  const expressPackage = packages.find((pkg) => pkg.name === "express");
  expect(expressPackage).toBeTruthy();
});
