describe("Union Type", function () {
  // jika kita membuat variabel atau parameter atau yg lainnya, menggunakan type data union ini
  // maka kita bisa memberi beberapa type data, jadi nanti value dari variabelnya sudah ditentukan
  // sesuai dengan type data tersebut
  it("should support in typescript", function () {
    let sample: number | string | boolean = "Sandi";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  // tapi hati hati jika ingin menggunakan method terhadap variabel yg bertype data union
  // karena value nya bisa berubah type datanya
  // jadi jika menggunakan method string untuk mengecek number karena sudah berubah type datanya
  // maka tidak bisa
  // jadi bisa menggunakan typeof misalnya
  it("should support typeof operator", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Sandi")).toBe("SANDI");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
