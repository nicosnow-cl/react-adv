import { ReactElement } from 'react';

export interface IProductCardProperties {
    children?: ReactElement | ReactElement[];
    product: IProduct;
}

export interface IProduct {
    id: string;
    title: string;
    img?: string;
}

export interface IProductContextProperties {
    counter: number;
    increaseBy: ( value: number ) => void,
    product: IProduct;
}

export interface IProductCardHOC {
    ( { children, product }: IProductCardProperties ): JSX.Element;
    Title: ( { title }: { title?: string | undefined; } ) => JSX.Element;
    Image: ( { img }: { img?: string | undefined; } ) => JSX.Element;
    Buttons: () => JSX.Element;
}