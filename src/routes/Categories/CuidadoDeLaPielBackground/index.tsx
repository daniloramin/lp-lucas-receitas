import "../categories.scss";
import { NavLink } from "react-router";

import cuidadoDeLaPielBackground from "../../../assets/images/categories-background/cuidado-de-la-piel.png";

import mascarilaFacialCoreana from "../../../assets/images/posts-background/mascarilla-facial-coreana.png";
import { PostLink } from "../components/PostLink";

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
        <div className="category-posts">
            <NavLink to="/posts/mascarilla-facial-coreana" className="post-box">
                <PostLink
                    imgSrc={mascarilaFacialCoreana}
                    title={"MASCARILLA FACIAL COREANA"}
                    description={"LA RECETA DE LAS PIELES DE PORCELANA"}
                />
            </NavLink>
        </div>
    );
};
