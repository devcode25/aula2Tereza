const input = require("readline-sync");

console.log("== Olá! Seja bem vind@. ==");
const idade = input.question("Qual sua idade?");

if (idade >=18 && idade <21) {
    console.log("Ok! Vc entra, mas não vai beber hein.")
} else if (idade >=21) {
    console.log("Blz! Pode entrar e pode beber, com moderação.")
} else {
    console.log("Idade não permitida!")
};