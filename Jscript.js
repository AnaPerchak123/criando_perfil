alert("Olá Seja Muito Bem vindo!");
let p1 = prompt ("Digite seu nome...");

let p2 = prompt ("Digite um Poder que gostaria ter...");

let p3 = prompt ("Digite o nome de um Vilao...");

let p4 = prompt ("Digite o nome de um lugar que gostaria de estar...");

let msg = document.getElementById('msg');

msg.innerHTML =`<p>Olá ${p1} o seu poder é a/o ${p2} você vai enfrentar o/a ${p3} no/em ${p4}`
