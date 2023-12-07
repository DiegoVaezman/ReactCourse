import React, { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter((c) => c + 1);
    const handleSubstract = () => setCounter((c) => c - 1);
    const handleReset = () => setCounter((c) => value);
    return (
        <>
            <h1>CounterApp</h1>
            <h2 data-testid="test-count"> {counter} </h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button aria-label="btn-reset" onClick={handleReset}>
                Reset
            </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
