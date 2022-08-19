const calc = (n1, n2) => {
  const promise = new Promise((resolve, reject) => {
    if (n2 === 0) reject(new Error('Não da pra dividir por 0!'));

    const result = n1 / n2;

    resolve(result);
  })

  return promise;
}

// calc(2, 0)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error.message));

// async await
const doSomething = async () => {
  console.log(await calc(2,2));
}

// doSomething();

// ex - assíncrono
const promiseParaFazerAlgumaCoisa = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Eu fiz alguma coisa'), 2000)
  })
}

const assistirAlguemFazendoAlgumaCoisa = async () => {
  const something = await promiseParaFazerAlgumaCoisa()
  return something + '\n e Eu vi você fazendo'
}

const AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa = async () => {
  const something = await assistirAlguemFazendoAlgumaCoisa()
  return something + '\n e Eu também vi você vendo ele fazendo'
}

AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa().then(res => {
  console.log(res)
})