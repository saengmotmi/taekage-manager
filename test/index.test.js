// const { jest } = await import("@jest/globals");
// const searchPackages = await import("../src/searchPackages.js");

// TODO: index.js가 외부로 Promise의 완료를 알리지 않아서 테스트 불가
// 사실 원래 cli의 동작을 테스트 하고 싶었던 거지 searchPackages를 테스트 하고 싶었던 건 아니었음
// test("should call searchPackages with CLI argument", async () => {
// searchPackages 함수가 테스트용 데이터를 반환하도록 설정합니다.
// searchPackages.mockResolvedValue([
//   { name: "test-package", version: "1.0.0", description: "Test package" },
// ]);
// const searchPackages = jest
//   .fn()
//   .mockResolvedValue([
//     { name: "test-package", version: "1.0.0", description: "Test package" },
//   ]);
// // process.argv 값을 임시로 변경합니다.
// const originalProcessArgv = process.argv;
// process.argv = ["node", "index.js", "test-package"];
// // 메인 스크립트를 실행합니다.
// await import("../index.js");
// // searchPackages 함수가 CLI 인자를 사용하여 호출되었는지 확인합니다.
// await expect(searchPackages).toHaveBeenCalledWith("test-package");
// // process.argv 값을 원래대로 복구합니다.
// process.argv = originalProcessArgv;
// });
