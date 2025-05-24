import "../categories.scss";
import { NavLink } from "react-router";

import saludyVitalidad from "../../../assets/images/categories-background/salud-y-vitalidad-background.png";

import diabetes from "../../../assets/images/posts-background/diabetes.png";
import laxanteCasero from "../../../assets/images/posts-background/laxante-casero.png";
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
            <NavLink to="/posts/diabetes" className="post-box">
                <PostLink
                    imgSrc={diabetes}
                    title={"DIABETES"}
                    description={"TRUCO DE LA CANELA QUE AYUDA A REGULAR EL AZÚCAR EN LA SANGRE"}
                />
            </NavLink>

            <NavLink to="/posts/laxante-casero" className="post-box">
                <PostLink
                    imgSrc={laxanteCasero}
                    title={"¡LAXANTE CASERO!"}
                    description={
                        "HAZ ESTE TRUCO CON VINAGRE DE MANZANA Y ELIMINA 2 KILOS DE HECES ACUMULADAS"
                    }
                />
            </NavLink>
        </div>
    );
};
