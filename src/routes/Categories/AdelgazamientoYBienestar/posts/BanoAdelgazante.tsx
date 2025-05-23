import banoAdelgazante from "../../../../assets/images/posts-background/bano-adelgazante.png";
import { Header } from "../../../../components/Header";
import { PostHeader } from "../../components/PostHeader";

export const BanoAdelgazante = () => {
    return (
        <>
            <Header>
                <PostHeader title="Baño adelgazante" />
            </Header>
            <div id="post">
                <img className="post-banner" src={banoAdelgazante} alt="" />

                <h2>🛁 BAÑO ADELGAZANTE: DERRITE GRASA SIN ESFUERZO CON ESTA RECETA DE TINA</h2>

                <p>
                    <strong>
                        Aprende a preparar un baño con hierbas y sales que estimulan la circulación
                        y ayudan a combatir la retención de líquidos.
                    </strong>
                </p>

                <p>
                    ¿A quién no le encanta un buen baño caliente?
                    <br />
                    ¿Y si te dijera que, además de relajante, puede ayudarte a eliminar esa grasita
                    indeseada y reducir la hinchazón?
                </p>

                <p>
                    ¡Así es! Con la combinación adecuada de hierbas y sales, puedes crear un baño
                    adelgazante que estimula la circulación, acelera la quema de grasa y ayuda a
                    desintoxicar tu cuerpo. Todo eso mientras disfrutas del agua caliente y te
                    relajas.
                </p>

                <h3>🌱 INGREDIENTES SECRETOS:</h3>
                <h4>Sales de Epsom:</h4>
                <p>
                    {" "}
                    Ricas en magnesio, ayudan a relajar los músculos y estimular la circulación
                    sanguínea, favoreciendo la eliminación de líquidos y toxinas.
                </p>

                <h4>Hojas de Romero:</h4>
                <p>
                    {" "}
                    Conocido por sus propiedades antioxidantes, el romero mejora la circulación y
                    ayuda a combatir la hinchazón, además de acelerar el metabolismo.
                </p>

                <h4>Jengibre Rallado:</h4>
                <p>
                    {" "}
                    Tiene acción termogénica, es decir, aumenta la temperatura corporal y acelera la
                    quema de grasa localizada.
                </p>

                <h4>Aceite Esencial de Toronja:</h4>
                <p>
                    {" "}
                    Este aceite tiene efecto diurético, ayudando a reducir la retención de líquidos
                    y a dar ese “empujoncito” en la eliminación de toxinas.
                </p>

                <h3>🔥 CÓMO PREPARAR EL BAÑO:</h3>

                <h4>Paso 1:</h4>
                <p>
                    Llena la bañera con agua tibia (no muy caliente, para no dañar tu piel).
                    <br />
                    Mientras se llena, añade <strong>1 taza de sales de Epsom</strong> y{" "}
                    <strong>2 cucharadas de hojas secas de romero</strong>.<br />
                    Si puedes, haz una infusión con el romero en un poco de agua caliente antes de
                    verterlo en la bañera.
                </p>

                <h4>Paso 2:</h4>
                <p>
                    Ralla un trozo de jengibre fresco (aproximadamente <strong>1 cucharada</strong>)
                    y agrégalo al agua, dejando que el aroma invada el ambiente y tu piel absorba
                    sus propiedades termogénicas.
                </p>

                <h4>Paso 3:</h4>
                <p>
                    Añade de <strong>5 a 7 gotas de aceite esencial de toronja</strong> para
                    potenciar el efecto diurético y ayudar con la circulación.
                </p>

                <h4>Paso 4:</h4>
                <p>
                    Sumérgete en la bañera y relájate durante <strong>20 a 30 minutos</strong>,
                    permitiendo que los ingredientes hagan su magia.
                    <br />
                    Respira profundamente y disfruta el momento.
                </p>

                <h3>✨ RESULTADOS ESPERADOS:</h3>
                <ul className="checked-list">
                    <li>Reducción de la retención de líquidos y sensación de ligereza</li>
                    <li>Aceleración en la quema de grasa localizada</li>
                    <li>Piel más tonificada y visiblemente más firme</li>
                    <li>Relajación y disminución del estrés</li>
                </ul>

                <p>
                    Este baño es perfecto para hacerlo al final del día, permitiéndote relajar
                    mientras promueves un efecto detox y adelgazante en tu cuerpo.
                    <br />
                    La combinación de estos ingredientes ayuda a estimular la circulación y combatir
                    la hinchazón, ¡además de ser un verdadero spa casero!
                </p>
            </div>
        </>
    );
};
