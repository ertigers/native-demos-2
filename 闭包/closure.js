// 闭包：一个函数和它周围状态的引用捆绑在一起的组合
// 也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。
// 在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

// 1：函数作为返回值
function test() {
  const a = 1
  return function(){
    console.log("a:", a);
  }
}

const fn = test()
const a = 2
fn()

// 结果：a:1


// 2：函数作为参数
// function test(fn) {
//   const a = 2
//   fn()
// }

// const a = 1
// function fn() {
//   console.log("a:" , a);
// }

// test(fn)

// 结果：a:1