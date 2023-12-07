import { CounterApp } from "../src/CounterApp";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Pruebas en <CounterApp />", () => {
    const initialValue = 10;
    test("should hacer match con el snapshot", () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test("should mostrar el valor inicial de 100", () => {
        render(<CounterApp value={100} />);
        expect(screen.getByTestId("test-count").innerHTML).toContain("100");
        // expect(screen.getByText(100)).toBeTruthy();
    });

    test("should incrementar con el boton +1", () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText("+1"));
        expect(screen.getByText("11")).toBeTruthy();
    });

    test("should decrecer con el boton -1", () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText("-1"));
        expect(screen.getByText("9")).toBeTruthy();
    });

    test("should funcionar el boton reset", () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText("+1"));
        fireEvent.click(screen.getByText("+1"));
        fireEvent.click(screen.getByText("+1"));
        fireEvent.click(screen.getByText("-1"));
        fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
        expect(screen.getByTestId("test-count").innerHTML).toContain(
            `${initialValue}`
        );
    });
});
