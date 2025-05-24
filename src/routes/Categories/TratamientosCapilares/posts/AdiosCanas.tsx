import adiosCanas from "../../../../assets/images/posts-background/adios-canas.png";
import { Header } from "../../../../components/Header";
import { PostHeader } from "../../components/PostHeader";

export const AdiosCanas = () => {
    return (
        <>
            <Header>
                <PostHeader title="¡Adiós canas!" />
            </Header>
            <div id="post">
                <img className="post-banner" src={adiosCanas} alt="" />

                <h2>🖤 ¡ADIÓS CANAS! CHAMPÚ NATURAL QUE CAMBIA EL COLOR DEL CABELLO</h2>

                <p>
                    <strong>
                        Descubre la fórmula que oscurece gradualmente las canas utilizando activos
                        naturales y seguros.
                    </strong>
                </p>

                <p>
                    Si las canas empezaron a aparecer pero no quieres recurrir a tintes con
                    amoníaco, esta receta es para ti.
                </p>

                <p>
                    Usa ingredientes naturales con acción pigmentante, antioxidante y fortalecedora,
                    devolviendo el color, el brillo y la vitalidad al cabello — sin agredir el cuero
                    cabelludo.
                </p>

                <p>El resultado es progresivo, pero real.</p>

                <p>
                    Con el uso continuo, el cabello va recuperando su tono original y las canas se
                    vuelven cada vez menos visibles.
                </p>

                <h3>🧴 RECETA CASERA: CHAMPÚ OSCURECEDOR NATURAL</h3>

                <h4 className="padding-left">Ingredientes:</h4>
                <ul>
                    <li>
                        2 cucharadas de <strong>té negro bien concentrado (infusión fuerte)</strong>
                    </li>
                    <li>
                        1 cucharada de <strong>café soluble en polvo</strong>
                    </li>
                    <li>
                        1 cucharada de{" "}
                        <strong>aceite de romero (estimula los folículos y oscurece)</strong>
                    </li>
                    <li>
                        200 ml de <strong>champú neutro sin sal</strong>
                    </li>
                </ul>

                <h4 className="padding-left">Modo de preparación:</h4>
                <p>Mezcla todos los ingredientes en el frasco del champú.</p>

                <p>Agita bien antes de cada uso.</p>

                <p>
                    Usa normalmente durante el baño, dejando actuar en el cuero cabelludo por 5
                    minutos antes de enjuagar.
                </p>

                <p>
                    <strong>Consejo:</strong> Utiliza de 3 a 4 veces por semana.
                </p>

                <p>
                    Para intensificar los resultados, haz una mascarilla semanal con el mismo té
                    negro y café.
                </p>

                <h3>💊 OPCIÓN MANIPULADA: TÓNICO REGENERADOR DE PIGMENTO</h3>

                <h4>Fórmula (100 ml):</h4>
                <ul>
                    <li>Catalasa: 2%</li>
                    <li>Extracto de nogal: 5%</li>
                    <li>Biotina: 0,5%</li>
                    <li>Aceite esencial de romero: 1%</li>
                    <li>Base tónica capilar c.s.p.</li>
                </ul>
                <p>
                    <strong>Modo de uso:</strong> Aplicar directamente sobre el cuero cabelludo
                    limpio, masajeando bien.
                </p>

                <p>No enjuagar. Uso diario.</p>

                <p>
                    La catalasa ayuda a neutralizar el peróxido de hidrógeno en los cabellos — uno
                    de los responsables del encanecimiento.
                </p>

                <p>El extracto de nogal contribuye a oscurecer suavemente, sin teñir.</p>

                <h3>⏳ RESULTADOS ESPERADOS:</h3>
                <ul className="checked-list">
                    <li>Oscurecimiento natural y progresivo de las canas</li>
                    <li>Fortalecimiento del cuero cabelludo y reducción de la caída</li>
                    <li>Brillo, suavidad y apariencia más joven del cabello</li>
                    <li>Sustituye tintes químicos de forma saludable</li>
                </ul>
            </div>
        </>
    );
};
