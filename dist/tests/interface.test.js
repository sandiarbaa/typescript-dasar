// interface jg keknya hampir sama sih kaya alias, sama-sama kaya blueprint gitu
// tapi interface ini akan hilang kalau di compile ke js
// karena interface hanya ada dan ditangani di typescript
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
    it("should support extends interface", () => {
        const employee = {
            id: "1",
            name: "Sandi",
            division: "IT",
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Arba",
            division: "IT",
            numberOfEmployees: 10,
        };
        console.info(manager);
    });
    it("should support function in interface", () => {
        const person = {
            name: "Sandi",
            sayHello: function (name) {
                return `Hallo ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("Arba"));
    });
    it("should support intersection types", () => {
        const domain = {
            id: 1,
            name: "Sandi",
        };
        console.info(domain);
    });
});
export {};
