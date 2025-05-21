import "../categories.scss";
import { NavLink } from "react-router";

import adelgazamientoYBienestarBackground from "../../../assets/images/categories-background/adelgazamiento-y-bienestar.png";

import mounjaroNatural from "../../../assets/images/posts-background/mounjaro-natural-background.png";
import { PostLink } from "../components/PostLink";

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
        <div id="category-posts">
            <NavLink to="/posts/mounjaro-natural" className="post-box">
                <PostLink
                    imgSrc={mounjaroNatural}
                    title={"MOUNJARO NATURAL"}
                    description={"PREPARA EN CASA LA RECETA QUE SE HIZO VIRAL EN TIK TOK"}
                />
            </NavLink>

            <NavLink to="/posts/mounjaro-natural" className="post-box">
                <PostLink
                    imgSrc={mounjaroNatural}
                    title={"MOUNJARO NATURAL"}
                    description={"PREPARA EN CASA LA RECETA QUE SE HIZO VIRAL EN TIK TOK"}
                />
            </NavLink>
        </div>
    );
};
