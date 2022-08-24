const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacaoTrybeFile = async (cacaoTrybe) => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(cacaoTrybe));
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getChocolatesByName = async (name) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => {
      if (chocolate.name.includes(name)) {
        return chocolate;
      }
      return null;
    });
}

const updateChocolate = async ({ id, name, brandId }) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const chocolateToUpdate = cacaoTrybe.chocolates.find(
    (chocolate) => chocolate.id === Number(id),
  );

  if(chocolateToUpdate) {
    cacaoTrybe.chocolates = cacaoTrybe.chocolates.map((chocolate) => {
      if (chocolate.id === Number(id)) return { id, name, brandId };
      return chocolate;
    });
    await writeCacaoTrybeFile(cacaoTrybe);
    return { ...chocolateToUpdate, name, brandId};
  }
  return false;
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getChocolatesByName,
  updateChocolate
};