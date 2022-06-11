import { CSSProperties, useContext } from 'react';

import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

import noImage from '../assets/no-image.jpg';

export interface IProductImage {
    img?: string,
    className?: string;
    style?: CSSProperties;
}

const ProductImage = ( { img, className, style }: IProductImage ) => {
    const { product } = useContext( ProductContext );
    let imgToShow: string;

    if ( img ) imgToShow = img;
    else if ( product.img ) imgToShow = product.img;
    else imgToShow = noImage;

    return (
        <img
            alt="Product"
            className={ `${ styles.productImg } ${ className }` }
            src={ imgToShow }
            style={ style }
        />
    );
};

export default ProductImage;