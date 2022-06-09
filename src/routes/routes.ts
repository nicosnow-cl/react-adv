import { lazy } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent,
    name: string,
    path: string,
    to: string;
}

const LazyLayout = lazy( () => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout' ) );

const routes: Route[] = [
    {
        Component: LazyLayout,
        name: 'Lazy - Dashboard',
        path: '/lazyload/*',
        to: '/lazyload/'
    },
    {
        Component: NoLazy,
        name: 'No Lazy',
        path: 'no-lazy',
        to: '/no-lazy'
    },
];

export default routes;