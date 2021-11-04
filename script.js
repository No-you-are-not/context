//1

let calculator = {
    read: function (){
        this.x = prompt("enter first number");
        this.y = prompt('enter second number');
        return true;
    },
    sum: function (){
        return `${this.x} + ${this.y} = ${+this.x + +this.y}`
    },
    multi: function (){
        return `${this.x} * ${this.y} = ${this.x * this.y}`
    },
    diff: function (){
        return `${this.x} - ${this.y} = ${this.x - this.y}`
    },
    div: function (){
        return `${this.x} / ${this.y} = ${this.x / this.y}`
    }

}
// calculator.read();
// alert(calculator.sum())
// alert(calculator.multi())
// alert(calculator.div())
// alert(calculator.diff())


//2

let coffeeMachine = {
    message: function (){
        alert( "Your coffee is ready!");
    },
    start: function (){
        setTimeout(this.message, 3000)
    }
}

//coffeeMachine.start()


//3

let counter = {
    value: 0,
    inc: function (){
        this.value++;
        return this;
    },
    dec: function (){
        this.value--;
        return this;
    },
    getValue: function (){
        return this.value;
    }
}

//console.log(counter.inc().inc().inc().inc().dec().getValue())


//4
let me = {
    x: 0,
    y: 0,
    getSum: function (x, y){
        this.x = x;
        this.y = y;
        alert(calculator.sum.call(me))
    },
    getMulti: function (x, y){
        this.x = x;
        this.y = y;
        alert(calculator.multi.call(me))
    },
    getDiff: function (x, y){
        this.x = x;
        this.y = y;
        alert(calculator.diff.call(me))
    },
    getDiv: function (x, y){
        this.x = x;
        this.y = y;
        alert(calculator.div.call(me))
    },
}

//me.getSum(1,2)
//me.getDiff(4,2)
//me.getDiv(6,3)
//me.getMulti(2,2)

//5
let country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

 format.call(country, '', ''); // Ukraine
 format.apply(country,['[', ']']); // [Ukraine]
 format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['','']); // Kyiv
 format.apply(null,['','']); // undefined

//6
let user = {
    name: 'Polina'
}

let userFormat = format.bind(user);
//userFormat('<<<', '>>>')


//7

function concat(str1,devider, str2){
    console.log( `${str1}${devider}${str2}`);
}

let hello = concat.bind(null, 'hello', " ")

//hello('polina')

//level up
//1

function myPow(number){
    let factor = number;
    for (let i = 1; i < 3; i++){
        number *= factor;
    }
    return number;
}
//console.log(myPow(3))

let pow = 3;
function myPowRek(number){
    if (pow === 0){
        return 0;
    }
    if (pow === 1){
        return 1
    }
    else {
        pow -= 1;
        return number * myPowRek(number)
    }
}
//console.log(myPowRek(3))

//2
function sum ( ...arr){
    if (arr.length === 0){
        return 0
    }
    else {
        let test = arr.pop();
        return test + sum( ...arr);
    }
}

//console.log(sum(1,2,3,4,5))