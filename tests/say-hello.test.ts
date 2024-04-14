import { sayHello } from "../src/say-hello"; // untuk import di ts tidak perlu extension ts nya, karena kode ts ini akan di compile ke js, jadi extension itu optional saja, karena kalau ditulis hard-code extensionnya ts nya di sini nanti otomatis dia tidak akan jalan

describe("sayHello", function () {
  it("should return hello sandi", function () {
    expect(sayHello("sandi")).toBe("Hello sandi");
  });
});

// lalu bisa jalankan lagi dengan npx jest
// atau bisa npm test (ngikutin script di package.json)

// agar bisa menjalankan semua perintah unit testnya

// bisa juga : npx jest tests/say-hello.test.ts
// menggunakan perintah jest untuk testing 1 file gitu
