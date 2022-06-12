import { ProductCardHOC, ProductImage, ProductTitle, ProductButtons } from '../components';

import useShoppingCart from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';

const ShoppingPage = () => {
    const { products, shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={ { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } }>
                {
                    products.map( ( product ) => (
                        <ProductCardHOC
                            key={ product.id }
                            className="bg-dark text-white"
                            product={ product }
                            onChange={ onProductCountChange }
                            value={ shoppingCart[ product.id ]?.count ?? 0 }
                        >
                            <ProductImage className="custom-image" style={ { boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' } } />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCardHOC>
                    ) )
                }
            </div>

            <div className="shopping-cart">
                {
                    Object.entries( shoppingCart ).map( ( [ key, product ] ) => (
                        <ProductCardHOC
                            key={ key }
                            className="bg-dark text-white"
                            product={ product }
                            style={ { width: '100px' } }
                            value={ product.count }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image" style={ { boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' } } />
                            <ProductButtons
                                className="custom-buttons"
                                style={ { display: 'flex', justifyContent: 'center' } }
                            />
                        </ProductCardHOC>
                    ) )
                }
            </div>
        </div>
    );
};

export default ShoppingPage;