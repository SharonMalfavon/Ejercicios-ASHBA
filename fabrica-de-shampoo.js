/* Recibes la tarea de construir un sistema de alarma para una fábrica de champús. Tu sistema recibe las siguientes variables: temperatura ambiente, humedad ambiental, número de trabajadores en la planta y nivel de líquido en los tanques. La alarma debe sonar siempre que la temperatura ambiente sea superior o inferior a los umbrales, si la humedad es superior al 50%, si hay más de 100 trabajadores en la planta al mismo tiempo, o si el nivel del líquido es superior al 90% (para evitar el desbordamiento).
umbral superior 90% umbral inferior 30%
 */

var temperaturaA=prompt("ingresa la temperatura");
var HA=prompt("ingresa la humedad ambiental");
var NT=prompt("ingresa el numero de trabjadores");
var NLT=prompt("ingresa el nivel de liquido en los tanques");

var TM=(HA % 2);
var LM=90;
var TME=90;
var TMM=30;


if( HA > TM)
    alert("CUIDADO, HUMEDAD AMBIENTAL ARRIBA DE 50%");
else
    alert("Humedad ambiental: Estable ");
if (temperaturaA > TME)
    alert("CUIDADO, TEMPERATURA AMBIENTE ARRIBA DE 90%");
else
alert("temperatura: Estable ");
      if (NT > 100)
      alert("CUIDADO, LIMITE DE PERSONAS SUPERADO");
      else
      alert("Capacidad de personas: Estable ");
      if (NLT > LM)
      alert("CUIDADO, LIMITE DE LIQUIDO SUPERADO");
      else