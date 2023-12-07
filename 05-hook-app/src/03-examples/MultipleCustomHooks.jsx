import React from 'react';
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );

    // !!value doble negación: transforma a booleano el valor, lo hace pasando al booleano contrario y luego al contrario booleano de este.
    //así un valor null o undefined pasa a false y si hay algo pasa a true

    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {isLoading ? (
                <LoadingQuote />
            ) : (
                <Quote quote={quote} author={author} />
            )}

            <button
                className='btn btn-primary'
                onClick={() => increment()}
                disabled={isLoading}
            >
                Next quote
            </button>
        </>
    );
};
