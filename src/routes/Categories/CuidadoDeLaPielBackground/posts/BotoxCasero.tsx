import botoxCasero from "../../../../assets/images/posts-background/botox-casero.png";
import { Header } from "../../../../components/Header";
import { PostHeader } from "../../components/PostHeader";

export const BotoxCasero = () => {
    return (
        <>
            <Header>
                <PostHeader title="Botox casero" />
            </Header>
            <div id="post">
                <img className="post-banner" src={botoxCasero} alt="" />

                <h2>💆‍♀️ BOTOX CASERO: SUAVIZA LAS LÍNEAS DE EXPRESIÓN CON ESTA FÓRMULA NATURAL</h2>

                <p>
                    <strong>
                        Una mezcla potente que ofrece un efecto lifting inmediato sin agujas, solo
                        con ingredientes que tienes en casa.
                    </strong>
                </p>

                <p>
                    No todo el mundo está dispuesto (o puede) recurrir a una aguja para eliminar las
                    líneas de expresión.
                </p>

                <p>
                    Pero la buena noticia es que existe una forma natural y segura de lograr un
                    efecto lifting visible, usando únicamente ingredientes accesibles que realmente
                    funcionan.
                </p>

                <p>
                    Esta receta es ideal para suavizar marcas alrededor de los ojos, la frente y la
                    boca.
                </p>

                <p>Con el uso continuo, también ayuda a prevenir la aparición de nuevas líneas.</p>

                <h3>🧴 RECETA CASERA: BOTOX NATURAL CON EFECTO INMEDIATO</h3>

                <h4 className="padding-left">Ingredientes:</h4>

                <ul>
                    <li>1 clara de huevo (efecto tensor inmediato)</li>

                    <li>
                        1 cucharadita de <strong>maicena</strong> (efecto lifting y unificador)
                    </li>

                    <li>
                        1 cucharadita de <strong>aceite de linaza o de argán</strong> (rico en omega
                        3 y antioxidantes)
                    </li>

                    <li>
                        1 cápsula de <strong>vitamina E</strong> (nutre y regenera)
                    </li>
                </ul>

                <h4 className="padding-left">Modo de preparación:</h4>

                <p>
                    Bate ligeramente la clara con un tenedor hasta que haga espuma. Añade la
                    maicena, el aceite y la vitamina E, mezclando hasta formar una pasta homogénea.
                </p>

                <p>Aplica sobre el rostro limpio, especialmente en las zonas con líneas finas.</p>

                <p>
                    Deja actuar durante 20 minutos (sentirás la piel "tensarse") y enjuaga con agua
                    fría.
                </p>

                <p>
                    <strong>Consejo:</strong> Usa de 2 a 3 veces por semana.
                </p>

                <p>
                    Para un efecto prolongado, finaliza con una crema hidratante a base de colágeno
                    vegetal.
                </p>

                <h3>✨ RESULTADOS ESPERADOS:</h3>
                <ul className="checked-list">
                    <li>Efecto tensor visible desde la primera aplicación</li>
                    <li>Reducción progresiva de líneas finas en hasta 15 días</li>
                    <li>Piel más firme, hidratada y luminosa</li>
                    <li>Rostro con apariencia descansada y rejuvenecida</li>
                </ul>
            </div>
        </>
    );
};
