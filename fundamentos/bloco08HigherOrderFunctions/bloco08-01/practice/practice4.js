// Parte 1:
const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDmgPerTurn = () => {
    return Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);
}

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDmgPerTurn = () => {
    return Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1) + warrior.strength);
}

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDmgManaPerTurn = () => {
    const statsMage = {
        dmg: 0,
        spendedMana: 0,
    };
    const aleatoryDmg = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1) + mage.intelligence);
    mage.mana < 15 ? statsMage.dmg = `Não possui mana suficiente` : statsMage.dmg = aleatoryDmg;
    mage.mana < 15 ? statsMage.spendedMana = 0 : statsMage.spendedMana = 15;
    return statsMage;
}

// Parte 2:
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:

const killIfNeededBattleMember = () => {
    if(mage.healthPoints <= 0){
        battleMembers.mage = "Is dead, sorry for the loss!";
    }
    if(warrior.healthPoints <= 0){
        battleMembers.warrior = "Is dead, sorry for the loss!";
    }
    if(dragon.healthPoints <= 0){
        battleMembers.dragon = "Is dead, FINALLY!";
    }
}

const gameActions = {
    // Crie as HOFs neste objeto.
    // 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
    warriorTurn: (callback) => {
        const warrDmg = callback();
        dragon.healthPoints -= warrDmg;
        warrior.damage = warrDmg;
    },
    // 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
    mageTurn: (callback) => {
        const mageDmg = Object.values(callback())[0];
        const mageMana = Object.values(callback())[1];
        dragon.healthPoints -= mageDmg;
        mage.damage = mageDmg;
        mage.mana -= mageMana;
    },
    // 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
    dragonTurn: (callback) => {
        const dragonDmg = callback();
        mage.healthPoints -= dragonDmg;
        warrior.healthPoints -= dragonDmg;
        dragon.damage = dragonDmg;
    },
    // 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
    currentBattleMembers: (obj, callback) => {
        callback();
        if(obj.dragon === "Is dead, FINALLY!"){
            obj.result = `Os mocinhos venceram!!!!`
            return obj;
        } else if(obj.mage === "Is dead, sorry for the loss!" && obj.warrior === "Is dead, sorry for the loss!"){
            obj.result = `O dragão venceu!!!! :(`
            return obj;
        }
        return obj;
    },
};

gameActions.warriorTurn(warriorDmgPerTurn);
gameActions.mageTurn(mageDmgManaPerTurn);
gameActions.dragonTurn(dragonDmgPerTurn);
console.log(gameActions.currentBattleMembers(battleMembers, killIfNeededBattleMember))
gameActions.warriorTurn(warriorDmgPerTurn);
gameActions.mageTurn(mageDmgManaPerTurn);
gameActions.dragonTurn(dragonDmgPerTurn);
console.log(gameActions.currentBattleMembers(battleMembers, killIfNeededBattleMember))
gameActions.warriorTurn(warriorDmgPerTurn);
gameActions.mageTurn(mageDmgManaPerTurn);
gameActions.dragonTurn(dragonDmgPerTurn);
console.log(gameActions.currentBattleMembers(battleMembers, killIfNeededBattleMember))
gameActions.warriorTurn(warriorDmgPerTurn);
gameActions.mageTurn(mageDmgManaPerTurn);
gameActions.dragonTurn(dragonDmgPerTurn);
console.log(gameActions.currentBattleMembers(battleMembers, killIfNeededBattleMember))

