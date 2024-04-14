"use strict";
describe("Array", () => {
    // pembuatan array biasa di ts
    it("should same with javascript", () => {
        const name = ["satu", "dua", "tiga"];
        const values = [1, 2, 3];
        console.info(name);
        console.info(values);
    });
    // pembuatan array readonly di ts
    // readonly artinya tidak bisa di ubah, hanya dibaca aja
    it("should support readonly array", () => {
        const hobbies = ["Membaca", "Olahraga"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] = "Main game";
    });
    // pembuatan array tuple
    // tuple adalah sebuah array yg sudah ditentukan panjangnya
    // tidak bisa bertambah atau berkurang
    // dan tidak bisa dirubah lagi juga isinya
    // dan tipe data tiap index nya apa sudah ditentukan
    it("should support taple", () => {
        const person = ["Sandi", "Arba", 19];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
        // person[0] = "putra";
        // console.info(person[0]);
    });
});
