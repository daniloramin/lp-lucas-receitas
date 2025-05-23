import "../categories.scss";
import { NavLink } from "react-router";

import saludyVitalidad from "../../../assets/images/categories-background/salud-y-vitalidad-background.png";

import mounjaroNatural from "../../../assets/images/posts-background/mounjaro-natural.png";
import { PostLink } from "../components/PostLink";

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
        <div className="category-posts">
            <NavLink to="/posts/mascarilla-facial-coreana" className="post-box">
                <PostLink
                    imgSrc={mounjaroNatural}
                    title={"MASCARILLA FACIAL COREANA"}
                    description={"LA RECETA DE LAS PIELES DE PORCELANA"}
                />
            </NavLink>
        </div>
    );
};
