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
