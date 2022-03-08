// 6-

const pecaDeXadrez = "Cavaleiro";

let pecaLowerCase = pecaDeXadrez.toLowerCase();

switch(pecaLowerCase) {
    case "peão":
        console.log(`O(a) ${pecaLowerCase} sempre anda uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro, qual seja diagonalmente. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes à sua.`);
        break;
    case "torre":
        console.log(`A ${pecaLowerCase} se movimenta verticalmente e horizontalmente, quantas casas desejar.`);
        break;
    case "cavalo":
        console.log(`O ${pecaLowerCase} é a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.`);
        break;
    case "bispo":
        console.log(`O ${pecaLowerCase} se movimenta na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.`);
        break;
    case "rainha":
        console.log(`A ${pecaLowerCase} se movimenta para frente ou para trás, para direita ou para esquerda, ou na diagonal, quantas casas quiser.`);
        break;
    case "rei":
        console.log(`O ${pecaLowerCase} se movimenta apenas 1 casa em qualquer direção. O Rei nunca pode se movimentar para uma casa que esteja sob ataque ou capturar uma peça que esteja defendida por uma peça adversária.`);
        break;
    default:
        console.log("Erro! Peça inexistente");
}