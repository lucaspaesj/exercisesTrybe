const jsonInfo = `{
    "muitasEmpresasUsam": [
      "Google",
      "Twitter",
      "Facebook",
      "etc..."
    ],
    "temVariasVantagens": [
      "Legível",
      "Fácil de usar",
      "Leve",
      "Popular",
      "Versátil"
    ],
    "muitasLinguagensDaoSuporte": [
      "Python",
      "C",
      "C++",
      "Java",
      "PHP"
    ]
  }`;

const usoJSONPorque = JSON.parse(jsonInfo);

const corporationsList = document.getElementById('corporations-used-by');
const advantagesList = document.getElementById('advantages');
const languagesList = document.getElementById('languages-used-by');

usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
    const newLi = document.createElement('li');
    newLi.innerText = empresa;
    corporationsList.appendChild(newLi);
});

usoJSONPorque.temVariasVantagens.map((vantagens) => {
    const newLi = document.createElement('li');
    newLi.innerText = vantagens;
    advantagesList.appendChild(newLi);
});

usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
    const newLi = document.createElement('li');
    newLi.innerText = linguagens;
    languagesList.appendChild(newLi);
});

// Como utilizar APIs na minha aplicação

// APIs podem incrementar as funcionalidades da sua aplicação e colocá-la em um outro patamar. Você pode adicionar mapas, receber dados sobre o tempo e outras informações úteis.
// Encontre uma API pública, que seja bem documentada e mantida;
// Leia a documentação para ter certeza de que aquela API resolve o problema que você deseja solucionar;
// Entenda o formato dos dados disponíveis;
// Faça requests e receba responses da API com os dados que você deseja receber.

// Fazendo uma requisição a uma API
// Você pode fazer requisições a uma API de várias formas. Uma delas é no terminal.
// No exemplo a seguir, vamos fazer um request para uma API , que retorna um JSON como response .
// wget 'https://pokeapi.co/api/v2/pokemon/ditto' -O - -q