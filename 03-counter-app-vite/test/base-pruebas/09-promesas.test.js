import {
    getHeroeById,
    getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Puebas en 09-promesas", () => {
    test("getHeoresbyisasync debe retornar un heroe", (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then((hero) => {
            expect(hero).toEqual({
                id: 1,
                name: "Batman",
                owner: "DC",
            });
            done();
        });
    });

    test("getHeoresbyisasync debe retornar un error si heroe no existe", (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then((heroe) => {
                expect(heroe).toBeFalsy();
                done();
            })
            .catch((err) => {
                expect(err).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            });
    });
});
