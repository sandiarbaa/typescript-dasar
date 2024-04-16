import { Seller } from "../src/seller";

describe("Interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko A",
      nib: "123123",
      npwp: "321321",
    };

    seller.name = "Toko B";
    // seller.nib = '321321'

    console.info(seller);
  });
});
