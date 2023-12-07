import React, { useState } from "react";

const RelojApp = () => {
    const [hora, setHora] = useState(reloj);
    setTimeout(() => {
        setHora(reloj);
    }, 1000);
    return (
        <>
            <span>{hora}</span>
        </>
    );
};
const reloj = () => {
    let date = new Date();
    let horaActual = {
        hora: date.getHours(),
        minuto: date.getMinutes(),
        segundo: date.getSeconds(),
    };
    const { hora, minuto, segundo } = horaActual;
    const now = `${hora}:${minuto < 10 ? "0" + minuto : minuto}:${
        segundo < 10 ? "0" + segundo : segundo
    }`;
    return now;
};

export default RelojApp;
