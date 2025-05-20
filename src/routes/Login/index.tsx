import "./styles.scss";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasErrorMessage, setHasErrorMessage] = useState(false);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (username !== "admin@admin" || password !== "123456") {
            setHasErrorMessage(true);
            return;
        }

        setHasErrorMessage(false);
        localStorage.setItem("logged", "logged");
        navigate("/");
    }

    return (
        <div id="login">
            <div className="box">
                <img src={logo} alt="" />

                <h1>¡Inicia sesión ahora!</h1>

                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Nombre de Usuario"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {hasErrorMessage && (
                        <p className="error-message">
                            El nombre de usuario o la contraseña son incorrectos.
                        </p>
                    )}

                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
};
