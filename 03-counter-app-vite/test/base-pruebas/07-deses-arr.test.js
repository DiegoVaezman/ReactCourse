import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Puebas en 07-deses-arr", () => {
    test("debe retornan un string y un numero", () => {
        const [letters, numbers] = retornaArreglo();

        expect(typeof letters).toBe("string");
        expect(letters).toEqual(expect.any(String));

        expect(typeof numbers).toBe("number");

        // const arr = ["a", "b", "c", "d"];
        // const [, , third] = arr;
        // console.log(third);
    });
});
