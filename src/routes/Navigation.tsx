import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

import routes from './routes';

import logo from '../logo.svg';

const Navigation = () => {
    return (
        <Suspense fallback={ <span> Cargando... </span> }>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo"></img>

                        <ul>
                            {
                                routes.map( ( { to, name } ) => (
                                    <li key={ to }>
                                        <NavLink
                                            to={ to }
                                            className={ ( { isActive } ) => isActive ? 'nav-active' : '' }
                                        >
                                            { name }
                                        </NavLink>
                                    </li>
                                ) )
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map( ( { to, path, Component } ) => (
                                <Route
                                    key={ to }
                                    path={ path }
                                    element={ <Component /> }
                                />
                            ) )
                        }

                        <Route path="/*" element={ <Navigate to={ routes[ 0 ].to } replace /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};

export default Navigation;