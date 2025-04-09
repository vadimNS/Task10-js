//Переведіть текст виду border-left-width в borderLeftWidth
const camelize = (word) => {
  let arr = word.split("-");
  let result = arr.map((item, index) => {
    if (index === 0) {
      return item;
    } else {
      return item[0].toUpperCase() + item.slice(1);
    }
  });
  return result.join("");
};
console.log(camelize("background-color"));

//Фільтрація за діапазоном
const filterRange = (arr, a, b) => {
  return (result = arr.filter((item) => item >= a && item <= b));
};
let arr = [5, 3, 2, 8, 1];
console.log(filterRange(arr, 1, 4));

//Сортувати за спаданням
const fallSort = (arr) => {
  return arr.sort((a, b) => b - a);
};
console.log(fallSort(arr));

//Трансформувати в масив імен
const transformIntoName = (arr) => {
  return arr.map((item) => item.name);
};
let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let users = [ivan, petro, mariya];
console.log(transformIntoName(users));

//Трансформувати в обʼєкти
const usersMapped = (arr) => {
  return arr.map((item) => ({
    fullName: item.name + " " + item.surname,
    id: item.id,
  }));
};
ivan = { name: "Іван", surname: "Іванко", id: 1 };
petro = { name: "Петро", surname: "Петренко", id: 2 };
mariya = { name: "Марія", surname: "Мрійко", id: 3 };

users = [ivan, petro, mariya];
console.log(users);
console.log(usersMapped(users));

//Відсортувати користувачів за віком
const sortByAge = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};
ivan = { name: "Іван", age: 25 };
petro = { name: "Петро", age: 30 };
mariya = { name: "Марія", age: 28 };

arr = [petro, ivan, mariya];
sortByAge(arr);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

//Вирахувати середній вік
const getAverageAge = (arr) => {
  let sum = 0;
  let tempArr = arr.map((item) => item.age);
  for (let index = 0; index < tempArr.length; index++) {
    sum += tempArr[index];
  }
  return sum / tempArr.length;
};
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

arr = [john, pete, mary];
console.log(getAverageAge(arr));

//Ланцюг викликів
const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};
ladder.up().up().down().showStep().down().showStep();
// загуглив це, досить геніально, тобто ми повертаємо this, тобто об'єкт, і через це можемо продовжувати виклик ланцюгом
