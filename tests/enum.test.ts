import { Customer, CustomerType } from "../src/enum";

describe("Enum", () => {
  it("should support in typescript", () => {
    const customer: Customer = {
      id: 1,
      name: "Sandi",
      type: CustomerType.GOLD,
      // type: "ASAL", // nah ini error dia ga akan bisa, karena itu adalah tipe data yg belum ditentukan, jadi ASAL itu bukan tipe data si enum
    };
    // jadi enum ini lebih aman kalau misal ada data entah itu number atau string, tapi dia sudah ditentukan nilainya apa saja
    // jadi kaya tipe data tertentu atau khusus yg kita buat, agar tidak asal mengisi sebuah properti atau variabel ataua data nanti
    // jadi kalau misal ada sebuah data entah itu number/string, tetapi dia nilainya sudah ditentukan bolehnya apa saja, nah itu bisa pakai enum
    // kaya CustomerType itu tuh, kan kita sudah tentukan nilainya bolehnya hanya REGULAR, GOLD, dan PLATINUM,
    // nah tapi tipe datanya itu bisa juga kita jadi number/string, sesuai kebutuhan kita

    console.info(customer);
  });
});
