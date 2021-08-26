'use strict';
const number = process.argv[2] || 0;
//[2]は、実行コマンド node app.js 100 の[2]に当たるのは0,1,2で
//3番目にある値なので、それを指している。
//左の値が有効なら使い、有効でないなら右側の値を使う
//選択的代入

//ループでiを1から入力された数値まで足して合計値を求める
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum +i;
}
console.log(sum);
