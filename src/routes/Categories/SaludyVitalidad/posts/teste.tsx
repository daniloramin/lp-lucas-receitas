import mascarillaFacialCoreana from "../../../../assets/images/posts-background/mascarilla-facial-coreana.png";
import { Header } from "../../../../components/Header";
import { PostHeader } from "../../components/PostHeader";

export const MascarillaFacialCoreana = () => {
    return (
        <>
            <Header>
                <PostHeader title="Mascarilla facial coreana" />
            </Header>
            <div id="post">
                <img className="post-banner" src={mascarillaFacialCoreana} alt="" />

                <h2>🧖‍♀️ MASCARILLA FACIAL COREANA: LA RECETA PARA UNA PIEL DE PORCELANA</h2>

                <p>
                    <strong>
                        Inspirada en los rituales de belleza asiáticos, esta mascarilla hidrata
                        profundamente, ilumina y suaviza manchas.
                    </strong>
                </p>

                <p>
                    ¿Has notado cómo las coreanas parecen <strong>no envejecer nunca?</strong> Su
                    piel tiene ese aspecto de porcelana: lisa, sin manchas y siempre radiante.
                </p>

                <p>
                    Gran parte de ese secreto está en la combinación de{" "}
                    <strong>
                        hidratación intensa, ingredientes naturales y activos aclarantes
                    </strong>{" "}
                    usados con frecuencia.
                </p>

                <p>
                    Esta mascarilla está inspirada en esos rituales, y puedes hacerla en casa con
                    ingredientes simples — ¡pero el efecto es digno de un spa coreano!
                </p>

                <h3>🧴 RECETA CASERA: MASCARILLA FACIAL COREANA HIDRATANTE E ILUMINADORA</h3>

                <h4 className="padding-left">Ingredientes:</h4>

                <ul>
                    <li>
                        1 cucharada de <strong>yogur natural entero</strong> (hidrata, calma y
                        renueva)
                    </li>

                    <li>
                        1 cucharadita de <strong>miel pura</strong> (antibacteriana y cicatrizante)
                    </li>

                    <li>
                        1 cucharadita de <strong>extracto de arroz o arroz en polvo fino</strong>{" "}
                        (aclara manchas y da luminosidad)
                    </li>

                    <li>
                        5 gotas de <strong>aceite de rosa mosqueta</strong> (regenerador y
                        suavizante de marcas)
                    </li>

                    <li>
                        1 cápsula de <strong>vitamina E</strong> (antioxidante poderoso)
                    </li>
                </ul>

                <h4 className="padding-left">Modo de preparación:</h4>

                <p>
                    Mezcla todos los ingredientes hasta obtener una pasta uniforme. Aplica sobre la
                    piel limpia y seca, evitando el área de los ojos. Deja actuar durante 20 minutos
                    y enjuaga con agua fría.
                </p>

                <p>
                    <strong>Consejo:</strong> Usa de 2 a 3 veces por semana. Para potenciar el
                    efecto, aplícala con un pincel y finaliza con agua termal o cubitos de té verde
                    frío en el rostro.
                </p>

                <h3>✨ RESULTADOS ESPERADOS:</h3>
                <ul className="checked-list">
                    <li>Piel más hidratada y radiante desde la primera aplicación</li>
                    <li>Tono más uniforme y manchas atenuadas después de 2 semanas</li>
                    <li>Textura más lisa, luminosa y con efecto glow</li>
                    <li>Aspecto de piel renovada y rejuvenecida con uso continuo</li>
                </ul>
            </div>
        </>
    );
};
