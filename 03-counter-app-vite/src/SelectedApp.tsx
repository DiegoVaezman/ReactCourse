import React, { useState } from "react";
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
import { HelloWorldApp } from "./HelloWorldApp";
import RelojApp from "./RelojApp";

export const SelectedApp = () => {
    const [selectedApp, setSelectedApp] = useState(0);
    const handleSelectedApp = (app) => {
        setSelectedApp(() => app);
    };
    return (
        <div>
            <button onClick={() => handleSelectedApp(0)}>
                Hello World App
            </button>
            <button onClick={() => handleSelectedApp(1)}>First App</button>
            <button onClick={() => handleSelectedApp(2)}>Counter App</button>
            <button onClick={() => handleSelectedApp(3)}>Reloj App</button>
            {selectedApp === 0 ? (
                <HelloWorldApp />
            ) : selectedApp === 1 ? (
                <FirstApp
                    title="Hola soy vegeta"
                    subTitle="Que tal"
                    name="Vegeta"
                />
            ) : selectedApp === 2 ? (
                <CounterApp value={0} />
            ) : (
                selectedApp === 3 && <RelojApp />
            )}
        </div>
    );
};
