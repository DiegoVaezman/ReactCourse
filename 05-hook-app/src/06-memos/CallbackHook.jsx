import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    //El componente ShowIncrement es un componente memorizado con memo() que solo debe pintarse una vez y no repintarse con el cambio de states.

    //Si al compnente memorizado ShowIncrment le pasamos una func normal, esta función cada vez que es renderizado  este componente CallbackHook es "una nueva función" que se le pasa al
    //componente ShowIncrement que debe ser memo() pero al tratarse de una nueva función no puede memorizarse y es un nuevo componente que se dibuja ejcutando todo su interior de nuevo.
    //Para memorizar las funciones para que sean las mismas al volver a renderizarse se utiliza useCallback y al pasarselo al componente memo() este puede ser memorizado y no se volverá a
    //renderizar con el cambio de los states.
    const incrementNormalFuncBad = (value) => {
        setCounter((prev) => prev + value);
    };

    //esta funcion con useCallback es una func memorizada que se le pasa al componente ShowIncrement que tmb es memorizado con memo(). Tomar el valor de counter de fuera de la funcion y lo
    //memoriza (10) y la siguiente vez que se ejecuta despues de sumar uno al counter se ejecuta con 10 otra vez porque es el valor memorizado, por lo que no se puede cambiar el estado correctamente.
    const incrementCallbackFuncBad = useCallback((value) => {
        setCounter(counter + value);
    }, []);

    //Para que cada vez que se ejecute la funcion memorizada pueda cambiar el counter state según el estado actual se debe tomar esta info desde dentro de la función con las propiedades del setState
    const incrementCallbackFunc = useCallback((value) => {
        setCounter((prev) => prev + value);
    }, []);

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementCallbackFunc} />
        </>
    );
};
