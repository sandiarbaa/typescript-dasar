describe("Function", () => {
  it("should support in typescript", () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }
    expect(sayHello("Sandi")).toBe("Hello Sandi");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Sandi");
  });

  it("should support default value", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Sandi")).toBe("Hello Sandi");
  });

  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;

      for (const value of values) {
        total += value;
      }

      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", () => {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      }
      return `Hello ${firstName}`;
      // if (lastName) {
      //   console.info(`Hello ${firstName} ${lastName}`);
      // }
      // console.info(`Hello ${firstName}`);
    }
    // console.info(sayHello("Sandi"));
    // console.info(sayHello("Sandi", "Arba"));

    expect(sayHello("Sandi")).toBe("Hello Sandi");
    expect(sayHello("Sandi", "Arba")).toBe("Hello Sandi Arba");
  });

  it("should support function overloading", () => {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    expect(callMe(100)).toBe(1000);
    expect(callMe("Sandi")).toBe("SANDI");
  });
});
