let texto = document.getElementById("texto");
let botones = document.getElementById("botonera");

function elegirOpcion(opcion) {//blanda o dura
    if (opcion == 1) {
        texto.innerHTML = "Te zampas la esfera biológica y de repente sientes una furia animal inexplicable. Necesitas comer más. De nuevo, dos almas en pena tienen la desgracia de toparse contigo.";
        botones.innerHTML = '<button onclick="elegirOpcion1(1)">Eliges el bichillo azul con salientes</button><button onclick="elegirOpcion1(2)">Eliges la bola peluda</button>';
    }else{
        texto.innerHTML = "Después de mascar ese revestimiento verde un buen rato, te sientes en relativa paz con tu entorno. Tu hambre de vida ajena ha pasado ahora a cosas más simples y mundanas.";
        botones.innerHTML = '<button onclick="elegirOpcion2(1)">Bebes una molécula de agua que pasaba por ahí</button><button onclick="elegirOpcion2(2)">Encuentras la manera de zamparte un rayo de luz</button>';
    }
}

function elegirOpcion1(opcion) {//azul o pelo
    if (opcion == 1) {
        texto.innerHTML = "Sabía a salmorejo, mola. Sientes cómo tu piel se hace más robusta y tus habilidades de nado se pulen, ¡mola! ¿Qué sientes ahora?";
        botones.innerHTML = '<button onclick="elegirOpcion11(1)">Quieres sangre.</button><button onclick="elegirOpcion11(2)">Te sientes chill</button>';
    }else{
        texto.innerHTML = "Tampoco voy a cuestionar tus gustos. El caso es que de repente sientes cómo todo tu cuerpo empieza a desarrollarse completamente, hasta que esa piscina de organismos se te queda pequeña. Necesitas tierra y vas a por ella. Sigues hambriento.";
        botones.innerHTML = '<button onclick="elegirOpcion12(1)">Ensalada de prado</button><button onclick="elegirOpcion12(2)">Brochetas hechas de tu colega que evolucionó al mismo tiempo que tú</button>';
    }
}

function elegirOpcion2(opcion) {//agua o luz
    if (opcion == 1) {
        texto.innerHTML = "Ingieres la molécula porque tiene forma graciosa, te entiendo. Pensándolo bien, el agua está bastante guay, ¿para qué querrías salir de aquí?";
        botones.innerHTML = '<button onclick="elegirOpcion21(1)">Claro, joder. ¿Para qué?</button><button onclick="elegirOpcion21(2)">Para tener más a mano la luz, que también mola</button>';
    }else{
        texto.innerHTML = "Tu hambre voraz desafía las leyes de la física y te las apañas para comer luz, bien por ti. En la superficie hay de sobra, así que para allí vas. ¿Quieres algo más?";
        botones.innerHTML = '<button onclick="elegirOpcion22(1)">Quedas pancho</button><button onclick="elegirOpcion22(2)">Te comes una mosca</button>';
    }
}

function elegirOpcion11(opcion) {//sangre o chill
    if (opcion == 1) {
        texto.innerHTML = "Tu sed es imparable. Tus sentidos depredadores se han agudizado tanto que no hay otra especie que pueda siquiera intimidarte en tu entorno. Has conseguido evolucionar al TIBURÓN. Disfruta de la gloria y evita nadar por Japón.";
        botones.innerHTML = '';
    }else{
        texto.innerHTML = "Qué más quiere uno que nadar libremente y alimentarte de alguitas sin hacer daño a nadie. Cualquiera que eligiera otra opción sería un verdadero psicópata, y tú no eres uno de esos. Disfruta tu nueva vida como PEZ, no todos pueden hacer lo mismo.";
        botones.innerHTML = '';
    }
}

function elegirOpcion12(opcion) {//prado o carne
    if (opcion == 1) {
        texto.innerHTML = "Podría saber mejor, tampoco eres tonto, pero el mundo es un lugar suficientemente hostil y complejo como para ponerte a quejarte por nimiedades. La vida como VACA tampoco está tan mal, tira y arrasa con todo el césped a tu paso.";
        botones.innerHTML = '';
    }else{
        texto.innerHTML = "Josema había sido tu único amigo desde que tan solo erais nucleoides, pero los dos sabíais que la vida tiene que hacerse a su paso y por el camino te dejas cosas atrás. Al menos se dejó y estaba rico. Ahora eres un majestuoso LOBO y el bosque entero es tu territorio. Josema habría querido que vivieras este destino. Sonríe y vive por Josema.";
        botones.innerHTML = '';
    }
}

function elegirOpcion21(opcion) {
    if (opcion == 1) {
        texto.innerHTML = "Te has convertido en la figura principal del apatismo. La Idea de apatismo. El Ápato. Tu vida ahora consiste en dejar que la marea te lleve a donde quiera mientras bebes de ella lo que necesites. Es lo único a lo que puedes aspirar como ALGA. No soy nadie para decir que tu vida es más triste que una peli mala, pero alguien tiene que bajarte de la nube. Haz lo que quieras.";
        botones.innerHTML = '';
    }else{
        texto.innerHTML = "El agua mola pero no está tan buena como para depender de ella hasta el final de tus días, así que te quedas flotando en la tranquilidad del agua mientras la luz de la estrella madre te llena de paz. Del gozo que llevas hasta te sale un floripondio. Ahora eres un NENÚFAR, y molas porque como todos sabemos puedes rebotar en un nenúfar y saltarás más alto. Esto es verdad pero la Big Pharma no quiere que lo sepas.";
        botones.innerHTML = '';
    }
}

function elegirOpcion22(opcion) {
    if (opcion == 1) {
        texto.innerHTML = "Te entiendo. Has encontrado un remanso de paz después de este cruel viaje y los nutrientes del sol de verano son lo único que necesitabas todo este tiempo. Te gusta tanto que desarrollas un apego ansioso por el Sol bastante tóxico. Por suerte para él ni siquiera sabe quién eres. Al menos eres un GIRASOL y vives en una pseudo-cárcel con miles como tú y te zarandean para robarte las pipas. Lo equivalente en botánica a L'Hospitalet.";
        botones.innerHTML = '';
    }else{
        texto.innerHTML = "Eres una criatura extraña, cuanto menos. Tu viaje te había enseñado que la crueldad no era necesaria para avanzar, y cuando te habías acostumbrado a esta nueva forma pacifista de vivir te lo cargas. Supongo que el instinto de supervivencia hace estragos, pero yo lo veo más capricho. En fin, que te has convertido en una PLANTA CARNÍVORA que al menos se ve muy guay. Solo espero que no te adopte un tío raro porque también piense lo mismo, vas a durar dos días";
        botones.innerHTML = '';
    }
}