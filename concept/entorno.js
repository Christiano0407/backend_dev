let name = process.env.NAME || "Not name";

console.log(`Hello, ${name}`);

let web = process.env.MI_WEB || "Not Web";

console.log(`Hello, my web is: ${web}`);

// ===
const config = {
  env: process.env.NODE_ENV || "Development",
  port: process.env.PORT || 8080,
  password: process.env.PASSWORD || "Unitedxoxoxoxo",
};
console.log(config);
