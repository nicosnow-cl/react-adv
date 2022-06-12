import { useEffect, useState } from 'react';

import { IProduct, IOnChangeArgs } from '../interfaces/product.interface';

interface IUseProductArgs {
    product: IProduct;
    onChange?: ( args: IOnChangeArgs ) => void;
    value?: number;
}

const useProduct = ( { onChange, product, value = 0 }: IUseProductArgs ) => {
    const [ counter, setCounter ] = useState<number>( value );

    const increaseBy = ( value: number ): void => {
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