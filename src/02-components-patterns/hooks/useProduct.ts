import { useEffect, useRef, useState } from 'react';

import { IProduct, IOnChangeArgs } from '../interfaces/product.interface';

interface IUseProductArgs {
    product: IProduct;
    onChange?: ( args: IOnChangeArgs ) => void;
    value?: number;
}

const useProduct = ( { onChange, product, value = 0 }: IUseProductArgs ) => {
    const [ counter, setCounter ] = useState<number>( value );
    const isControlledRef = useRef<boolean>( onChange ? true : false );

    const increaseBy = ( value: number ): void => {
        if ( isControlledRef.current ) {
            return onChange!( { product, count: value } );
        }

        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue );

        onChange && onChange( { product, count: newValue } );
    };

    useEffect( () => {
        setCounter( value );
    }, [ value ] );

    return { counter, increaseBy };
};

export default useProduct;