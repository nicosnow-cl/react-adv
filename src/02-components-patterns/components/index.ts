import ProductCard from './ProductCard';

import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductButtons from './ProductButtons';

import { IProductCardHOC } from '../interfaces/product.interface';

const ProductCardHOC: IProductCardHOC = Object.assign( ProductCard, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
} );

export {
    ProductCardHOC,
    ProductTitle,
    ProductImage,
    ProductButtons
};