import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Puebas en 11-async-await", () => {
    test("get imagen debe retornar un url de la imagen", async () => {
        const url = await getImagen();
        expect(typeof url).toBe("string");
    });
});
