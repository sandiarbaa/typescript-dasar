describe("Interface", () => {
    it("should support in typescript", () => {
        const seller = {
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
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(1, 2)).toBe(3);
    });
    it("should support indexable interface", () => {
        const names = ["Sandi", "Arba", "Putra"];
        console.info(names);
    });
    it("should support indexable interface for non number index", () => {
        const dictionary = {
            name: "Sandi",
            address: "Banten",
        };
        expect(dictionary["name"]).toBe("Sandi");
        expect(dictionary["address"]).toBe("Banten");
    });
});
export {};
