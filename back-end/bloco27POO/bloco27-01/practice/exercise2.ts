class Cliente {
  private _nome: string;
  constructor(nome: string) {
    this._nome = nome;
  }
  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._nome = value;
  }
}

class Item {
  private _nome: string;
  private _preco: number;
  constructor(nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }
  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._nome = value;
  }

  get preco(): number {
    return this._preco;
  }

  set preco(value: number) {
    if (value < 0) throw new Error('O preço deve ser positivo.');

    this._preco = value;
  }
}

class Pedido {
  private _cliente: Cliente;
  private _itens: Item[] = [];
  private _pagamento: string;
  private _desconto: number = 0;
  constructor(cliente: Cliente, itens: Item[], pagamento: string, desconto: number) {
    this._cliente = cliente;
    this._itens = itens;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }
  get cliente(): Cliente {
    return this._cliente;
  }

  set cliente(value: Cliente) {
    this._cliente = value;
  }

  get itens(): Item[] {
    return this._itens;
  }

  set itens(value: Item[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._itens = value;
  }

  get pagamento(): string {
    return this._pagamento;
  }

  set pagamento(value: string) {
    this._pagamento = value;
  }

  get desconto(): number {
    return this._desconto;
  }

  set desconto(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._desconto = value;
  }
}