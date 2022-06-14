import { useEffect, useRef, useState } from 'react';

import { IProduct, IOnChangeArgs, IInitialValues } from '../interfaces/product.interface';

interface IUseProductArgs {
    product: IProduct;
    onChange?: ( args: IOnChangeArgs ) => void;
    value?: number;
    initialValues?: IInitialValues;
}

const useProduct = ( { onChange, product, value = 0, initialValues }: IUseProductArgs ) => {
    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );

    const isMountedRef = useRef( false );

    const increaseBy = ( value: number ): void => {
        if ( !!initialValues?.maxCount && value > 0 && counter >= initialValues?.maxCount ) return;

        let newValue = Math.max( counter + value, 0 );
        if ( !!initialValues?.maxCount && newValue > initialValues?.maxCount ) newValue = initialValues?.maxCount;
        setCounter( newValue );

        onChange && onChange( { product, count: newValue } );
    };

    const reset = () => {
        setCounter( initialValues?.count || value );
    };

    useEffect( () => {
        if ( isMountedRef.current ) setCounter( value );
    }, [ value ] );

    useEffect( () => {
        isMountedRef.current = true;
    }, [] );

    return {
        counter,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues?.maxCount,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset,
    };
};

export default useProduct;