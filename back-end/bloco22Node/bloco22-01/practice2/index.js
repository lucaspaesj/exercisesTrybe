const fs = require('fs');
const simpsons = require('./simpsons.js');

// 1- const readCharacters = (chs) => {
//   chs.forEach(({ id, name }) => console.log(`${id} - ${name}`));
// }

// readCharacters(simpsons);

// 2- const promiseCh = (id) => {
//   const ch = new Promise((resolve, reject) => {
//     try {
//       const response = simpsons.find((ch) => parseInt(ch.id) === id);
//       resolve(response);
//     } catch (error) {
//       reject('id não encontrado');
//     }
//   })

//   return ch;
// }

// const getCharacter = async (id) => {
//   const response = await promiseCh(id);
//   if (!response.ok) {
//     console.log('deu ruim');
//   }
//   else {
//     return console.log(`${response.id} - ${response.name}`);
//   }
// }

// getCharacter(5);

// 3- const removeCh = async (id1, id2) => {
//   const newArr = simpsons.filter((ch) => parseInt(ch.id) !== id1);
//   const newestArr = newArr.filter((ch) => parseInt(ch.id) !== id2);
//   console.log(newestArr);
//   try {
//     fs.writeFile('./simpsons.js', `${JSON.stringify(newestArr)}`, function(err, _result) {
//       if(err) console.log('error', err);
//     });
//     console.log('Arquivo escrito com sucesso!');
//   } catch (error) {
//     console.error(`Erro ao escrever o arquivo: ${error.message}`);
//   }
// }

// removeCh(10, 6);

// 4- const nomeDoArquivo = 'simpsons.js';

// const read = () => {
//   try {
//     const data = fs.readFileSync(nomeDoArquivo, 'utf8');
//     console.log(data);
//     const arr = simpsons.filter((ch) => parseInt(ch.id) >= 1 && parseInt(ch.id) <= 4);
//     fs.writeFile('./simpsonFamily.json', JSON.stringify(arr), function (err, _result) {
//       if (err) console.log('error', err);
//     })
//     console.log('gravado');
//   } catch (err) {
//     console.error(`Erro ao ler o arquivo: ${err.path}`);
//     console.log(err);
//   }
// }

// read();

// 5- const att = async () => {
//   let newArr = [...simpsons];
//   newArr.push({id: parseInt(simpsons[simpsons.length - 1].id) + 1, name: 'Nelson Muntz'});
//   try {
//     fs.writeFile('./simpsons.js', `const simpsons = ${JSON.stringify(newArr)}; module.exports = simpsons;`, function (err, _result) {
//       if (err) console.log('error', err);
//     });
//     console.log('Arquivo mudado com sucesso!');
//   } catch (error) {
//     console.error(`Erro ao mudar o arquivo: ${error.message}`);
//   }
// }

// att();

const change = () => {
  const newArr = [...simpsons];
  const newest = newArr.map(ch => {
    if (ch.name === 'Nelson Muntz') {
      return {...ch, name: 'Maggie Simpson'};
    }
  });
  try {
    fs.writeFile('./simpsons.js', `const simpsons = ${JSON.stringify(newest)}; module.exports = simpsons;`, function (err, _result) {
      if (err) console.log('error', err);
    });
    console.log('Arquivo mudado com sucesso!');
  } catch (error) {
    console.error(`Erro ao mudar o arquivo: ${error.message}`);
  }
}

change();