// HTML WEB Storage - Esta ferramenta, por sua vez, provê dois objetos para armazenamento de dados no cliente ( browser da pessoa), no formato de chave-valor de um modo mais intuitivo do que nos Cookies :

// localStorage: salva os dados sem data de expiração. Os dados não serão removidos quando o browser for fechado, ou seja, eles ficarão disponíveis enquanto não forem explicitamente removidos.

/*
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
localStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(localStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(localStorage.length); // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(localStorage.length); // possui uma entrada, então o retorno é o valor: 1
localStorage.clear(); // limpa todas as entradas salvas em localStorage
console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0
*/

// sessionStorage: alva os dados apenas para a sessão atual. Os dados são removidos assim que a pessoa fecha a aba ( tab ) ou o navegador ( browser ).

/*
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem('firstname', 'Adam'); // salva uma entrada com a key = 'firstname' e value = 'Adam'
sessionStorage.setItem('lastname', 'Smith'); // salva uma entrada com a key = 'lastname' e value = 'Smith'
console.log(sessionStorage.getItem('lastname')); // retorna o valor 'Smith'
console.log(sessionStorage.length); // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(sessionStorage.length); // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear(); // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
*/

// Tanto o localStorage quanto o sessionStorage , armazenam dados no formato chave e valor e os valores salvos serão sempre no formato string.
// Existem duas funções que irão nos ajudar a armazenar qualquer tipo de dado: uma vai transformar o dado em uma string JSON.stringify() e a outra vai transformar o dado de volta para o formato original JSON.parse().

// Exemplo 1:
const myObj = {
    name: 'Link',
    age: 20,
};
// Precisamos transformar este objeto em uma string. Para isso, utilizamos a função `JSON.stringify()`.
localStorage.setItem("myData", JSON.stringify(myObj));
// Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o nome da chave, passamos `myData` e como segundo parâmetro, a função `JSON.stringify()` com o objeto-valor que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.
console.log(localStorage);
// Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.
const recoveredData = JSON.parse(localStorage.getItem("myData"));
// Utilizamos a função `JSON.parse()` para transformar a string que está armazenada no `localStorage` de volta para seu formato original, um objeto.
console.log(recoveredData);

// Exemplo 2:
let organization = {
    name: 'trybe',
    since: 2019,
};

// A variável 'storage' pode ser localStorage ou sessionStorage
let storage = localStorage;
storage.setItem("trybe", JSON.stringify(organization));
let org = JSON.parse(localStorage.getItem("trybe"));
console.log(org);

let classes = ['2019/set', '2019/oct'];
storage.setItem("classes", JSON.stringify(classes));
let cls = JSON.parse(storage.getItem("classes"));
console.log(cls);
localStorage.clear();

// Ou seja, quando usar o localStorage e quando utilizar o sessionStorage:
// Depende muito de qual problema estamos resolvendo;
// Se quisermos salvar alguma informação de preferências do usuário(ex: darkMode: true ou false), ou a partir do login precisamos salvar o nome da pessoa - Faz mais sentido o localStorage nestas ocasiões, pois dessa forma na próxima vez que ela entrar fica salvo.

// Resumo das funções(parâmetros):
/**
 * localStorage.setItem("chave", "valor");
 * localStorage.getItem("chave");
 * localStorage.removeItem("chave");
 * localStorage.clear(); - Exemplo: - logout -
 * sessionStorage possui as mesmas funções acima;
 */

// localStorage e sessionStorage são mais simples que Cookies, mas não quer dizer que estes são dispensáveis.
// Geralmente, utilizamos cookies quando precisamos dos dados no cliente ( browser ) e no servidor, pois os Cookies são enviados para o servidor a cada requisição. Caso contrário, utilizamos localStorage e sessionStorage.
// Um bom ponto de atenção para decidir quando você deve usar um ou outro é perguntar a si mesmo sobre a importância da permanência da informação que você vai armazenar.