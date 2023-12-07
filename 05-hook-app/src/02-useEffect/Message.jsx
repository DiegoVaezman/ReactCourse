import { useEffect, useState } from 'react';

export const Message = () => {
    //en versiones anteriores a react 17 da error cuando se intenta cambiar el estado de un componente qe no está montado. en este caso al ejecutarse la funcion de on mousemoves en el listener
    //ya que el listener se queda activo si no lo desactivamos en el return e intenta cambiar el estado del componente pero este no esta montado. En la version 18 este error no es critico pero
    //se debe evitar.

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const onMouseMoves = ({ x, y }) => {
            setCoords({ x, y });
        };
        window.addEventListener('mousemove', onMouseMoves);

        return () => {
            window.removeEventListener('mousemove', onMouseMoves);
        };
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    );
};
