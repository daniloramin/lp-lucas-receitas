import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { Recipes } from "./routes/Recipes";
import { Categories } from "./routes/Categories";
import { Layout } from "./components/Layout";
import { Classes } from "./routes/Classes";
import { NotFound } from "./routes/NotFound";
import "keen-slider/keen-slider.min.css";
import { AdelgazamientoYBienestarPosts } from "./routes/Categories/AdelgazamientoYBienestar";
import { CuidadoDeLaPielPosts } from "./routes/Categories/CuidadoDeLaPielBackground";
import { SaludyVitalidadPosts } from "./routes/Categories/SaludyVitalidad";
import { TratamientosCapilaresPosts } from "./routes/Categories/TratamientosCapilares";
import { MounjaroNatural } from "./routes/Categories/AdelgazamientoYBienestar/posts/MounjaroNatural";
import { ProtocoloAntiEstrias } from "./routes/Categories/AdelgazamientoYBienestar/posts/ProtocoloAntiEstrias";
import { CoctelParaVarices } from "./routes/Categories/AdelgazamientoYBienestar/posts/CoctelParaVarices";
import { TonicoCapilar } from "./routes/Categories/TratamientosCapilares/posts/TonicoCapilar";
import { BanoAdelgazante } from "./routes/Categories/AdelgazamientoYBienestar/posts/BanoAdelgazante";
import { MascarillaFacialCoreana } from "./routes/Categories/CuidadoDeLaPielBackground/posts/MascarillaFacialCoreana";
import { BotoxCasero } from "./routes/Categories/CuidadoDeLaPielBackground/posts/BotoxCasero";
import { SkinCareNocturno } from "./routes/Categories/CuidadoDeLaPielBackground/posts/SkinCareNocturno";
import { MascarillaCaseraQuitaPuntosNegros } from "./routes/Categories/CuidadoDeLaPielBackground/posts/MascarillaCaseraQuitaPuntosNegros";
import { AdiosCanas } from "./routes/Categories/TratamientosCapilares/posts/AdiosCanas";
import { Diabetes } from "./routes/Categories/SaludyVitalidad/posts/Diabetes";
import { LaxanteCasero } from "./routes/Categories/SaludyVitalidad/posts/LaxanteCasero";

function App() {
    return (
        <BrowserRouter basename="/lp-lucas-receitas">
            {/* <BrowserRouter> */}
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="recetas" element={<Recipes />} />

                    <Route path="categorias">
                        <Route index element={<Categories />} />

                        <Route
                            path="adelgazamiento-y-bienestar"
                            element={<AdelgazamientoYBienestarPosts />}
                        />
                        <Route path="cuidado-de-la-piel" element={<CuidadoDeLaPielPosts />} />
                        <Route path="salud-y-vitalidad" element={<SaludyVitalidadPosts />} />
                        <Route
                            path="tratamientos-capilares"
                            element={<TratamientosCapilaresPosts />}
                        />
                    </Route>

                    <Route path="clases" element={<Classes />} />

                    <Route path="posts">
                        {/* Adelgazamiento y Bienestar */}
                        <Route path="mounjaro-natural" element={<MounjaroNatural />} />
                        <Route path="protocolo-anti-estrias" element={<ProtocoloAntiEstrias />} />
                        <Route path="coctel-para-varices" element={<CoctelParaVarices />} />
                        <Route path="bano-adelgazante" element={<BanoAdelgazante />} />

                        {/* Cuidado de la Piel */}
                        <Route
                            path="mascarilla-facial-coreana"
                            element={<MascarillaFacialCoreana />}
                        />
                        <Route path="botox-casero" element={<BotoxCasero />} />
                        <Route path="skin-care-nocturno" element={<SkinCareNocturno />} />
                        <Route
                            path="mascarilla-casera-quita-puntos-negros"
                            element={<MascarillaCaseraQuitaPuntosNegros />}
                        />

                        {/* Tratamientos Capilares */}
                        <Route path="tonico-capilar" element={<TonicoCapilar />} />
                        <Route path="adios-canas" element={<AdiosCanas />} />

                        {/* Salud y Vitalidad */}
                        <Route path="diabetes" element={<Diabetes />} />
                        <Route path="laxante-casero" element={<LaxanteCasero />} />
                    </Route>
                </Route>

                <Route path="login" element={<Login />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
