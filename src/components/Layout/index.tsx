import { Outlet, useLocation, useNavigate } from "react-router";
import { NavBar } from "../NavBar";
import { useEffect } from "react";

export const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("logged"); // ou outro método

        if (!isAuthenticated || isAuthenticated !== "logged") {
            navigate("/login", { replace: true });
        }
    }, [location.pathname]);

    return (
        <div>
            <Outlet />

            <NavBar />
        </div>
    );
};
