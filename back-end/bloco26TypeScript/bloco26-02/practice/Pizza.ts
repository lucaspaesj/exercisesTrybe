// 3 - Crie uma interface que represente uma pizza.
type PossibleSlices = 4 | 6 | 8;

class Pizza {
  flavor: string;
  slices: PossibleSlices;
  constructor(flavor: string, slices: PossibleSlices) {
    this.flavor = flavor;
    this.slices = slices;
  }
}

const calabresa = new Pizza('calabresa', 8);
const marguerita = new Pizza('marguerita', 6);
const nutela = new Pizza('nutela', 4);

// 4 - Vamos agora estender nossa interface Pizza com novos tipos de pizza. São eles:

type CommonFlavours = 'Calabresa' | 'Frango' | 'Pepperoni';

type VegetarianFlavours = 'Marguerita' | 'Palmito' | 'Cogumelo';

type SweetFlavours = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

class CommonPizza {
  flavor: CommonFlavours;
  slices: PossibleSlices;
  constructor(flavor: CommonFlavours, slices: PossibleSlices) {
    this.flavor = flavor;
    this.slices = slices;
  }
}

const pizza1 = new CommonPizza('Calabresa', 6);
const pizza2 = new CommonPizza('Frango', 6);
const pizza3 = new CommonPizza('Frango', 4);

class VegetarianPizza {
  flavor: VegetarianFlavours;
  slices: PossibleSlices;
  constructor(flavor: VegetarianFlavours, slices: PossibleSlices) {
    this.flavor = flavor;
    this.slices = slices;
  }
}

const pizza4 = new VegetarianPizza('Marguerita', 4);
const pizza5 = new VegetarianPizza('Palmito', 6);

class SweetPizza {
  flavor: SweetFlavours;
  slices: 4;
  constructor(flavor: SweetFlavours, slices: 4) {
    this.flavor = flavor;
    this.slices = slices;
  }
}

const pizza6 = new SweetPizza('Nutela', 4);
