import tonicoCapilar from "../../../../assets/images/posts-background/tonico-capilar.png";
import { Header } from "../../../../components/Header";
import { PostHeader } from "../../components/PostHeader";

export const TonicoCapilar = () => {
    return (
        <>
            <Header>
                <PostHeader title="Tónico capilar" />
            </Header>
            <div id="post">
                <img className="post-banner" src={tonicoCapilar} alt="" />

                <h2>
                    💆‍♀️ TÓNICO CAPILAR: ACTIVA EL CRECIMIENTO Y COMBATE LA CAÍDA CON ESTA RECETA
                    CASERA
                </h2>

                <p>
                    <strong>
                        Hecho con extractos naturales, este tónico nutre el cuero cabelludo y
                        fortalece el cabello desde la raíz.
                    </strong>
                </p>

                <p>
                    Si tu cabello se está cayendo, está fino o simplemente no crece de ninguna
                    manera, el problema puede estar en el cuero cabelludo.
                </p>

                <p>
                    Es ahí donde todo empieza: circulación, oxigenación, nutrición de los folículos.
                </p>

                <p>
                    Y cuando activas esta zona con los ingredientes adecuados, el cabello responde:
                    <strong>cae menos, crece más fuerte y más rápido.</strong>
                </p>

                <p>
                    Esta receta casera es simple, económica y <strong>realmente funciona.</strong>
                </p>

                <h3>🌿 RECETA CASERA: TÓNICO CAPILAR NATURAL</h3>

                <h4 className="padding-left">Ingredientes:</h4>
                <ul>
                    <li>
                        100 ml de <strong>infusión concentrada de romero</strong> (estimula la
                        circulación en el cuero cabelludo)
                    </li>
                    <li>
                        1 cucharada de <strong>jugo de jengibre fresco</strong> (acción
                        antiinflamatoria y vasodilatadora)
                    </li>
                    <li>
                        1 cucharada de <strong>vinagre de manzana</strong> (equilibra el pH y
                        combate hongos)
                    </li>
                    <li>
                        10 gotas de <strong>aceite esencial de menta piperita</strong> (activa la
                        raíz y refresca)
                    </li>
                    <li>
                        1 cucharada de <strong>pantenol líquido</strong> (hidrata y regenera)
                    </li>
                </ul>

                <h4 className="padding-left">Modo de preparación:</h4>
                <p>
                    Mezcla todo en un frasco con atomizador y conserva en la nevera hasta por 7
                    días. Aplica <strong>directamente sobre el cuero cabelludo limpio</strong>, 1
                    vez al día, masajeando con las yemas de los dedos durante 2 a 3 minutos.
                </p>
                <p>
                    <strong>Consejo:</strong> No es necesario enjuagar. El tónico actúa a lo largo
                    del día o de la noche.
                </p>

                <h3>💊 OPCIÓN EXTRA: FÓRMULA MANIPULADA PARA EL CRECIMIENTO</h3>
                <h4>Fórmula líquida (tónico capilar 120 ml):</h4>
                <ul>
                    <li>Minoxidil vegetal: 5%</li>
                    <li>Cafeína: 2%</li>
                    <li>Nicotinato de metilo: 1%</li>
                    <li>Extracto de jaborandi: 5%</li>
                    <li>D-pantenol: 2%</li>
                    <li>Base loción capilar c.s.p.: 120 ml</li>
                </ul>
                <p>
                    <strong>Modo de uso:</strong> Aplicar 1 vez al día sobre el cuero cabelludo, con
                    masaje.
                </p>
                <p>
                    Esta fórmula estimula el crecimiento, prolonga la fase anágena del cabello y
                    reduce visiblemente la caída en 30 días.
                </p>

                <h3>⏳ RESULTADOS ESPERADOS:</h3>
                <ul className="checked-list">
                    <li>Reducción de la caída en hasta 2 semanas</li>
                    <li>Cabello más fuerte y resistente desde el primer mes</li>
                    <li>Crecimiento acelerado hasta 3 veces con uso continuo</li>
                    <li>Cuero cabelludo más saludable y oxigenado</li>
                </ul>
            </div>
        </>
    );
};
