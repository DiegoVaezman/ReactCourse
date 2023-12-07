import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Puebas en 05-funciones", () => {
    test("getUser debe retornar un objeto", () => {
        const testUser = {
            uid: "ABC123",
            username: "El_Papi1502",
        };
        const user = getUser();

        //tostrictequal o toequal es para coparar objectos porq si no con tobe no pasa porque son de memoria/referencia distintos
        expect(testUser).toStrictEqual(user);
        expect(testUser).toEqual(user);
    });

    test("getUsuarioActivo debe retornar un objeto on uid ABC567 y nombre Nombre", () => {
        const nombre = "Diego";
        const testUsuarioActivo = { uid: "ABC567", username: nombre };
        const usuarioActivo = getUsuarioActivo(nombre);

        expect(usuarioActivo).toEqual(testUsuarioActivo);
    });
});
