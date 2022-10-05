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
