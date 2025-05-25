import { Header } from "../../components/Header";
import "./style.scss";

import adelgazamientoYBienestar from "../../assets/images/categories-background/adelgazamiento-y-bienestar.png";
import cuidadoDeLaPiel from "../../assets/images/categories-background/cuidado-de-la-piel.png";
import tratamientosCapilares from "../../assets/images/categories-background/tratamientos-capilares-background.png";
import saludYVitalidad from "../../assets/images/categories-background/salud-y-vitalidad-background.png";

import mounjaroNatural from "../../assets/images/posts-background/mounjaro-natural.png";
import tonicoCapilar from "../../assets/images/posts-background/tonico-capilar.png";
import laxanteCasero from "../../assets/images/posts-background/laxante-casero.png";
import botoxCasero from "../../assets/images/posts-background/botox-casero.png";
import skinCareNocturno from "../../assets/images/posts-background/skin-care-nocturno.png";
import diabetes from "../../assets/images/posts-background/diabetes.png";
import mascarillaCaseraQuitaPuntosNegros from "../../assets/images/posts-background/mascarilla-casera-quita-puntos-negros.png";
import mascarilaFacialCoreana from "../../assets/images/posts-background/mascarilla-facial-coreana.png";
import adiosCanas from "../../assets/images/posts-background/adios-canas.png";

import { NavLink } from "react-router";
import { useEffect } from "react";

// Add this declaration to inform TypeScript about the owlCarousel method
declare global {
    interface JQuery {
        owlCarousel(options?: any): JQuery;
    }
}

export const Home = () => {
    useEffect(() => {
        $(() => {
            $("#main-carousel").owlCarousel({
                loop: true,
                margin: 10,
                dots: true,
                dotsEach: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                },
            });

            $(".category-carousel").owlCarousel({
                loop: true,
                margin: 10,
                merge: true,
                responsive: {
                    0: {
                        items: 5,
                    },
                },
            });
        });
    }, []);

    return (
        <div>
            <Header>Inicio</Header>

            <main id="home-content">
                <div id="main-carousel" className="owl-carousel">
                    <div className="item">
                        <NavLink to="/posts/tonico-capilar">
                            <div className="box-background-image">
                                <img src={tonicoCapilar} alt="" />
                            </div>

                            <div className="box-content">
                                <h2>
                                    <span>TÓNICO CAPILAR:</span> ACTIVA EL CRECIMIENTO Y COMBATE LA
                                    CAÍDA CON ESTA RECETA CASERA
                                </h2>
                            </div>
                        </NavLink>
                    </div>

                    <div className="item">
                        <NavLink to="/posts/laxante-casero">
                            <div className="box-background-image">
                                <img src={laxanteCasero} alt="" />
                            </div>

                            <div className="box-content">
                                <h2>
                                    <span>¿ESTREÑIMIENTO? ¡NUNCA MÁS!:</span> PRUEBA ESTE TRUCO CON
                                    VINAGRE DE MANZANA Y ELIMINA HASTA 2 KILOS DE HECES ACUMULADAS
                                </h2>
                            </div>
                        </NavLink>
                    </div>

                    <div className="item">
                        <NavLink to="/posts/laxante-casero">
                            <div className="box-background-image">
                                <img src={botoxCasero} alt="" />
                            </div>

                            <div className="box-content">
                                <h2>
                                    <span>BOTOX CASERO:</span> SUAVIZA LAS LÍNEAS DE EXPRESIÓN CON
                                    ESTA FÓRMULA NATURAL
                                </h2>
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className="category">
                    <h2>Categorías</h2>

                    <div className="owl-carousel category-carousel">
                        <div className="item" data-merge="2">
                            <NavLink
                                className={`post-link`}
                                to="/categorias/adelgazamiento-y-bienestar"
                            >
                                <div className="post-link-image">
                                    <img src={adelgazamientoYBienestar} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Adelgazamiento y Bienestar</h3>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/categorias/cuidado-de-la-piel">
                                <div className="post-link-image">
                                    <img src={cuidadoDeLaPiel} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Cuidado de la Piel</h3>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink
                                className={`post-link`}
                                to="/categorias/tratamientos-capilares"
                            >
                                <div className="post-link-image">
                                    <img src={tratamientosCapilares} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Tratamientos Capilares</h3>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/categorias/salud-y-vitalidad">
                                <div className="post-link-image">
                                    <img src={saludYVitalidad} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Salud y Vitalidad</h3>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="category">
                    <h2>Recetas</h2>

                    <div className="owl-carousel category-carousel">
                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/mounjaro-natural">
                                <div className="post-link-image">
                                    <img src={mounjaroNatural} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>MOUNJARO NATURAL</h3>

                                    <p>PREPARA EN CASA LA RECETA QUE SE HIZO VIRAL EN TIK TOK</p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/diabetes">
                                <div className="post-link-image">
                                    <img src={diabetes} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>DIABETES</h3>

                                    <p>
                                        EL TRUCO DE LA CANELA QUE AYUDA A REGULAR EL AZÚCAR EN
                                        SANGRE
                                    </p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/skin-care-nocturno">
                                <div className="post-link-image">
                                    <img src={skinCareNocturno} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>CUIDADO NOCTURNO DE LA PIEL</h3>

                                    <p>
                                        EL PASO A PASO CASERO QUE REGENERA LA PIEL MIENTRAS DUERMES
                                    </p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink
                                className={`post-link`}
                                to="/posts/mascarilla-casera-quita-puntos-negros"
                            >
                                <div className="post-link-image">
                                    <img src={mascarillaCaseraQuitaPuntosNegros} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>¡MASCARILLA CASERA PARA ELIMINAR PUNTOS NEGROS!</h3>

                                    <p>ELIMINA IMPUREZAS Y DEJA LA PIEL DE BEBÉ</p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/mascarilla-facial-coreana">
                                <div className="post-link-image">
                                    <img src={mascarilaFacialCoreana} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>MASCARILLA FACIAL COREANA</h3>

                                    <p>LA RECETA PARA UNA PIEL DE PORCELANA</p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/adios-canas">
                                <div className="post-link-image">
                                    <img src={adiosCanas} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>¡ADIÓS CANAS!</h3>

                                    <p>CHAMPÚ NATURAL QUE CAMBIA EL COLOR DEL CABELLO</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
