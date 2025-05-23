import "../categories.scss";
import { NavLink } from "react-router";

import tratamientosCapilares from "../../../assets/images/categories-background/tratamientos-capilares-background.png";

import tonicoCapilar from "../../../assets/images/posts-background/tonico-capilar.png";
import { PostLink } from "../components/PostLink";

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
        <div className="category-posts">
            <NavLink to="/posts/tonico-capilar" className="post-box">
                <PostLink
                    imgSrc={tonicoCapilar}
                    title={"TÓNICO CAPILAR"}
                    description={"ACTIVA EL CRECIMIENTO Y COMBATE LA CAÍDA CON ESTA RECETA CASERA"}
                />
            </NavLink>
        </div>
    );
};
