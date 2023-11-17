// ========1)Поясніть відмінність між let, const та var при оголошенні змінних.
// 	let та const мають область видимості блоку, тоді як var має область видимості функції.
// 	const використовується для оголошення констант, а let - для змінних, які можна переприсвоїти.
// 	var можна  переініціалізувати

// ========2)Які існують типи даних в JavaScript примітиви?
// Number, biging string boolean undefined null Symbol

// ========3)Різниця == ===

// ========4)Як перевірити тип змінної в JavaScript
function logger() {}
console.log(typeof logger, typeof [], typeof {});
//"function", "object", "object"
let arr = [];
arr.name = "arr";
console.log(arr, arr.name);

// ========5)Поясніть  "підняття" (hoisting) в JavaScript.

// ========6)В чому різниця між "undefined" і "null"?
// 	"undefined" означає, що змінна була оголошена, але їй не було присвоєно значення.
// 	 "null" - це значення, яке представляє відсутність значення або об'єкта.

// ========7)Що таке замикання (closure) в JavaScript і в чому їхня корисність?
//  LexicalEnvironment  ( Environment Record, ref  on  outer LE)
// 	Замикання - це функція, яка зберігає доступ до змінних зовнішньої функції,
//  навіть після того, як зовнішня функція завершила свою роботу. Замикання корисні для
// 	ізоляції даних, приватних змінних та створення функцій зі спільним станом.

{
  const func = () => {
    console.log(func);
  };
  func();

  // ------------------
  let text = "one";
  function log() {
    console.log(text);
  }
  text = "two";
  log();
  //two

  // -------------------
  function logger() {
    let text = "one";
    return function () {
      console.log(text);
    };
  }
  let text = "two";
  const runLog = logger();
  runLog();
  //one
}

// ========8) Function declaration, function expression, named function expression
// 	Expression not hoisted

// ========9) Відмінність  стрілочних  функцій  від  звичайних
// Не мають  this, arguments,super , не  викликаються  з new

// ========11)Що таке функція зворотнього виклику(callback function) і як вона використовується
//  в JavaScript

// ========12)Ключове слово this. Яка його  властивість.
// Не  є  фіксованим - вираховується в  просіці виконання коду

// ========13)Призначення методів bind, call та apply в JavaScript. 

// ========14) Приклад  коли  можна  втратити  контекст
let obj = {
  prop: "prop",
  printProp() {
    console.log(this.prop);
  },
  printProp2() {
    console.log(this.prop);
  },
};

(obj ? obj.printProp : obj.printProp2)();

// =======15) Як  перевірити  чи  є  обєкт інстансом (екземпляром) класу
// =======16) Як  працює instanceof . Ручна  настройка
// Звіряє  прототипи
class Obj {}
let obj = { prop: true };
console.log(obj instanceof Obj); 
// should be true
// static [Symbol.hasInstance](obj) {
//     if (obj.prop) return true;
//   }

// =======17) instance of
console.log([] instanceof Object);
console.log([] instanceof Array); 

//  true true 

// =======18) Приведення  Обектів до  примітивів
class Obj {}
let obj = new Obj();
console.log(obj + "1") === "11";
// toString() {
//     return "1";
//   }

// [Symbol.toPrimitive](type) {
//     return "1"
// }

// =======19) Які  є  цикли
// =======20) Перебрати
let range = {
  prop: 1,
  prop2: 2,
  prop3: 3,
};

for (let num of range) {
  console.log(num);
}

// is not iterable

range[Symbol.iterator] = function () {
  const entries = Object.entries(this);
  let index = 0;
  return {
    next() {
      if (index < entries.length) {
        return { done: false, value: entries[index++] };
      } else {
        return { done: true };
      }
    },
  };
};

//  Перебрати  поля
// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
//   };

//   let arr = Array.from(arrayLike);
//   console.log(arr)

// ========21)Дескриптори  обекту
//   "writable": true,
//   "enumerable": true,
//   "configurable": true

let obj = { name: "name" };
Object.getOwnPropertyDescriptor(obj, "name");
Object.defineProperty(obj, "propertyName", {});

// ========22) Різниця між  Object.seal, Object.freeze
// ========23) Getters, setters навіщо є
// ========24) JS class З приватним полем. І  що  буде  якщо  від  нього  наслідуватися

class Class {
  #private = 0;
  get privateProp() {
    return this.#private;
  }
}

let class = new Class();
// console.log(class.privateProp, class.#private);

// ========25) Навіщо  в  класі  оголошують  статичні  методи
//     Для  реалізації  функцій  які  будуть  належати  класу  в  цілому  а  не
//     окремому  обєкту

// ========26)Прототипне  наслідування .__proto__ .prototype;
function Obj() {}
Obj.prototype = { prop: true };
let obj = new Obj();
Obj.prototype = {};
console.log(obj.prop);
// true

function Obj() {}
Obj.prototype = { prop: true };
let obj = new Obj();
Obj.prototype.prop = false;
console.log(obj.prop);
// false

// =======27) Що виведе  console.log({}) і  чому  {}.__proto__ === Object.prototype
// =======28) Як в  промізах  спіймати  ерорку (3 способи)
// =======29) Як виконати  код  незалежно  від  ерорки  чи  респонсу
// =======30) Що  буде  якщо  елемент Promise.all Завершится  помилкою
// =======31) Різниця  Promise.all Promise.allSettled
// =======32) Є функція  readFile((error, file)=>{}) Зробити  промісіфікацію

new Promise((resolve, reject) => {
  readFile((error, file) => {
    if (err) reject(err);
    return resolve(file);
  });
});

// =========33) Методи  примітивів
// =========34) Методи  масива
// =========35) Як  видалити  елемент  з  масиву
let arr = [1, 2, 3, 4, 5];
delete arr[1];
// =========36) Є  Array , LinkedList
// Що  вибереш  якщо  треба швидше  дістати  елемент  а що  коли  швидше  записати  елемент
// =========37) WeakRef, WeakMap WeakSet
// =========38)Що таке  рекурсія коли  використовуэться
const funct = () => {
  func();
};
func();
// Maximum call stack size exceeded"

// =========39) Що таке  call stack,callback queue  Event loop .Macro micro task
// =========40) Чи  вірний такий  запис і що  виведе  якщо  вірний
let x = 10;
let y = (x++, x + 20);
console.log(y);

// =========41) Weak ref
// =========42) Use strict
    //  forbids 
    //   seting  props on  promitives
    //   assigning  to global  variables
    //   assigning  to  non-value
    //   delete  non-deleting  values ([].length)
    //   duplicate parameter, properties names






