let qtd_abates: number = 0;
let qtd_assistencias: number = 0;
let qtd_mortes: number = 0;


 qtd_mortes =Number(prompt("numero de mortes"));
qtd_assistencias =Number(prompt("numero de assistencias"));
qtd_abates =Number(prompt("numero de abates"));


let KDA = (qtd_abates+ qtd_assistencias)/qtd_mortes;

console.log("KDA");
