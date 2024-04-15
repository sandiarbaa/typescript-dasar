// secara default enum di ts akan dikonversi menjadi tipe data number
// dan terkadang kita ingin mengubah dari number menjadi string, dan itu bisa dilakukan ketika membuat enumnya
// kita juga bisa tetap gunakan number
export enum CustomerType {
  PLATINUM = "PLATINUM",
  REGULAR = "REGULAR",
  GOLD = "GOLD",
}

// export enum CustomerType {
//   PLATINUM = 2,
//   REGULAR = 0,
//   GOLD = 1,
// }

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
