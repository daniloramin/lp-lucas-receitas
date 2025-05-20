import "./style.scss";
import { NavLink } from "react-router";

import home from "../../assets/images/icons/home.svg";
import homeActive from "../../assets/images/icons/home-active.svg";
import recetas from "../../assets/images/icons/recipes.svg";
import recetasActive from "../../assets/images/icons/recipes-active.svg";
import categorias from "../../assets/images/icons/categories.svg";
import categoriasActive from "../../assets/images/icons/categories-active.svg";
import clases from "../../assets/images/icons/videos.svg";
import clasesActive from "../../assets/images/icons/videos-active.svg";

export const NavBar = () => {
    return (
        <nav id="navbar">
            <ul>
                <li>
                    <NavLink to="" className={({ isActive }) => (isActive ? "active" : "")}>
                        {({ isActive }) => {
                            return isActive ? (
                                <>
                                    <img src={homeActive} alt="" />
                                    Inicio
                                </>
                            ) : (
                                <>
                                    <img src={home} alt="" />
                                    Inicio
                                </>
                            );
                        }}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/recetas">
                        {({ isActive }) => {
                            return isActive ? (
                                <>
                                    <img src={recetasActive} alt="" />
                                    Recetas
                                </>
                            ) : (
                                <>
                                    <img src={recetas} alt="" />
                                    Recetas
                                </>
                            );
                        }}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/categorias">
                        {({ isActive }) => {
                            return isActive ? (
                                <>
                                    <img src={categoriasActive} alt="" />
                                    Categorias
                                </>
                            ) : (
                                <>
                                    <img src={categorias} alt="" />
                                    Categorias
                                </>
                            );
                        }}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clases">
                        {({ isActive }) => {
                            return isActive ? (
                                <>
                                    <img src={clasesActive} alt="" />
                                    Clases
                                </>
                            ) : (
                                <>
                                    <img src={clases} alt="" />
                                    Clases
                                </>
                            );
                        }}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
