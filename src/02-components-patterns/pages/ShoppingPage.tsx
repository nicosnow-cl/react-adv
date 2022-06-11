import { ProductCardHOC, ProductImage, ProductTitle, ProductButtons } from '../components';

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
                <ProductCardHOC product={ product }>
                    <ProductCardHOC.Image />
                    <ProductCardHOC.Title title={ 'Hola mundo' } />
                    <ProductCardHOC.Buttons />
                </ProductCardHOC>

                <ProductCardHOC product={ product }>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCardHOC>
            </div>
        </div>
    );
};

export default ShoppingPage;