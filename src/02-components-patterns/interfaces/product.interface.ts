import { CSSProperties, ReactElement } from 'react';

import { IProductButtons } from '../components/ProductButtons';
import { IProductImage } from '../components/ProductImage';
import { IProductTitle } from '../components/ProductTitle';

export interface IProductCardProperties {
    children?: ReactElement | ReactElement[];
    className?: string;
    product: IProduct;
    style?: CSSProperties;
}

export interface IProduct {
    id: string;
    img?: string;
    title: string;
}

export interface IProductContextProperties {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: IProduct;
}

export interface IProductCardHOC {
    ( { children, product }: IProductCardProperties ): JSX.Element;
    Buttons: ( Props: IProductButtons ) => JSX.Element;
    Image: ( Props: IProductImage ) => JSX.Element;
    Title: ( Props: IProductTitle ) => JSX.Element;
}