var Estudante = /** @class */ (function () {
    function Estudante(matricula, nome, p1, p2, p3, p4, t1, t2) {
        this.matricula = matricula;
        this.nome = nome;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
        this.t1 = t1;
        this.t2 = t2;
    }
    Estudante.prototype.soma = function () {
        console.log("A soma das notas das provas \u00E9 de: ".concat(this.p1 + this.p2 + this.p3 + this.p4));
        console.log("A soma das notas dos trabalhos \u00E9 de: ".concat(this.t1 + this.t2));
    };
    Estudante.prototype.media = function () {
        console.log("A m\u00E9dia das notas das provas \u00E9 de: ".concat((this.p1 + this.p2 + this.p3 + this.p4) / 4));
        console.log("A m\u00E9dia das notas dos trabalhos \u00E9 de: ".concat((this.t1 + this.t2) / 2));
    };
    return Estudante;
}());
;
var lucas = new Estudante('123', 'lucas', 5, 5, 5, 5, 10, 10);
lucas.soma();
lucas.media();
