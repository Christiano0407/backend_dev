# backend_dev

Projects using Backend with Node js and Javascript. Practice and Courses With Node Js.

## FreeCodeCamp & Platzi

Si deseas ver el curso en nuestro canal de YouTube, haz clic en este enlace:

- [FreeCodeCamp_Spanish](https://www.youtube.com/watch?v=1hpc70_OoAg&t=4435s)

- [Platzi](https://platzi.com/home)

## ¿Qué es NodeJs?

Es un entorno de ejecución de Javascript, orientado a eventos asíncronos.

> ¿Entorno de Ejecución?

Entorno (Infraestructura) en el cual se ejecuta un programa o aplicación.

> ¿Qué es un evento asíncrono?

Evento que se ejecuta independiente del proceso principal de la aplicación.

Un ejemplo: Obtener información de una base de datos.

> ¿ Evento Síncrono?

Evento que se ejecuta como parte del proceso principal de la aplicación.

> Características:

- Open-source(Código Abierto).
- Multiplataforma.
- Basado en el motor V8 de Google.

> ¿Motor V8?

Motor de Javascript desarrollado por el Chromium Project para Google Chrome.

> ¿Motor de Javascript?

Software que ejecuta código de Javascript.

> Es usado para:

- Desarrollo Back-end
- Desarrollo de API.

> Escalable y de Tiempo Ral /  Scalable & Real-time

Node Js, permite desarrollar aplicaciones escalables y de tiempo real.

> Escalable:

Su rendimiento se puede adaptar a medida que crece el uso de la aplicación y recibe más solicitudes.

> Tiempo Real:

Establece una conexión bidireccional y dinámica, entre el cliente e servidor. Analiza los eventos, y reacciona de manera inmediata.

## Ejecutar Código

Node.js para ejecutar los programas en el terminal. Para ello, usaremos el siguiente comando si el archivo a ejecutar es app.js.

> node app.js

## ¿Qué no es Node js?

> NodeJs no es:

Node Js no es, un lenguaje de programación. Es un entorno de ejecución  de Javascript. Tampoco un Framework o Librería (Biblioteca).
Ejecuta Javascript.

> Node Js

![nodeJs](https://static.platzi.com/media/user_upload/resumen-c7ceaedf-8a75-4dcd-94c4-764a75bea727.jpg)

## Arquitectura Cliente Servidor

> Cliente-Servidor / Server-Client

Modelo en el cual el servidor envía recursos al dispositivo que los solicita (cliente).

## Protocolo

> ¿ Qué es un Protocolo?

Reglas que permiten que dos entidades de una red se comuniquen.

> Protocolos HTTP & HTTPS

"HTTPS", es un protocolo más seguro e encriptado; a diferencia  de "HTTP".

> Mozilla (MDN)

- [MDN_HTTP](https://developer.mozilla.org/es/docs/Web/HTTP)

## Bases de Datos

> ¿Qué es una Base de Datos?

Conjunto de datos estructurados sobre un mismo contexto que se pueden consultar.

## Paginas Web Estáticas y Dinámicas

> Existen dos tipos: Estática y Dinámica
> Estática:

No necesita interacción con el usuario.

> Dinámica:

Sí tiene interacción con el usuario. Además, puede generar peticiones.

## API (Aplication Programming Interface)

> ¿Qué es una API?

Aplication Programming Interface (Interfaz de programación de aplicaciones).

- [MDN_API](https://developer.mozilla.org/es/docs/Mozilla/Add-ons/WebExtensions/API)
- [Referencia_API_Web](https://developer.mozilla.org/es/docs/Web/API)

> Rapid API Hub

- [RapidAPI](https://rapidapi.com/hub)

## Event Loop

> Event Loop

Event Queue: Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

Event Loop: Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

Thread Pool: Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.

![EventLoop](https://i.ibb.co/j42621b/event-loop.png)

## Variables de entorno en Node.js

Las variables de entorno son una forma de llamar información de afuera a nuestro software, sirve para definir parámetros sencillos de configuración de los programas de modo que puedan ejecutarse en diferentes ambiente sin necesidad de modificar el código fuente de un script.

```javascript
let name = process.env.NAME || "Not name";

console.log(`Hello, ${name}`);

```

> NAME="Chris"

En caso de querer tener variables de entorno en un archivo, puede utilizar dotenv

- [npm_dotenv](https://www.npmjs.com/package/dotenv)

```javascript
const config = {
  env: process.env.NODE_ENV || "Development",
  port: process.env.PORT || 8080,
  password: process.env.PASSWORD || "Unitedxoxoxoxo",
};
```

## Modules / Módulos

Funcionalidad Organizada en uno o varios archivos Javascript que puede ser reutilizada en unaaplicación.

> Ventajas:

- Evitar repetición del código.
- Reutilizar el código.
- Es más fácil encontrar y corregir un "bug"
- Es más fácil modificar el código.
- Es más fácil agregar nuevas funcionalidades.

> Require & Import / Export / .mjs & type=module.
> Javascript Modules

```javascript
const helloFriend = require("./modules/hello.js");

console.log(helloFriend);
console.log(helloFriend.hello("Luisa"));
console.log(helloFriend.myGame("Zelda"));

```

```javascript
const hello = (name) => {
  return `Hello, my friend ${name}`;
};

const myGame = (game) => {
  return `My favorite game is: ${game}`;
};

module.exports.hello = hello;
module.exports.myGame = myGame;

```

## Module / Módulo built-in (incorporados)

Muy útiles para realizar tareas comunes al trabajar con Node Js.

- HTTP
- HTTPS
- FS (file System) / Sistema de Archivos
- OS (Operating System) / Sistema Operativo
- Path (Routh) / Ubicación o ruta
- Console (consola)

## Module Console

```javascript
console.log: recibe cualquier tipo y lo muestra en el consola.
console.info: es equivalente a log pero es usado para informar.
console.error: es equivalente a log pero es usado para errores.
console.warn: es equivalente a log pero es usado para warning.
console.table: muestra una tabla a partir de un objeto.
console.count: inicia un contador autoincremental.
console.countReset: reinicia el contador a 0.
console.time: inicia un cronometro en ms.
console.timeEnd: Finaliza el cronometro.
console.group: permite agrupar errores mediante identación.
console.groupEnd: finaliza la agrupación.
console.clear: Limpia la consola.
```

## Module OS (Operating System)

> Os => Operating System (Sistema Operativo)

Contiene funcionalidad para obtener Información, sobre el sistema operativo; en el cual se ejecutará la aplicación.

```javascript
const os = require("os");
console.log(os.type());
console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
console.log(os.constants);
console.log(os.freemem());
function gb(bytes) {
  return mb(bytes) / SIZE;
}
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());
```

## Tools / Herramientas para Entorno de Desarrollo (Dev) y Producción

> Nodemon

- [nodemon](https://github.com/remy/nodemon#nodemon)

```javascript

// > Install Global
npm install -g nodemon

```

```javascript

// > Install Development Dependency
npm install --save-dev nodemon

//nodemon ./server.js localhost 8080

```

> PM2

- [PM2](https://pm2.keymetrics.io/)

## NPM Sharp

> Sharp npm & Work Node js Size

- [npm_sharp](https://www.npmjs.com/package/sharp);
- [DigitalL_Ocean_tutorial](https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp)

```javascript

async function resizeImage() {
  try {
    await sharp("./utiles/imageOne.jpg")
      .resize({
        width: 150,
        height: 100,
      })
      .toFile("./utiles/resizedPlus.jpg");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();

```

## Express Web Framework

> Express Js

- [expressjs](https://expressjs.com/es/)
- [MDN_expressjs](https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs)

> npm

```javascript
npm install express
```

```javascript
npm install express --save
```

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## Time

> Timer => setTimeout(), setInterval(), setImmediate()
> setTimeout()

Se ejecuta una una vez, cada tiempo estipulado.

```javascript
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* … ,*/ paramN)
```

> setInterval()

Para ejecutar código un número infinito de veces con retraso específico de milisegundos.

```javascript
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg0)
setInterval(func, delay, arg0, arg1)
setInterval(func, delay, arg0, arg1, /* … ,*/ argN)
```

```javascript
const intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

function myCallback(a, b)
{
 // Your code here
 // Parameters are purely optional.
 console.log(a);
 console.log(b);
}
```

> setImmediate()

se ejecuta después del código síncrono.

```javascript

setImmediate(func)
setImmediate(func, param0)
setImmediate(func, param0, param1)
setImmediate(func, param0, param1, /* … ,*/ paramN)

```

## NPM & NodeJs

> npm Create my first Package, in format JSON.

> npm init

> npm init --yes (default).

- [npm](https://www.npmjs.com/)

Es el archivo de software más grande del mundo que contiene paquetes que pueden instalar y usar con Node.js. También, una herramienta para la línea de comando.

> Paquete

Archivo o directorio descrito por un archivo package.json.

> Modulo / Module

Cualquier archivo o directorio en "node_modules", que puede ser importado por require().

> Dependencia

Paquete que otro paquete necesita para funcionar correctamente.

> Detalles "npm init"

"entry point" (punto de entrada). Archivo principal del paquete(se van a importar).
Investigar las diferentes tipos de licencia (MIT, isc...etc).

## npm and ¿JSON? Javascript Object Notation (Key - Value)

> JSON Documentation

- [JSON](https://www.json.org/json-es.html)

- {} (Objects / Objetos) or [] (Array / Arreglos).
- Los datos se representan como "pares": "clave - valor" (propiedades).
- Formato (texto) basado en la sintaxis de Javascrpt. Almacena y transporta información.
- "JSON" está  basado en la notación de objetos de Javascript pero es solo text.Nos permite almacenar "objetos" de javascript como texto (cliente & servidor).
- Es independiente del lenguaje de programación con el cual estás trabajando.
- Pares deben estar separados por ","

> Pueden Contener

- Objetos (objects "{}")
- Cadena de caracteres("Key-Value").
- números (numbers).
- Arreglos (arrays "[]").
- Valores Booleanos (true or false).

> Image (EDTeam)

![](https://static.platzi.com/media/user_upload/Captura-d1ad3ce0-efd6-4422-b8c2-9d43ff61109d.jpg)

## CDN(Red de Distribución de Contenido)

> CDN

- [CDN](https://cdnjs.com/)

## Async & Await and Promises

> Promise

```javascript

const promiseComplete = true;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promiseComplete) {
      resolve("Good!");
    } else {
      reject("Sorry");
    }
  }, 2000);
});

const resolvePromises = (result) => {
  console.log(result);
};

const rejectPromises = (error) => {
  console.log(error);
};

myPromise.then(resolvePromises).catch(rejectPromises);

```

> Async & Await

```javascript

const productOrder = (product) => {
  return new Promise((resolve, reject) => {
    console.log(`Order a new ${product} and enjoy`);
    setTimeout(() => {
      if (product === `PlayStation`) {
        resolve(`This is a new Product! It is Awesome!`);
      }
      if (product !== `PlayStation`) {
        reject(`Very sorry!! We have not more PlayStation`);
      }
    }, 1000);
  });
};

const newProduct = async (productTwo) => {
  setTimeout(() => {
    console.log(`I pay a new ${productTwo} and is beautiful`);
  }, 2000);
};

//*? >> === === Async and Await === === << */
const asyncProduct = async () => {
  try {
    const payProduct = await productOrder("PlayStation");
    const newProductTwo = await newProduct(`IphonePro`);
    console.log({ payProduct });
  } catch (error) {
    console.log(error);
  }
};
asyncProduct();

```

## Model Client & Server

> HTTP & HTTPS (Hypertext Transfer Protocol)

Protocolo de Transferencia de Hipertexto.

Modelo que usamos para acceder a Internet y obtener recursos e información.

> El protocolo HTTP, define el formato de los mensajes (request).

Un protocolo, es un conjunto de reglas que permiten transmitir información entre dispositivos de una red.

> Client (Cliente)

El Navegador desde el cual se realizan solicitudes a un servidor.

> Server (Servidor)

Programa que se ejecuta en un servidor físico para ofrecer un servicio al cliente. Envía información.

El servidor conoce el formato esperado del mensaje que envía el cliente.Además, el cliente, conoce el formato esperado del mensaje que recibe del servidor.

> Solicitud (Request) HTTP

- Métodos HTTP
- Caminos (Path)
- Versiones HTTP
- Cabeceras (Headers)
- Curpo (body)

> Headers (Cabeceras)

Proveen información adicional sobre la solicitud.

> Body (Cuerpo)

Contiene la información que debe ser enviada al servidor para procesar la solicitud. Formato JSON. No se incluye en todas las solicitudes (requieren enviar información como: POST y PUT).

> HTTPS

Le agrega una capa extra de seguridad.

> Método (Method) HTTP

Verbo ("verbos HTTP") o solicitud que indica la intención de la solicitud.

- GET (para Solicitar un recurso específico).
- POST (Para Crear un recurso específico. Agregar ususarios nuevos a una base de datos).
- PUT (Para Modificar un recurso específico. Hacer un cambio en una base de datos.)
- DELETE (Para  Eliminar un recurso específico).

> Respuesta (Response) HTTP

- Código de estado.
- Texto de Estado.
- Versiones HTTP.
- Cabeceras (Headers).
- Cuerpo (Body).

> Código de Estado HTTP

- [HTTP State](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

Números que indican si se han completado exitosamente o no, las solicitudes HTTP.

- Respuestas informativas (100–199),
- Respuestas satisfactorias (200–299),
- Redirecciones (300–399),
- Errores de los clientes (400–499),
- Errores de los servidores (500–599).

> Más comunes

- 200 OK: La respuesta fue exitosa.
- 400 Bad Request: El servidor no pudo interpretar la solicitud.
- 404 Not Found: El mservidor no pudo encontrar el recurso solicitado.
- 500 Internal Server Error: El servidor encontró una situación que no sabe cómo manejar.

![](https://camo.githubusercontent.com/0294f63543e7574885567ce08f9cea150b0972e0dbfa682d5e0b07e2423b3e62/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f464452304f4d6d57514141486364573f666f726d61743d6a7067266e616d653d343039367834303936)

## Express Js

> Node Js & ExpressJs

Podemos especificar el código de estado de la respuesta HTTP, ennuestro servidor.

- [express](https://expressjs.com/es/)

> Puerto(Port)

Ubicación virtual del sistema operativo en la cual se puede acceder a una aplicación o a un proceso en específico que se esté ejecutando en ese puerto.

> Express Server

```javascript
const express = require(`express`);

const app = express();

app.get(`/`, (res, req) => {
  res.send("Hello World");
});

app.listen(3000);
console.log("Server Is running on port 3000");
```

> HTTP Server

```javascript
const http = require(`http`);
//*! === === Port */
const PORT = 3000;
//*! === === Create Server */
const server = http.createServer((req, res) => {
  res.end(`Hello, World!!`);
});
//*! === === Call Port */
server.listen(PORT, () => {
  console.log(`Listen on port http://localhost:${PORT}`);
});

```

> run server: "npm run scripts"

## Estructura de una URL

> Estructura de una URL (Uniform Resource Locator / Localizador Uniforme de Recursos)

- [MDN_URL](https://developer.mozilla.org/es/docs/Learn/Common_questions/What_is_a_URL);

Dirección de un recurso en la Web.

- [blog](https://superadmin.es/blog/que-es/direccion-web-url/#:~:text=El%20formato%20de%20una%20URL,para%20escribir%20una%20direcci%C3%B3n%20conocida.)

![](https://superadmin.es/blog/img/posts/estructura-url.png)

> Protocolo

HTTP / HTTPS

> Subdominio

Información adicional agregada al inicio del dominio de una página web. Permite organizar y separar la información para distintos propósitos.

> Dominio

Nombre del sitio.Referencia única a un sitio web en internet.

> Dominio de nivel superio (TLD:Top Level Domain)

.org,.mx,.dev,.com,.net,.edu...

> PATH (Camino)

Raíz de nuestro sitio Web (Página Principal). Archivo o directorio en el servidor web.
Puede tener parámetros para personalizarlo. Estos parámetros son parte de la URL.

> Endpoint / id(Identificador único de Usuario)

Son parte del "PATH". Tienen un "slash".
/endpoints
/endpoints/14(id)

> Parámetros Query o Query String

Query (Consulta) (<http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads>])
Son parámetros usados para obtener contenido dinámico. Por ejemplo, filtrar una lista de recursos.

> ? (Cerrar la pregunta)

```javascript

?q(clave o key)=cursos+de+node(Valor)
?q=cursos+de+node
<http://ejemplo.org/search?categoria=programacion>

```

> Varios Parámetros Query (Cada par, tendrá su Clave y Valor)

Separar con un "&".Usamos parámetros query para filtrar solicitudes "GET" (para obtener recursos en específico).

```javascript
?q=cursos+de+node&sourceid=chrome&ie=UTF-8
```

> Module URL (Example URL)

```javascript
const miURL = new URL(
  `https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1`
);
console.log(miURL.hostname); // www.ejemplo.org
console.log(miURL.pathname); // cursos/programacion
console.log(miURL.searchParams); // Object => Key & Valu
console.log(typeof miURL.searchParams); // Object
console.log(miURL.searchParams.get(`ordenar`));
console.log(miURL.searchParams.get(`nivel`));

```

## Routing en Node.js

> Routing (para servidores)

Manejar las solicitudes del cliente en base a ciertos criterios (método y camino).

> Route == Ruta (Method & Path)

El método (method = "GET", "POST", "PUT", "DELETE", Otros...) de la solicitud HTTP. De esta forma el servidor sabe qué tipo de operación se realizará.

El camino (Path) de la solicitud HTTP. De esta forma el servidor sabe el recurso específico que se usará, o se va a modificar o eliminar.

Method (Método)(¿Qué?) + Path (camino)(¿Dónde?) + Cómo Manejarlo(¿Cómo?)

## MIT License

MIT License

Copyright (c) 2022 Chris_Velázquez04

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
