import { ProductCardHOC, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[ 0 ];

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCardHOC
                key={ product.id }
                className="bg-dark text-white"
                product={ product }
                initialValues={ {
                    count: 4,
                    maxCount: 10
                } }
            >
                {
                    ( {
                        reset,
                        count,
                        increaseBy,
                        isMaxCountReached
                    } ) => (
                        <>
                            <ProductImage className="custom-image" style={ { boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' } } />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />

                            <button onClick={ reset }> Reset </button>
                            <button onClick={ () => increaseBy( -2 ) }> -2 </button>
                            {
                                ( !isMaxCountReached ) && <button onClick={ () => increaseBy( 2 ) }> +2 </button>
                            }
                            <span> { count } </span>
                        </>
                    )
                }
            </ProductCardHOC>
        </div>
    );
};

export default ShoppingPage;