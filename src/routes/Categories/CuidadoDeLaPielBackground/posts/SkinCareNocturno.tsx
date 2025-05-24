import skinCareNocturno from "../../../../assets/images/posts-background/skin-care-nocturno.png";
import { Header } from "../../../../components/Header";
import { PostHeader } from "../../components/PostHeader";

export const SkinCareNocturno = () => {
    return (
        <>
            <Header>
                <PostHeader title="Skin care nocturno" />
            </Header>
            <div id="post">
                <img className="post-banner" src={skinCareNocturno} alt="" />

                <h2>
                    🌙 CUIDADO NOCTURNO DE LA PIEL: EL PASO A PASO CASERO QUE REGENERA LA PIEL
                    MIENTRAS DUERMES
                </h2>

                <p>
                    <strong>
                        Aprende cómo preparar un ritual simple y natural para despertar con la piel
                        renovada y radiante.
                    </strong>
                </p>

                <p>Mientras duermes, tu piel trabaja.</p>

                <p>
                    Es durante la noche cuando el cuerpo entra en modo reparador: regenera células,
                    equilibra la oleosidad y restaura el colágeno.
                </p>

                <p>
                    Por eso, un buen ritual nocturno puede <strong>hacer milagros</strong> — incluso
                    sin gastar en cremas costosas.
                </p>

                <p>
                    A continuación, un paso a paso casero con activos naturales para que cuides tu
                    piel de forma simple, eficaz y deliciosa.
                </p>

                <h2>🌿 RITUAL CASERO: CUIDADO NOCTURNO EN 4 ETAPAS</h2>

                <h3>1. Limpieza con Aceite de Coco y Té Verde</h3>

                <p>
                    Aplica un poco de <strong>aceite de coco</strong> sobre el rostro seco,
                    masajeando bien. Retira con un algodón empapado en{" "}
                    <strong>té verde frío</strong> (acción antioxidante y calmante).
                </p>

                <p>Elimina maquillaje, contaminación y exceso de grasa sin agredir.</p>

                <h3>2. Exfoliación Natural con Avena y Miel (2 veces por semana)</h3>

                <p>
                    Mezcla 1 cucharadita de <strong>avena fina</strong> con 1 cucharadita de{" "}
                    <strong>miel pura.</strong>
                </p>

                <p>
                    Masajea la piel con movimientos circulares y enjuaga con agua tibia. Elimina
                    células muertas, afina la textura y activa la circulación.
                </p>

                <h3>3. Mascarilla Hidratante de Aloe Vera</h3>

                <p>
                    Extrae el gel de una hoja de <strong>aloe vera</strong> y aplícalo en el rostro.
                    <br />
                    Deja actuar durante 15 minutos y enjuaga.
                    <br />
                    Hidrata, calma y regenera profundamente.
                </p>

                <h3>4. Sérum Nocturno con Aceite de Rosa Mosqueta y Vitamina E</h3>

                <p>
                    Mezcla 3 gotas de <strong>aceite de rosa mosqueta</strong> con el contenido de 1
                    cápsula de <strong>vitamina E.</strong>
                </p>

                <p>Aplica en todo el rostro con suaves toquecitos.</p>

                <p>Aclara manchas, previene arrugas y estimula el colágeno durante el sueño.</p>

                <h3>✨ RESULTADOS ESPERADOS:</h3>
                <ul className="checked-list">
                    <li>Piel más firme, suave y con tacto de seda desde la primera semana</li>
                    <li>Reducción visible de manchas, marcas y líneas finas en hasta 30 días</li>
                    <li>Sensación de piel descansada y luminosa al despertar</li>
                    <li>Mayor elasticidad y vitalidad con el uso continuo</li>
                </ul>
            </div>
        </>
    );
};
