import mascarillaCaseraQuitaPuntosNegros from "../../../../assets/images/posts-background/mascarilla-casera-quita-puntos-negros.png";
import { Header } from "../../../../components/Header";
import { PostHeader } from "../../components/PostHeader";

export const MascarillaCaseraQuitaPuntosNegros = () => {
    return (
        <>
            <Header>
                <PostHeader title="!Mascarilla casera quita puntos negros!" />
            </Header>
            <div id="post">
                <img className="post-banner" src={mascarillaCaseraQuitaPuntosNegros} alt="" />

                <h2>
                    🧖‍♀️ ¡MASCARILLA CASERA PARA ELIMINAR PUNTOS NEGROS! ELIMINA IMPUREZAS Y DEJA LA
                    PIEL DE BEBÉ
                </h2>

                <p>
                    <strong>
                        Hecha con ingredientes simples, esta máscara ayuda a desobstruir los poros y
                        limpiar profundamente la piel.
                    </strong>
                </p>

                <p>Nada peor que pasar la mano por la cara y sentir esos puntos ásperos.</p>

                <p>Pero no necesitas hacer una limpieza facial costosa para solucionar esto.</p>

                <p>
                    Con esta máscara casera, eliminas los puntos negros, reduces la oleosidad y
                    dejas la piel suave y tersa, ¡como la de un bebé!
                </p>

                <p>Todo con ingredientes que ya tienes en casa.</p>

                <h3>🥣 OPCIÓN 1 – MÁSCARA DE GELATINA Y CARBÓN ACTIVADO (EFECTO PEEL-OFF)</h3>

                <h4 className="padding-left">Ingredientes:</h4>

                <ul>
                    <li>
                        1 cucharada de <strong>gelatina sin sabor</strong>
                    </li>

                    <li>
                        1 cápsula de <strong>carbón activado</strong> (o ½ cucharadita)
                    </li>

                    <li>
                        2 cucharadas de <strong>agua filtrada</strong>
                    </li>
                </ul>

                <h4 className="padding-left">Modo de preparación:</h4>

                <p>
                    Mezcla todo en un recipiente y calienta en el microondas durante 10 segundos
                    (solo para activar la gelatina).
                </p>

                <p>
                    Deja enfriar un poco y aplícalo en la nariz, el mentón y la frente con un pincel
                    o los dedos. Espera que se seque completamente (unos 20 minutos) y retira con
                    cuidado.
                </p>

                <p>
                    <strong>Resultado:</strong> Elimina puntos negros superficiales, impurezas y
                    células muertas, dejando la piel suave.
                </p>

                <h3>🥄 OPCIÓN 2 – MÁSCARA DE ARCILLA CON MIEL Y LIMÓN (PURIFICANTE)</h3>

                <h4 className="padding-left">Ingredientes:</h4>

                <ul>
                    <li>
                        1 cucharada de <strong>arcilla verde o blanca</strong>
                    </li>

                    <li>
                        1 cucharadita de <strong>miel pura</strong>
                    </li>

                    <li>
                        5 gotas de <strong>limón exprimido al momento</strong>
                    </li>
                </ul>

                <h4 className="padding-left">Modo de preparación:</h4>

                <p>Mezcla todo hasta formar una pasta homogénea.</p>

                <p>Aplica sobre el rostro limpio, evitando el área de los ojos.</p>

                <p>Deja actuar de 10 a 15 minutos y enjuaga con agua fría.</p>

                <p>
                    <strong>Atención:</strong> Usa esta máscara solo por la noche, debido al limón
                    (es fotosensible). Siempre usa protector solar al día siguiente.
                </p>

                <h3>✨ RESULTADOS ESPERADOS:</h3>
                <ul className="checked-list">
                    <li>Reducción visible de puntos negros</li>
                    <li>Poros más limpios y menos dilatados</li>
                    <li>Piel suave al tacto y con apariencia uniforme</li>
                    <li>Disminución de la oleosidad y brillo excesivo</li>
                </ul>
            </div>
        </>
    );
};
