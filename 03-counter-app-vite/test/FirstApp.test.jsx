import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
    // test("should hacer match con el snapshot", () => {
    //     const title = "Hola soy Goku";
    //     const { container } = render(<FirstApp title={title} />);

    //     expect(container).toMatchSnapshot();
    // });

    test("should mostrar el titulo en h1", () => {
        const title = "Hola, soy Goku";
        const { container, getByText, getByTestId } = render(
            <FirstApp title={title} />
        );

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector("h1");
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId("test-title").innerHTML).toContain(title);
    });

    test("should mostrar el subtitulo enviado por props", () => {
        const title = "Hola, soy Goku";
        const subtitle = "Soy un subtitutlo";
        const { getAllByText } = render(
            <FirstApp title={title} subTitle={subtitle} />
        );
        expect(getAllByText(subtitle).length).toBe(3);
    });
});
