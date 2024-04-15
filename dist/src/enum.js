// secara default enum di ts akan dikonversi menjadi tipe data number
// dan terkadang kita ingin mengubah dari number menjadi string, dan itu bisa dilakukan ketika membuat enumnya
// kita juga bisa tetap gunakan number
export var CustomerType;
(function (CustomerType) {
    CustomerType["PLATINUM"] = "PLATINUM";
    CustomerType["REGULAR"] = "REGULAR";
    CustomerType["GOLD"] = "GOLD";
})(CustomerType || (CustomerType = {}));
