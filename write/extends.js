// 不用class实现继承
function Animal(color) {
  this.color = color
}

Animal.prototype.move = function(){
  console.log('这是原型上的方法哦~move');
}

function Cat(color,name) {
  Animal.call(this,color)
  this.name = name
}

function temp(){}
temp.prototype = Animal.prototype
Cat.prototype = new temp()
Cat.prototype.constructor = Cat

Cat.prototype.say = function(){
  console.log('miaomiao~');
}

// 测试
let cat = new Cat("白色","斑鳜")
cat.say()
cat.move()
cat.color
cat.name



// 用class的方式
class Animal{
  constructor(color){
    this.color = color
  }
  move(){
    console.log("move~move~");
  }
}

class Dog extends Animal {
  constructor(color,name){
    super(color)
    this.name = name
  }
  say(){
    console.log('wangwang~wangwang~');
  }
}

// 测试
let dog = new Dog("黄色","小黄")
dog.say()
dog.move()
dog.name
dog.color