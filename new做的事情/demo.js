const newFn = function(fun, ...args) {
    let obj = {};
    obj.__proto__ =fun.prototype;
    const result = fun.apply(obj, args);
    if (typeof result === 'object') {
        return result;
    } else {
        return obj;
    }
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}
let test = newFn(Person, '廖鹏', 24);
console.log(test);