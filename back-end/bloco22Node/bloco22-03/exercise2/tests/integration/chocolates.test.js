const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ]
});

describe('Usando o método GET em /chocolates', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });
  it('Retorna a lista completa de chocolates!', async function () {
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];

    const response = await chai
      .request(app)
      .get('/chocolates');
    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal(output);
  });
});

describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
  it('Retorna o chocolate Mounds', async function () {
    const response = await chai
      .request(app)
      .get('/chocolates/4');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal([
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      }]);
  });
  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        }]);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });
});

describe('Usando o método GET em /chocolates/total', () => {
  it('Testa o retorno de todos os chocolates', async () => {
    const response = await chai
      .request(app)
      .get('/chocolates/total');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({
      totalChocolates: 4
    });
  });
  it('Testa o retorno da pesquisa de chocolates bem sucedida', async () => {
    const response = await chai
      .request(app)
      .get('/chocolates/search?name=Mo');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([
      {
        "id": 3,
        "name": "Mon Chéri",
        "brandId": 2
      },
      {
        "id": 4,
        "name": "Mounds",
        "brandId": 3
      }
    ]);
  });
  it('Testa o retorno da pesquisa de chocolates sem resultados', async () => {
    const response = await chai
      .request(app)
      .get('/chocolates/search?name=poewijfoiewj');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal([]);
  })
});

describe('Testando o método PUT', () => {
  it('Testa a atualização de um chocolate', async () => {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
    const mockFileWrite = [
      { id: 1, name: 'Mint Pretty Good', brandId: 2 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];
    sinon.stub(fs.promises, 'writeFile').resolves(mockFileWrite);
    const response = await chai
      .request(app)
      .put('/chocolates/1')
      .send({
        "name": "Mint Pretty Good",
        "brandId": 2
      });

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([
      {
        "chocolate": { 
          "id": "1",
          "name": "Mint Pretty Good",
          "brandId": 2
        }
      }
    ]);
  });
});