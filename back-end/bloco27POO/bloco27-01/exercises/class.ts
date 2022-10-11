// 1 - Crie uma classe chamada Tv, com os atributos:
// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.

class Tv {
  private brand: string;
  private size: string;
  private resolution: string;
  private _connections: string[];
  private _connectedTo: string;
  constructor(brand: string, size: string, resolution: string, connections: string[], connectedTo: string) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this._connections = connections;
    this._connectedTo = connectedTo;
  };

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
    } else {
      console.log('Sorry, connection unavailable');
    }
  }

  // Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
  turnOn = () => {
    console.log(` TV - DATA:
    ${this.brand},
    ${this.size},
    ${this.resolution},
    ${this._connections},
    ${this._connectedTo}.
    `)
  };
};

// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
const tvSmsg = new Tv('Samsung', '48"', '1980x1080', ['HDMI', 'Cable', 'Ethernet'], 'Cable');

tvSmsg.turnOn();

console.log(tvSmsg.connectedTo);
tvSmsg.connectedTo = 'HDMI';
console.log(tvSmsg.connectedTo);