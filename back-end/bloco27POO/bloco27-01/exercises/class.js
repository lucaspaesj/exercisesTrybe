// 1 - Crie uma classe chamada Tv, com os atributos:
// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connections, connectedTo) {
        var _this = this;
        // Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
        this.turnOn = function () {
            console.log(" TV - DATA:\n    ".concat(_this.brand, ",\n    ").concat(_this.size, ",\n    ").concat(_this.resolution, ",\n    ").concat(_this._connections, ",\n    ").concat(_this._connectedTo, ".\n    "));
        };
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this._connections = connections;
        this._connectedTo = connectedTo;
    }
    ;
    Object.defineProperty(Tv.prototype, "connectedTo", {
        get: function () {
            return this._connectedTo;
        },
        set: function (value) {
            if (this._connections.includes(value)) {
                this._connectedTo = value;
            }
            else {
                console.log('Sorry, connection unavailable');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Tv;
}());
;
// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
var tvSmsg = new Tv('Samsung', '48"', '1980x1080', ['HDMI', 'Cable', 'Ethernet'], 'Cable');
tvSmsg.turnOn();
console.log(tvSmsg.connectedTo);
tvSmsg.connectedTo = 'HDMI';
console.log(tvSmsg.connectedTo);
