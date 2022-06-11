import { ProductCardHOC, ProductImage, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
};

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={ { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } }>
                <ProductCardHOC
                    className="bg-dark text-white"
                    product={ product }
                >
                    <ProductCardHOC.Image className="custom-image" />
                    <ProductCardHOC.Title className="text-bold" />
                    <ProductCardHOC.Buttons className="custom-buttons" />
                </ProductCardHOC>

                <ProductCardHOC
                    className="bg-dark text-white"
                    product={ product }
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCardHOC>

                <ProductCardHOC
                    product={ product }
                    style={ { backgroundColor: '#70D1F8' } }
                >
                    <ProductImage style={ { boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' } } />
                    <ProductTitle style={ { fontWeight: 'bold' } } />
                    <ProductButtons style={ { display: 'flex', justifyContent: 'end' } } />
                </ProductCardHOC>
            </div>
        </div>
    );
};

export default ShoppingPage;