import {
    getHeroeById,
    getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Puebas en 08-imp-exp", () => {
    test("getHeroesById debe retornar un heroe por ID", () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
    });

    test("getHeroesById debe retornar undefine si no existe", () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test("debe retornar un arreglo de heroes de dc y deben ser 3", () => {
        const owner = "DC";
        const expectedHeroes = [
            { id: 1, name: "Batman", owner: "DC" },
            { id: 3, name: "Superman", owner: "DC" },
            { id: 4, name: "Flash", owner: "DC" },
        ];
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(expectedHeroes);
    });

    test("debe retornar un arreglo de heroes de marvel y deben ser 2", () => {
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
    });
});
