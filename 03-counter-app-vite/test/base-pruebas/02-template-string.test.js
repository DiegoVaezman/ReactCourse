import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Puebas en 02-template-string", () => {
    test('getsaludo debe retornar "Hola fernando"', () => {
        const name = "Fernando";
        const msg = getSaludo(name);

        expect(msg).toBe(`Hola ${name}`);
    });
});
