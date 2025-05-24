import diabetes from "../../../../assets/images/posts-background/diabetes.png";
import { Header } from "../../../../components/Header";
import { PostHeader } from "../../components/PostHeader";

export const Diabetes = () => {
    return (
        <>
            <Header>
                <PostHeader title="Diabetes" />
            </Header>
            <div id="post">
                <img className="post-banner" src={diabetes} alt="" />

                <h2>🍯 DIABETES: EL TRUCO DE LA CANELA QUE AYUDA A REGULAR EL AZÚCAR EN SANGRE</h2>

                <p>
                    <strong>
                        Descubre cómo la canela puede ser una aliada poderosa en la reducción de los
                        niveles de glucosa y en el control de la diabetes.
                    </strong>
                </p>

                <p>
                    Si tienes diabetes o estás en riesgo de desarrollarla, sabes lo crucial que es
                    mantener bajo control los niveles de glucosa en sangre.
                </p>

                <p>
                    ¿Y si te dijera que un truco simple con un ingrediente que probablemente ya
                    tienes en tu despensa puede ayudarte a equilibrar tu azúcar?
                </p>

                <p>
                    ¡Sí, la <strong>canela!</strong>
                </p>

                <p>
                    Investigaciones científicas han demostrado que la canela tiene propiedades que
                    pueden <strong>ayudar a reducir los niveles de glucosa</strong> en sangre,
                    mejorando la respuesta del cuerpo a la insulina. Esto la convierte en una opción
                    natural eficaz para complementar el control de la diabetes.
                </p>

                <h3>🌱 EL PODER DE LA CANELA:</h3>

                <h4>¿Cómo funciona?</h4>

                <p>
                    La canela contiene compuestos llamados <strong>cumarinas</strong>, que ayudan a
                    mejorar la sensibilidad a la insulina, lo que significa que el cuerpo puede
                    utilizar la glucosa de manera más eficiente.
                </p>

                <p>
                    Además, puede <strong>reducir la absorción de carbohidratos</strong>, ayudando a
                    evitar picos de azúcar en sangre después de las comidas.
                </p>

                <h2>💡 CÓMO USAR LA CANELA A TU FAVOR:</h2>

                <h3>Receta sencilla de té de canela</h3>

                <h4 className="padding-left">Ingredientes:</h4>

                <ul>
                    <li>1 rama de canela (o 1 cucharadita de canela en polvo)</li>

                    <li>1 taza de agua</li>
                </ul>

                <h4 className="padding-left">Modo de preparación:</h4>

                <ol>
                    <li>Hierve el agua en una olla.</li>

                    <li>
                        Cuando empiece a hervir, añade la rama de canela (o la canela en polvo).
                    </li>

                    <li>Deja hervir durante 5 minutos y luego cuela.</li>
                </ol>

                <p>
                    Bebe una taza de este té de canela al día, preferiblemente en ayunas por la
                    mañana.
                </p>

                <h4>Consejo extra: Canela con limón</h4>

                <p>
                    También puedes añadir unas gotas de limón al té de canela. El limón es conocido
                    por sus propiedades antioxidantes y puede ayudar aún más en el control de la
                    glucosa.
                </p>

                <h3>⚖️ RESULTADOS ESPERADOS:</h3>
                <ul className="checked-list">
                    <li>Reducción de los niveles de glucosa en sangre con el tiempo</li>
                    <li>
                        Mejora en la sensibilidad a la insulina, facilitando el control de la
                        diabetes
                    </li>
                    <li>Menor riesgo de picos glucémicos después de las comidas</li>
                    <li>
                        Acción antiinflamatoria y antioxidante con beneficios para la salud general
                    </li>
                </ul>
            </div>
        </>
    );
};
