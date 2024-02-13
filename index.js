let nVitorias = 0;
let nDerrotas = 0;

function lvRank(nVitorias, nDerrotas) {
    return nVitorias - nDerrotas;
}

nDerrotas = 25
nVitorias = 100


let nivel = lvRank(100, 25);

if (nivel <= 10) {
    nivel = "Ferro";
} else if (nivel >= 11 && nivel <= 20) {
    nivel = "Bronze";
} else if (nivel >= 21 && nivel <= 50) {
    nivel = "Prata";
} else if (nivel >= 51 && nivel <= 80) {
    nivel = "Ouro";
} else if (nivel >= 81 && nivel <= 90) {
    nivel = "Diamante";
} else if (nivel >= 91 && nivel <= 100) {
    nivel = "Lendário";
} else if (nivel >= 101) {
    nivel = "Imortal";
}

console.log("O Herói tem um saldo de " + nVitorias + " vitórias e está no nível de " + nivel);
