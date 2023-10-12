const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT
const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = process.env.prefix;

function mt_rand (min, max) {
  var argc = arguments.length;
  if (argc === 0) {        min = 0;
      max = 2147483647;
  } else if (argc === 1) {
      throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
  }    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createEmbed (title,author,color,description,footer,image,thumbnail,timestamp,url){
  const embedDatos = new Discord.MessageEmbed() 
    .setTitle(title)
    .setAuthor(author)
    .setColor(color)
    .setDescription(description)
    .setFooter(footer)
    .setImage(image)
    .setThumbnail(thumbnail)
    .setTimestamp(timestamp)
    .setURL(url)
  return embedDatos;
}
//Estado del bot
client.on('ready', () => {
  console.log(`${client.user.tag} esta listo para el servicio!`);
    client.user.setPresence({
       status: "online",
       activity: {
           name: "En Pruebas",
           type: "PLAYING"
       }
   });
});

client.on('message', msg => {
//Comando para datos curiosos
  if((msg.content === prefix+'iluminanos con tu grandeza')||(msg.content ==='iluminanos oh gran poderoso juanin manzana')){
    
    var respuesta = new Array ("las plantas utilizan el monoxido de carbono para **RESPIRACION AUTOMATICA DESACTIVADA.**",
                               "Los ojos hacen más ejercicio que las piernas. **Ojos Mamados B)**",
                               "El corazón podría mover un coche. \n **Taquicardias go BRRRRRR.**",
                               "De ninguna manera","Eres el responsable de todo el polvo que se junta en tu casa. **No te quejes al limpiar.**",
                               "La lengua nunca descansa. **Pero tu trasero si B)**","Los bebés pueden curar a sus madres en el vientre. **Aguante el support.**",
                               "La orina del gato brilla bajo la luz ultravioleta. **Fiesta de luces.**",
                               "El estómago tiene que producir una nueva capa de mucosa cada dos semanas, de otra manera se digeriría a sí mismo. **Y a ti te duele la panza por cualquier cosa.**",
                               "Así como los perros orinan para marcar su territorio, los gallos cantan en las mañanas para delimitar el suyo. Lo hacen en las mañanas porque a esa hora las aves están mas activas. **Aun asi me cagan el sueño B(**",
                               "Cuanta más alta sea la inteligencia de una persona, más rápido piensa y menos comprensible es su letra. **Dime la definicion de doctor.**",
                               "La manía es cosa del verano, la depresión del invierno. **Que no chingadamadre, es Navidad y Navidad significa Regalos B(**",
                               "Un principio activo de los antidepresivos provoca orgasmos incontrolados. **Los antidepresivos te hacen horny.**",
                               "La estación que más deprime es el invierno. **Mamadas, es Navidad B)**",
                               "Existe la demencia infantil y se asocia con enfermedades como esquizofrenia infantil. **¿Qué? ¿Quién dijo eso?**",
                               "Todos hemos sufrido alucinaciones. **Todos somos Drogos B)**",
                               "Las ratas se multiplican tan rápidamente que en 18 meses, dos rata pueden llegar a tener 1 millón de hijos. **7u7**",
                               "Hay 1,929,770,160,028,800 diferentes combinaciones de color posibles en un cubo de Rubik. **Aun asi no lo he podido resolver.**",
                               "Las manzanas son mas eficientes que la cafeína para mantener a la gente despierta en las mañanas. **SOY REGRAAANDEEE.**",
                               "Los búhos son las únicas aves que pueden ver el color azul. **Pa que, si andan dormidos en el dia cuando el cielo es azul B|**",
                               "Así como los perros orinan para marcar su territorio, los gallos cantan en las mañanas para delimitar el suyo. Lo hacen en las mañanas porque a esa hora las aves están mas activas. **Aun asi me cagan el sueño B(**",
                               "El estómago tiene que producir una nueva capa de mucosa cada dos semanas, de otra manera se digeriría a sí mismo. **Y a ti te duele la panza por cualquier cosa.**");

    msg.channel.send(respuesta[mt_rand(0, respuesta.length-1)]);
    
  }
//Juanin.ayuda
  if((msg.content === prefix+'ayuda')||(msg.content ==='oh gran poderoso juanin manzana ayudame')){
      msg.channel.send(createEmbed("Instrucciones para atender a tu llamado","","7bdc6d"," ‣ **Para que te comparta mi sabiduria:** `iluminanos oh gran poderoso juanin manzana` o `Juanin.iluminanos con tu grandeza`. \n \n  ‣ **Para pedirme ayuda:** `Juanin.ayuda` o `oh gran poderoso juanin manzana ayudame`. \n \n ➵ ***Info Extra:*** Me mantengo activo por la página que se encuentra en el título del embed.","Ten un buen día hijo mio","","","","https://juanin-manzana.glitch.me"));
    }
});

client.login(process.env.token);
