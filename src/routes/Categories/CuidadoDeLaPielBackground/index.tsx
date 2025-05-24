import "../categories.scss";
import { NavLink } from "react-router";

import cuidadoDeLaPielBackground from "../../../assets/images/categories-background/cuidado-de-la-piel.png";

import mascarilaFacialCoreana from "../../../assets/images/posts-background/mascarilla-facial-coreana.png";
import botoxCasero from "../../../assets/images/posts-background/botox-casero.png";
import skinCareNocturno from "../../../assets/images/posts-background/skin-care-nocturno.png";
import mascarillaCaseraQuitaPuntosNegros from "../../../assets/images/posts-background/mascarilla-casera-quita-puntos-negros.png";

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

            <NavLink to="/posts/botox-casero" className="post-box">
                <PostLink
                    imgSrc={botoxCasero}
                    title={"BÓTOX CASERO"}
                    description={"SUAVIZA LAS LÍNEAS DE EXPRESIÓN CON ESTA FÓRMULA NATURAL"}
                />
            </NavLink>

            <NavLink to="/posts/skin-care-nocturno" className="post-box">
                <PostLink
                    imgSrc={skinCareNocturno}
                    title={"SKIN CARE NOCTURNO"}
                    description={"EL PASO A PASO CASERO QUE REGENERA TU ROSTRO MIENTRAS DUERMES"}
                />
            </NavLink>

            <NavLink to="/posts/mascarilla-casera-quita-puntos-negros" className="post-box">
                <PostLink
                    imgSrc={mascarillaCaseraQuitaPuntosNegros}
                    title={"¡MASCARILLA CASERA QUITA PUNTOS NEGROS"}
                    description={"ELIMINA IMPUREZAS Y DEJA LA PIEL COMO DE BEBÉ"}
                />
            </NavLink>
        </div>
    );
};
