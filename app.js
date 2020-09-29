'use strict';
/**
 * 0から与えられた数までフィボナッチ数列を返す
 * @param {Number} len 
 * @returns {Number}
 * 最後にundefindが返るのでreturnを足しておく
 * jsにはexitが無い！
 */
function answer(len) {
    const length = len;
    for (let i = 0; i <= length; i++) {
        console.log(fib(i));
      }
    return "これ入れないとundefindが最後にくっつく"
}

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

// console.log(answer(40));
const length = 100;
for (let i = 0; i <= length; i++) {
  console.log(zeroPadding(i, 3, 0) + " のフィボナッチ数は " + fib(i) + " です。");
}
//console.log(memo);


// function fib(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
// const length = 40;
// for (let i = 0;i <= length; i++) {
//     console.log(fib(i));

    // var hoge = zeroPadding(i, 2) + " 番目のフィボナッチ数は " + fib(i) + " です。"
    // console.log(hoge);
// }

/**
 * 与えられた自然数が、指定した桁数に満たない場合、足りない桁数だけ指定された文字を追加して返す
 * @param {Number} num 
 * @param {Number} len 桁数の指定
 * @param {*} ume 埋める文字(0, " ", etc)
 * @returns {String}
 */
function zeroPadding(num, len, ume) {
    //Array(len).join(ume) + num で、指定した数だけ ume を足す。その後sliceで指定した桁数まで0を消している
    return (Array(len).join(ume) + num).slice(- len);
}