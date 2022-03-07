// Conteúdo vídeo
// if - condição de se
// else - condição de senão

/* if (condicao) {
    código
} else if (outra condicao) {
    outro codigo
} else if (outra condicao) {
    outro codigo
} else {
    codigo caso nenhuma condicao ocorra
}
*/

let trybe = 19.40;

// if (trybe >= 14 && trybe < 14.40) {
//     console.log("Esquenta")
// }
// else if (trybe >= 16.30 && trybe < 17.50) {
//     console.log("Aula ao vivo")
// }
// else if (trybe >= 19.40 && trybe < 20) {
//     console.log("Fechamento")
// }
// else {
//     console.log("Fora dos momentos síncronos")
// }

// Exercício:

const notaDesafio = 40;

if (notaDesafio >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
} 
else if (notaDesafio < 80 && notaDesafio >= 60) {
    console.log("Você está na nossa lista de espera")
}
else {
    console.log("Você foi reprovada(o)")
}