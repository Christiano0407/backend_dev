# backend_dev

Projects using Backend with Node js and Javascript. Practice and Courses With Node Js.

## FreeCodeCamp & Platzi

Si deseas ver el curso en nuestro canal de YouTube, haz clic en este enlace:

- [FreeCodeCamp_Spanish](https://www.youtube.com/watch?v=1hpc70_OoAg&t=4435s)

- [Platzi](https://platzi.com/home)

## Ejecutar Código

Node.js para ejecutar los programas en el terminal. Para ello, usaremos el siguiente comando si el archivo a ejecutar es app.js.

> node app.js

## Node js no es

Node Js no es, un lenguaje de programación. Es un entorno de ejecución  de Javascript. Tampoco un Framework o Librería (Biblioteca).
Ejecuta Javascript.

> Node Js

![nodeJs](https://static.platzi.com/media/user_upload/resumen-c7ceaedf-8a75-4dcd-94c4-764a75bea727.jpg)

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

## Modules

> Require & Import / Export

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

## Module OS

> Os => Operating System (Sistema Operativo)

Contiene funcionalidad para obtener Información, sobre el sistema operativo; en el cual se ejecutará la aplicación.

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
