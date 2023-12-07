//describe es simplemente una descripción. Usualmente no acostumbra a usar mas de un describe con pruebas dentro por archivo de pruebas.
describe("Pruebas en <DemoComponent />", () => {
    test("Esta prueba no debe fallar", () => {
        //1. Inicialización
        const msg = "Hola mundo";

        //2. Estímulo
        const msg2 = msg.trim();

        //3. Observar el comportamiento... esperado
        expect(msg).toBe(msg2);
    });
});
