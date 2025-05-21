import "../categories.scss";
import { NavLink } from "react-router";

import tratamientosCapilares from "../../../assets/images/categories-background/tratamientos-capilares-background.png";

import mounjaroNatural from "../../../assets/images/posts-background/mounjaro-natural-background.png";

export const TratamientosCapilaresLink = () => {
    return (
        <NavLink to="/categorias/tratamientos-capilares" className="category-box">
            <img src={tratamientosCapilares} alt="" />

            <h2>Tratamientos Capilares</h2>
        </NavLink>
    );
};

export const TratamientosCapilaresPosts = () => {
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
