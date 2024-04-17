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
});
