import "../categories.scss";
import { NavLink } from "react-router";

import cuidadoDeLaPielBackground from "../../../assets/images/categories-background/cuidado-de-la-piel.png";

import mounjaroNatural from "../../../assets/images/posts-background/mounjaro-natural-background.png";

export const CuidadoDeLaPielLink = () => {
    return (
        <NavLink to="/categorias/cuidado-de-la-piel" className="category-box">
            <img src={cuidadoDeLaPielBackground} alt="" />

            <h2>Cuidado de la Piel</h2>
        </NavLink>
    );
};

export const CuidadoDeLaPielPosts = () => {
    return (
        <div id="posts">
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
