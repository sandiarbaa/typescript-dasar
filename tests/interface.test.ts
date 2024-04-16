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

  it("should support function interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(1, 2)).toBe(3);
  });

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Sandi", "Arba", "Putra"];
    console.info(names);
  });

  it("should support indexable interface for non number index", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Sandi",
      address: "Banten",
    };

    expect(dictionary["name"]).toBe("Sandi");
    expect(dictionary["address"]).toBe("Banten");
  });
});
