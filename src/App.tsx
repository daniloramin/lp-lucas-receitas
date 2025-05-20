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

function App() {
    return (
        <BrowserRouter>
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
                    </Route>

                    <Route path="clases" element={<Classes />} />

                    <Route path="posts"></Route>
                </Route>

                <Route path="login" element={<Login />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
