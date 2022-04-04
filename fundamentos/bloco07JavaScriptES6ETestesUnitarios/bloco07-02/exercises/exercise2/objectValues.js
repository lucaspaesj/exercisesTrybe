const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};

// for(let value in coolestTvShow){
//     console.log(coolestTvShow[value]);
// }

// Podemos então refatorar para utilizar o Object.values , nosso código ficaria assim:

console.log(Object.values(coolestTvShow));

// Para fixar melhor veja abaixo mais um exemplo, em que foram implementadas, de formas diferentes, duas funções que retornam a mesma lista de valores. Veja como fica muito mais fácil obter os valores de um objeto com o uso do Object.values .

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for (skill in student) {
        skills.push(student[skill]);
    }

    return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));