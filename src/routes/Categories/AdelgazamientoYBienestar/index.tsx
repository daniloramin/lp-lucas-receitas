import "../categories.scss";
import { NavLink } from "react-router";

import adelgazamientoYBienestarBackground from "../../../assets/images/categories-background/adelgazamiento-y-bienestar.png";

import mounjaroNatural from "../../../assets/images/posts-background/mounjaro-natural-background.png";

export const AdelgazamientoYBienestarLink = () => {
    return (
        <NavLink to="/categorias/adelgazamiento-y-bienestar" className="category-box">
            <img src={adelgazamientoYBienestarBackground} alt="" />

            <h2>Adelgazamiento y Bienestar</h2>
        </NavLink>
    );
};

export const AdelgazamientoYBienestarPosts = () => {
    return (
        <div id="posts">
            <NavLink to="/posts/mounjaro-natural" className="post-box">
                <img src={mounjaroNatural} alt="" />

                <h2>MOUNJARO NATURAL: PREPARA EN CASA LA RECETA QUE SE HIZO VIRAL EN TIK TOK</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam mollitia
                    sequi?
                </p>
            </NavLink>
        </div>
    );
};
