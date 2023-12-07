import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";
import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Puebas en 06-deses-obj", () => {
    test("usContext debe retornar un objeto", () => {
        const clave = "DC";
        const edad = 20;
        const testUsContext = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232,
            },
        };
        const usContextObj = usContext({
            clave,
            nombre: "xxx",
            edad,
            rango: "xxx",
        });

        expect(usContextObj).toEqual(testUsContext);
    });
});
