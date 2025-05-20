import { Header } from "../../components/Header";
import { AdelgazamientoYBienestarLink } from "./AdelgazamientoYBienestar";
import { CuidadoDeLaPielLink } from "./CuidadoDeLaPielBackground";

import "./style.scss";

export const Categories = () => {
    return (
        <div>
            <Header>Categorias</Header>

            <div id="categories">
                <AdelgazamientoYBienestarLink />

                <CuidadoDeLaPielLink />
            </div>
        </div>
    );
};
