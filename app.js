'use strict';
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
const length = 40;
for (let i = 0;i <= length; i++) {
    console.log(fib(i));
    // var hoge = zeroPadding(i, 2) + " 番目のフィボナッチ数列は " + fib(i) + " です。"
    // console.log(hoge);
}

/**
 * ゼロパディング（0埋め）
 * 与えられた自然数が、指定した桁数に満たない場合、足りない桁数だけ0を追加して返す
 * @param {Number} num 
 * @param {Number} len 桁数の指定
 * @returns {String}
 */
function zeroPadding(num, len) {
    //Array(len).join('0') + num で、指定した数だけ0を足す。その後sliceで指定した桁数まで0を消している
    return ( Array(len).join('0') + num ).slice( - len );
}