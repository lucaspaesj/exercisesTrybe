const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewKeyAndValue = (object, keyName, valueName) => object[keyName] = valueName;
addNewKeyAndValue(lesson2, "turno", "noite");
// console.log(lesson2);

const listObjKeys = (object) => Object.keys(object);
// console.log(listObjKeys(lesson1));

const objSize = (object) => Object.keys(object).length;
// console.log(objSize(lesson1));

const listObjValues = (object) => Object.values(object);
// console.log(listObjValues(lesson1));

const allLessons = {
  lesson1: {
  },
  lesson2: {
  },
  lesson3: {
  }
};
const addAllLessons = (destinyObj, referenceObj) => {
  for(let value in listObjKeys(lesson1)){
    addNewKeyAndValue(destinyObj, listObjKeys(referenceObj)[value], listObjValues(referenceObj)[value]);
  }
}
addAllLessons(allLessons["lesson1"], lesson1);
addAllLessons(allLessons["lesson2"], lesson2);
addAllLessons(allLessons["lesson3"], lesson3);
// console.log(allLessons);

const getAllStudents = (obj) => `Número de estudantes: ${Object.keys(obj).length}`;
// console.log(getAllStudents(allLessons));

const getValueByNumber = (obj, number) => Object.values(obj)[number];
// console.log(getValueByNumber(lesson1, 0));

// console.log(arr.includes("teste"));

// console.log(Object.entries(lesson1));

const verifyPair = (obj, keyName, keyValue) => {
  const arr = Object.entries(obj);
  for(let value in arr){
    if(arr[value].includes(keyName) && arr[value].includes(keyValue)){
      return true;
    }
  }
  return false;
}
// console.log(verifyPair(lesson3, "turno", "noite"));
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

const numberStudents = (obj, subject) => {
  let totalStudents = 0;
  for(let value of listObjKeys(obj)){
    if(verifyPair(obj[value], "materia", subject)){
      let number = obj[value]["numeroEstudantes"];
      totalStudents += number;
    }
  }
  return `O número total de estudantes para esta Matéria foi de: ${totalStudents} estudantes`;
}
// console.log(numberStudents(allLessons, "Matemática"));

const createReport = (obj, professor) => {
  const report = {
  }
  const aulas = [];
  let totalStudents = 0;
  for(let value of listObjKeys(obj)){
    if(verifyPair(obj[value], "professor", professor)){
      report.professor = obj[value].professor;
      aulas.push(obj[value].materia);
      totalStudents += obj[value].numeroEstudantes;
    }
  }
  report["aulas"] = aulas;
  report.estudantes = totalStudents;
  return report;
}
// console.log(createReport(allLessons, "Maria Clara"));