import { Header } from "../../components/Header";
import "./style.scss";

import banner1 from "../../assets/images/home-carousel-banner-1.png";
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
                        <NavLink to="/posts/post-1">
                            <div className="box-background-image">
                                <img src={banner1} alt="" />
                            </div>

                            <div className="box-content">
                                <h2>
                                    <span>Mounjaro Natural:</span> Prepara en casa la receta que se
                                    hizo viral en Tiktok
                                </h2>
                            </div>
                        </NavLink>
                    </div>

                    <div className="item">
                        <NavLink to="/posts/post-1">
                            <div className="box-background-image">
                                <img src={banner1} alt="" />
                            </div>

                            <div className="box-content">
                                <h2>
                                    <span>Mounjaro Natural:</span> Prepara en casa la receta que se
                                    hizo viral en Tiktok
                                </h2>
                            </div>
                        </NavLink>
                    </div>

                    <div className="item">
                        <NavLink to="/posts/post-1">
                            <div className="box-background-image">
                                <img src={banner1} alt="" />
                            </div>

                            <div className="box-content">
                                <h2>
                                    <span>Mounjaro Natural:</span> Prepara en casa la receta que se
                                    hizo viral en Tiktok
                                </h2>
                            </div>
                        </NavLink>
                    </div>

                    <div className="item">
                        <NavLink to="/posts/post-1">
                            <div className="box-background-image">
                                <img src={banner1} alt="" />
                            </div>

                            <div className="box-content">
                                <h2>
                                    <span>Mounjaro Natural:</span> Prepara en casa la receta que se
                                    hizo viral en Tiktok
                                </h2>
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className="category">
                    <h2>Categorías</h2>

                    <div className="owl-carousel category-carousel">
                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/post-1">
                                <div className="post-link-image">
                                    <img src={banner1} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Protocolo Antiestrías</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                        voluptatibus officia architecto enim doloribus perspiciatis?
                                    </p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/post-1">
                                <div className="post-link-image">
                                    <img src={banner1} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Protocolo Antiestrías</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                        voluptatibus officia architecto enim doloribus perspiciatis?
                                    </p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/post-1">
                                <div className="post-link-image">
                                    <img src={banner1} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Protocolo Antiestrías</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                        voluptatibus officia architecto enim doloribus perspiciatis?
                                    </p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/post-1">
                                <div className="post-link-image">
                                    <img src={banner1} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Protocolo Antiestrías</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                        voluptatibus officia architecto enim doloribus perspiciatis?
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="category">
                    <h2>Recetas</h2>

                    <div className="owl-carousel category-carousel">
                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/post-1">
                                <div className="post-link-image">
                                    <img src={banner1} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Protocolo Antiestrías</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                        voluptatibus officia architecto enim doloribus perspiciatis?
                                    </p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/post-1">
                                <div className="post-link-image">
                                    <img src={banner1} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Protocolo Antiestrías</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                        voluptatibus officia architecto enim doloribus perspiciatis?
                                    </p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/post-1">
                                <div className="post-link-image">
                                    <img src={banner1} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Protocolo Antiestrías</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                        voluptatibus officia architecto enim doloribus perspiciatis?
                                    </p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/post-1">
                                <div className="post-link-image">
                                    <img src={banner1} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Protocolo Antiestrías</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                        voluptatibus officia architecto enim doloribus perspiciatis?
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="category">
                    <h2>Aulas</h2>

                    <div className="owl-carousel category-carousel">
                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/post-1">
                                <div className="post-link-image">
                                    <img src={banner1} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Protocolo Antiestrías</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                        voluptatibus officia architecto enim doloribus perspiciatis?
                                    </p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/post-1">
                                <div className="post-link-image">
                                    <img src={banner1} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Protocolo Antiestrías</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                        voluptatibus officia architecto enim doloribus perspiciatis?
                                    </p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/post-1">
                                <div className="post-link-image">
                                    <img src={banner1} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Protocolo Antiestrías</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                        voluptatibus officia architecto enim doloribus perspiciatis?
                                    </p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="item" data-merge="2">
                            <NavLink className={`post-link`} to="/posts/post-1">
                                <div className="post-link-image">
                                    <img src={banner1} alt="" />
                                </div>

                                <div className="post-link-content">
                                    <h3>Protocolo Antiestrías</h3>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                        voluptatibus officia architecto enim doloribus perspiciatis?
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
