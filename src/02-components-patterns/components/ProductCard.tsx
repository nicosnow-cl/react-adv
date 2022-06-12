import { createContext } from 'react';

import useProduct from '../hooks/useProduct';

import { IProductContextProperties, IProductCardProperties } from '../interfaces/product.interface';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext( {} as IProductContextProperties );
const { Provider } = ProductContext;

const ProductCard = ( { children, product, className, style, onChange, value }: IProductCardProperties ) => {

    const { counter, increaseBy } = useProduct( { product, onChange, value } );

    return (
        <Provider value={ {
            counter,
            increaseBy,
            product
        } }>
            <div
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { children }
            </div>
        </Provider>
    );
};

export default ProductCard;