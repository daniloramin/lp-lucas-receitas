import protocoloAntiEstrias from "../../../../assets/images/posts-background/protocolo-anti-estrias.png";
import { Header } from "../../../../components/Header";
import { PostHeader } from "../../components/PostHeader";

export const ProtocoloAntiEstrias = () => {
    return (
        <>
            <Header>
                <PostHeader title="Protocolo anti estrias" />
            </Header>
            <div id="post">
                <img className="post-banner" src={protocoloAntiEstrias} alt="" />

                <h2>✨ PROTOCOLO ANTIESTRÍAS: RENUEVA TU PIEL CON ESTA MEZCLA PODEROSA</h2>

                <p>
                    <strong>
                        Un tratamiento casero con ingredientes que aumentan la elasticidad de la
                        piel y suavizan estrías tanto nuevas como antiguas.
                    </strong>
                </p>

                <p>
                    Las estrías aparecen cuando la piel se estira más allá de su límite y se rompen
                    sus fibras de colágeno y elastina. El secreto para atenuar estas marcas está en{" "}
                    <strong>
                        hidratar profundamente, estimular la regeneración celular y reactivar la
                        producción de colágeno.
                    </strong>
                </p>

                <p>
                    Y eso es exactamente lo que hace esta receta casera. Vas a preparar un verdadero
                    elixir regenerador, usando solo ingredientes naturales y accesibles.
                </p>

                <p>
                    Pero si quieres potenciar aún más los resultados, también incluí una versión
                    magistral justo abajo.
                </p>

                <h3>🥣 RECETA CASERA: CREMA ANTIESTRÍAS NATURAL</h3>

                <h4 className="padding-left">Ingredientes:</h4>

                <ul>
                    <li>
                        2 cucharadas de aceite de <strong>rosa mosqueta</strong> (regenerador
                        celular y cicatrizante)
                    </li>

                    <li>
                        1 cucharada de <strong>aceite de almendras dulces</strong> (hidrata en
                        profundidad y mejora la elasticidad)
                    </li>

                    <li>
                        1 cápsula de <strong>vitamina E</strong> (antioxidante potente que protege y
                        regenera)
                    </li>

                    <li>
                        1 cucharadita de <strong>Bepantol líquido</strong> (hidratación intensiva)
                    </li>

                    <li>
                        5 gotas de <strong>aceite esencial de lavanda</strong> (calma y mejora la
                        textura de la piel)
                    </li>
                </ul>

                <h4 className="padding-left">Modo de preparación:</h4>

                <p>
                    Mezcla todos los ingredientes en un frasco de vidrio limpio y oscuro (para
                    conservar mejor).
                </p>

                <p>
                    Aplica en las zonas con estrías dos <strong>veces al día</strong>, con la piel
                    limpia y aún ligeramente húmeda — esto mejora la absorción.
                </p>

                <p>
                    Masajea con movimientos circulares durante al menos 3 minutos. Lo ideal es
                    hacerlo <strong>justo después del baño</strong>, cuando los poros están
                    abiertos.
                </p>

                <p>
                    <strong>Consejo extra</strong>: Una vez por semana, exfolia la piel antes de
                    aplicar la crema. Puedes usar una mezcla de café con aceite de oliva o azúcar
                    con miel. Esto elimina células muertas y mejora la penetración de los activos.
                </p>

                <h3>💊 OPCIÓN EXTRA: FÓRMULA MAGISTRAL</h3>

                <p>
                    Esta fórmula está indicada para quienes desean acelerar el proceso y tratar
                    estrías más antiguas y profundas.
                </p>

                <h4>Fórmula en gel-crema (100g):</h4>

                <ul>
                    <li>Aceite de Rosa Mosqueta: 10%</li>

                    <li>Dexpantenol (Bepantol): 5%</li>

                    <li>Silicio Orgánico: 3%</li>

                    <li>Vitamina E: 2%</li>

                    <li>Hidroxiprolina: 5% (activo que estimula el colágeno)</li>

                    <li>Base gel-crema c.s.p.: 100g</li>
                </ul>

                <p>
                    <strong>Modo de uso</strong>: Aplicar 2 veces al día en las zonas afectadas, con
                    masaje hasta su completa absorción.
                </p>

                <h3>⏳ RESULTADOS ESPERADOS:</h3>

                <ul className="checked-list">
                    <li>Piel más firme e hidratada en pocos días</li>

                    <li>Estrías rojas atenuadas rápidamente</li>

                    <li>Reducción progresiva de estrías blancas en hasta 8 semanas</li>

                    <li>Piel más lisa, uniforme y con apariencia joven</li>
                </ul>
            </div>
        </>
    );
};
