import { Header } from "../../components/Header";
import { AdelgazamientoYBienestarPosts } from "../Categories/AdelgazamientoYBienestar";
import { CuidadoDeLaPielPosts } from "../Categories/CuidadoDeLaPielBackground";
import { SaludyVitalidadPosts } from "../Categories/SaludyVitalidad";
import { TratamientosCapilaresPosts } from "../Categories/TratamientosCapilares";

export const Recipes = () => {
    return (
        <div>
            <Header>Recetas</Header>

            <div id="recipes">
                <AdelgazamientoYBienestarPosts />
                <CuidadoDeLaPielPosts />
                <SaludyVitalidadPosts />
                <TratamientosCapilaresPosts />
            </div>
        </div>
    );
};
