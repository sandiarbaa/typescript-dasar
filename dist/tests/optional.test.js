"use strict";
describe("Optional Parameter", () => {
    it("should support null and undefined", () => {
        function sayHello(name) {
            // kalau di typescript null itu termasuk ke dalam tipedata tersendiri, jadi ya harus di declare dulu kalau mau di pakai
            // jadi null dan undefined itu berbeda
            // dan kalau menggunakan optional parameter/variabel/properties itu kan dia boleh kosong(falsy) atau disebut juga itu undefined
            // jadi kalau undefined itu bukan tipe data tapi sebuah kondisi bisa dibilang kondisi ketika false, jadi tidak perlu di declare
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello");
            }
        }
        sayHello("Sandi");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
