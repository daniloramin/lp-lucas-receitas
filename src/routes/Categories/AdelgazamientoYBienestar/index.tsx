import "../categories.scss";
import { NavLink } from "react-router";

import adelgazamientoYBienestarBackground from "../../../assets/images/categories-background/adelgazamiento-y-bienestar.png";

import mounjaroNatural from "../../../assets/images/posts-background/mounjaro-natural.png";
import protocoloAntiEstrias from "../../../assets/images/posts-background/protocolo-anti-estrias.png";
import coctelParaVarices from "../../../assets/images/posts-background/coctel-para-varices.png";
import banoAdelgazante from "../../../assets/images/posts-background/bano-adelgazante.png";
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
        <div className="category-posts">
            <NavLink to="/posts/mounjaro-natural" className="post-box">
                <PostLink
                    imgSrc={mounjaroNatural}
                    title={"MOUNJARO NATURAL"}
                    description={"PREPARA EN CASA LA RECETA QUE SE HIZO VIRAL EN TIK TOK"}
                />
            </NavLink>

            <NavLink to="/posts/protocolo-anti-estrias" className="post-box">
                <PostLink
                    imgSrc={protocoloAntiEstrias}
                    title={"PROTOCOLO ANTI-ESTRÍAS"}
                    description={"RENUEVA TU PIEL CON ESTA MEZCLA PODEROSA"}
                />
            </NavLink>

            <NavLink to="/posts/coctel-para-varices" className="post-box">
                <PostLink
                    imgSrc={coctelParaVarices}
                    title={"CÓCTEL PARA VARICES"}
                    description={"¡ADIÓS VENITAS! DRENAJE NATURAL QUE FUNCIONA"}
                />
            </NavLink>

            <NavLink to="/posts/bano-adelgazante" className="post-box">
                <PostLink
                    imgSrc={banoAdelgazante}
                    title={"BAÑO ADELGAZANTE"}
                    description={"DERRITE GRASA SIN ESFUERZO CON ESTA RECETA DE TINA"}
                />
            </NavLink>
        </div>
    );
};
