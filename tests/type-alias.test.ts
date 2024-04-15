import { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
  it("should support in typescript", function () {
    const category: Category = {
      id: 1,
      name: "Kemeja",
    };

    const product: Product = {
      id: "1",
      name: "Flanel",
      price: 150000,
      category: category,
    };

    // jadi si atribut category di dalam product seperti memakai atau di isi dengan object category yg kita buat
    // dan alias nya seperti blueprint yg harus di ikuti kalau mau di pakai

    // dan tidak boleh sembarangan menambah atau mengedit object atau variabel yg dibuat berdasarkan alias yg kita buat
    // product.description = "Test";

    console.info(category);
    console.info(product);
  });
});
