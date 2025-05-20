import { NavLink } from "react-router";
import "./style.scss";

export const NotFound = () => {
    return (
        <div id="not-found">
            <h1>404 - Not Found</h1>
            <p>Lo sentimos, la página que estás buscando no existe.</p>

            <NavLink to="/">Volver a la página principal</NavLink>
        </div>
    );
};
