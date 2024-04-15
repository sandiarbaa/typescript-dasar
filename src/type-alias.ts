// alias ini seperti semacam blueprint
// yg harus di ikuti aturannya, jika kita mau memakai nya
export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
  description?: string; // ini contoh optional properties
};
// jadi kita bisa buat properti dari object ini tidak wajib di isi

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  description?: string;
};
