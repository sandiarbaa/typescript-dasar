"use strict";
describe("Object", () => {
    it("should support in typescript", () => {
        // jadi ini membuat object secara langsung di ts tanpa menggunakan type alias dulu, jika objectnya hanya sederhana
        // kalau objectnya kompleks, misal properti nya lebih dari 10 atau 20, lebih baik gunakan type alias
        const person = {
            id: "1",
            name: "Sandi",
        };
        // optional properties, jadi cukup tambahkan ? di atribut atau propertiesnya
        console.info(person);
        person.id = "2";
        person.name = "Arba";
        // kalau mencoba menambahkan atribut lain dari luar, maka akan error
        // karena tidak terdeklarasi di object aliasnya
        // person.description = "Test"
        console.info(person);
    });
});
