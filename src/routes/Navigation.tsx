import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

import logo from '../logo.svg';
import ShoppingPage from '../02-components-patterns/pages/ShoppingPage';

const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo"></img>

                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={ ( { isActive } ) => isActive ? 'nav-active' : '' }
                                >
                                    Shopping
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    className={ ( { isActive } ) => isActive ? 'nav-active' : '' }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/users"
                                    className={ ( { isActive } ) => isActive ? 'nav-active' : '' }
                                >
                                    Users
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="" element={ <ShoppingPage /> }></Route>
                        <Route path="about" element={ <h1> AboutPage </h1> }></Route>
                        <Route path="users" element={ <h1> UsersPage </h1> }></Route>

                        <Route path="/*" element={ <Navigate to="" replace /> }></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};

export default Navigation;