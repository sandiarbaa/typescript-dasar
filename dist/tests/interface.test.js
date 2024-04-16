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
});
export {};
