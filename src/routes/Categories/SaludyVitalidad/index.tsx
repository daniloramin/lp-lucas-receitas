import "../categories.scss";
import { NavLink } from "react-router";

import saludyVitalidad from "../../../assets/images/categories-background/salud-y-vitalidad-background.png";

import mounjaroNatural from "../../../assets/images/posts-background/mounjaro-natural-background.png";

export const SaludyVitalidadLink = () => {
    return (
        <NavLink to="/categorias/salud-y-vitalidad" className="category-box">
            <img src={saludyVitalidad} alt="" />

            <h2>Salud y Vitalidad</h2>
        </NavLink>
    );
};

export const SaludyVitalidadPosts = () => {
    return (
        <div id="category-posts">
            <NavLink to="/posts/mascarilla-facial-coreana" className="post-box">
                <img src={mounjaroNatural} alt="" />

                <h2>MASCARILLA FACIAL COREANA: LA RECETA DE LAS PIELES DE PORCELANA</h2>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem eos dolorem iusto!
                </p>
            </NavLink>
        </div>
    );
};
