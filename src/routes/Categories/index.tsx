import { Header } from "../../components/Header";
import { AdelgazamientoYBienestarLink } from "./AdelgazamientoYBienestar";
import { CuidadoDeLaPielLink } from "./CuidadoDeLaPielBackground";
import { SaludyVitalidadLink } from "./SaludyVitalidad";

import "./style.scss";
import "./post.scss";
import { TratamientosCapilaresLink } from "./TratamientosCapilares";

export const Categories = () => {
    return (
        <div>
            <Header>Categorias</Header>

            <div id="categories">
                <AdelgazamientoYBienestarLink />

                <CuidadoDeLaPielLink />

                <SaludyVitalidadLink />

                <TratamientosCapilaresLink />
            </div>
        </div>
    );
};
