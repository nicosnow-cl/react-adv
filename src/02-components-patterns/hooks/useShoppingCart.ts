import { useState } from 'react';

import { IProductInCart, IProduct } from '../interfaces/product.interface';

import { products } from '../data/products';

const useShoppingCart = () => {
    const [ shoppingCart, setShoppingCart ] = useState<{ [ key: string ]: IProductInCart; }>( {} );

    const onProductCountChange = ( { count, product }: { count: number, product: IProduct; } ) => {
        setShoppingCart( ( oldShoppingCart ) => {
            const productInCart: IProductInCart = oldShoppingCart[ product.id ] || { ...product, count: 0 };

            if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [ product.id ]: productInCart
                };
            }

            const { [ product.id ]: toDelete, ...rest } = oldShoppingCart;
            return rest;

            // if ( count !== 0 ) {
            //     return {
            //         ...oldShoppingCart,
            //         [ product.id ]: { ...product, count }
            //     };
            // }

            // delete oldShoppingCart[ product.id ];
            // return {
            //     ...oldShoppingCart
            // };
        } );
    };


    return {
        products,
        shoppingCart,
        onProductCountChange
    };
};

export default useShoppingCart;