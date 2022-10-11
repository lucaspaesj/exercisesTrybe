class Estudante {
  matricula: string;
  nome: string;
  p1: number;
  p2: number;
  p3: number;
  p4: number;
  t1: number;
  t2: number;
  constructor(matricula: string, nome: string, p1: number, p2: number, p3: number, p4: number, t1: number, t2: number) {
    this.matricula = matricula;
    this.nome = nome;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
    this.t1 = t1;
    this.t2 = t2;
  }
  soma() {
    console.log(`A soma das notas das provas é de: ${this.p1 + this.p2 + this.p3 + this.p4}`);
    console.log(`A soma das notas dos trabalhos é de: ${this.t1 + this.t2}`);
  }
  media() {
    console.log(`A média das notas das provas é de: ${(this.p1 + this.p2 + this.p3 + this.p4) / 4}`);
    console.log(`A média das notas dos trabalhos é de: ${(this.t1 + this.t2) / 2}`);
  }
};

const lucas = new Estudante('123', 'lucas', 5, 5, 5, 5, 10, 10);

lucas.soma();
lucas.media();
