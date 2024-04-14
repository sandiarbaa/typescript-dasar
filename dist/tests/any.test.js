"use strict";
describe("Any", function () {
    it("should support in typescript", function () {
        const person = {
            id: 1,
            name: "Sandi Arba Putra",
            age: 19,
        };
        person.age = 20;
        person.address = "Indonesia";
        console.info(person);
    });
});
