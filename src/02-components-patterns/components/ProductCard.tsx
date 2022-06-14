import { createContext } from 'react';

import useProduct from '../hooks/useProduct';

import { IProductContextProperties, IProductCardProperties } from '../interfaces/product.interface';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext( {} as IProductContextProperties );
const { Provider } = ProductContext;

const ProductCard = ( { children, product, className, style, onChange, value, initialValues }: IProductCardProperties ) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct( { product, onChange, value, initialValues } );

    return (
        <Provider value={ {
            counter,
            increaseBy,
            product,
            maxCount
        } }>
            <div
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { children && children( {
                    count: counter,
                    isMaxCountReached: isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product: product,
                    increaseBy,
                    reset
                } ) }
            </div>
        </Provider>
    );
};

export default ProductCard;