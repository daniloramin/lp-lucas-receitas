import type { ReactNode } from "react";
import "./style.scss";

export const Header = ({ children }: { children: ReactNode }) => {
    return (
        <header id="header">
            <h1>{children}</h1>
        </header>
    );
};
