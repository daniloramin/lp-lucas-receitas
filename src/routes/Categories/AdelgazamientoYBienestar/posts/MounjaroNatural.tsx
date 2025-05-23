import mounjaroNatural from "../../../../assets/images/posts-background/mounjaro-natural.png";
import { Header } from "../../../../components/Header";
import { PostHeader } from "../../components/PostHeader";

export const MounjaroNatural = () => {
    return (
        <>
            <Header>
                <PostHeader title="Mounjaro natural" />
            </Header>
            <div id="post">
                <img className="post-banner" src={mounjaroNatural} alt="" />

                <h2>🌿 MOUNJARO NATURAL: PREPARA EN CASA LA RECETA QUE SE HIZO VIRAL EN TIKTOK</h2>

                <p>
                    <strong>
                        Una alternativa natural a las famosas inyecciones como Ozempic y Mounjaro.
                        Con activos que estimulan el GLP-1 y el GIP, ayuda a controlar el apetito y
                        quemar grasa.
                    </strong>
                </p>

                <p>
                    ¿Has oído hablar de la “hormona del adelgazamiento”? Su nombre técnico es{" "}
                    <strong>GLP-1</strong>, y está siendo estudiada por médicos de todo el mundo por
                    su capacidad de{" "}
                    <strong>
                        reducir el apetito, mejorar la saciedad y acelerar la quema de grasa
                    </strong>
                    . ¿El problema? Las versiones inyectables son caras y están llenas de efectos
                    secundarios.
                </p>

                <p>
                    La buena noticia es que algunos ingredientes naturales{" "}
                    <strong>activan estos mismos receptores</strong>, sin agujas, sin fármacos y con
                    mucha más seguridad.
                </p>

                <p>
                    Aquí te presento{" "}
                    <strong>dos formas de preparar tu propio "Mounjaro natural"</strong>: una
                    versión casera con ingredientes del supermercado y otra fórmula para mandar a
                    preparar en farmacia magistral.
                </p>

                <h3>🥄 OPCIÓN 1: RECETA CASERA DE MOUNJARO NATURAL</h3>

                <h4 className="padding-left">Ingredientes:</h4>

                <ul>
                    <li>
                        1 cucharadita de psyllium en polvo (fibras solubles que estimulan el GLP-1 y
                        aumentan la saciedad)
                    </li>

                    <li>
                        1 cucharada de vinagre de manzana orgánico (ayuda a controlar el índice
                        glucémico)
                    </li>

                    <li>Jugo de ½ limón (alcaliniza y mejora la digestión)</li>

                    <li>200 ml de agua tibia</li>

                    <li>1 pizca de canela en polvo (activa el metabolismo)</li>
                </ul>

                <h4 className="padding-left">Modo de preparación:</h4>

                <p>
                    Mezcla todo en un vaso y bebe{" "}
                    <strong>30 minutos antes del almuerzo y la cena</strong>. Si lo prefieres, añade
                    hielo y unas gotas de estevia para suavizar el sabor.
                    <strong>Consejo:</strong> Comienza con <strong>1 dosis al día</strong>. Después
                    de 3 días, puedes aumentar a 2 dosis.
                </p>

                <p>
                    El psyllium forma un gel en el estómago que{" "}
                    <strong>reduce el apetito de manera impresionante</strong>.
                </p>

                <h3>💊 OPCIÓN 2: FÓRMULA PARA MANDAR A PREPARAR</h3>

                <p>
                    Lleva esta fórmula a una farmacia de preparación magistral o envíala por
                    mensaje. Obtendrás un resultado aún más potente, con activos que actúan en
                    sinergia.
                </p>

                <h4>Fórmula magistral (30 cápsulas):</h4>

                <ul>
                    <li>Psyllium: 300 mg</li>

                    <li>Extracto seco de Gymnema Sylvestre: 200 mg</li>

                    <li>Cromo Picolinato: 50 mcg</li>

                    <li>Berberina: 250 mg</li>

                    <li>Morosil®: 250 mg</li>
                </ul>

                <h4>Tomar 1 cápsula antes del almuerzo y 1 antes de la cena.</h4>

                <h3>⏳ RESULTADOS ESPERADOS:</h3>

                <ul className="checked-list">
                    <li>Reducción real del apetito en las primeras 48 horas</li>

                    <li>Menos antojos de dulces y carbohidratos</li>

                    <li>Más saciedad con menos comida</li>

                    <li>Pérdida de peso visible en hasta 15 días</li>
                </ul>

                <p>
                    Y lo mejor:{" "}
                    <strong>sin sufrimiento, sin efectos secundarios y sin agujas.</strong>
                </p>
            </div>
        </>
    );
};
