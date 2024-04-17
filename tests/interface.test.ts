import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";

// interface jg keknya hampir sama sih kaya alias, sama-sama kaya blueprint gitu
// tapi interface ini akan hilang kalau di compile ke js
// karena interface hanya ada dan ditangani di typescript

describe("Interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
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
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(1, 2)).toBe(3);
  });

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Sandi", "Arba", "Putra"];
    console.info(names);
  });

  it("should support indexable interface for non number index", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Sandi",
      address: "Banten",
    };

    expect(dictionary["name"]).toBe("Sandi");
    expect(dictionary["address"]).toBe("Banten");
  });

  it("should support extends interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Sandi",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Arba",
      division: "IT",
      numberOfEmployees: 10,
    };

    console.info(manager);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "Sandi",
      sayHello: function (name: string): string {
        return `Hallo ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Arba"));
  });

  it("should support intersection types", () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: number;
    }

    // interface Person extends HasName, HasId {

    // }
    // daripada kaya gitu mending di bikin intersection aja
    // jadi intersection itu seperti membuat sendiri tipe data baru dari gabungan 2 tipe data yg berbeda

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: 1,
      name: "Sandi",
    };

    console.info(domain);
  });

  it("should support type assertions", () => {
    const person: any = {
      name: "Sandi",
      age: 19,
    };

    const person2: Person = person as Person;
    // person2.age // ini error kalo gini
    // person2.sayHello("arba"); // ini juga
    // jadi hati2 kalau melakukan konversi, kalau salah begitu, bisa error, dan erronya baru ketauan ketika aplikasinya dijalankan

    console.info(person2);
  });
});
