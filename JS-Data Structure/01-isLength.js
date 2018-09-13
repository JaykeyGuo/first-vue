/* 设计一个函数 isLength，判断输入值为有效的数组长度。
数组的长度都为正整数。 */

const print = console.log

const MAX_SAFE_INTEGER = 9007199254740991

function isLength(value) {
    value = +value
    return typeof value == "number" && 
        value !== NaN &&
        value > -1 &&
        value % 1 == 0 &&
        value <= MAX_SAFE_INTEGER
}

print(isLength(1))
// => true
print(isLength(-1))
// => false
print(isLength(0))
// => true
print(isLength(1.1))
// => false
print(isLength(9007199254740991))
// => true
print(isLength(-9007199254740991))
// => false
print(isLength(9007199254740992))
// => false
print(isLength({ x: 1 }))
// => false
print(isLength(new Number(1)))
// => true
print(isLength(new Number(9007199254740991)))
// => true
print(isLength(new Number(9007199254740992)))
// => false