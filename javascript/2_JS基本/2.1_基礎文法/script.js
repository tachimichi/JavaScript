// 前提：JSは大文字小文字を区別するため気を付ける。
(function() { //即時関数
    'use strict';
    { // 基本
        // ターミナルで実行するには node タブキー
        // console.log('it\'s me!');
        // console.log('Hel\nlo Wo\trld');
        // console.log(10 ** 3); // 10 * 10 * 10
    }
    { // 型の確認
        // console.log(typeof 'hello'); // string
        // console.log(typeof hello); // undefined
        // console.log(typeof true); // boolean
        // console.log(typeof undefined); // undefined
        // console.log(typeof null); // object
        // console.log(typeof 5); // number
        // console.log(typeof '5'); // string
        // console.log(typeof {a: 3, b: 5}); // object
    }
    {
        // // JSは基本、文字列の数字も整数と扱うことができる。
        // console.log(typeof('5' * 3)); // 15(number)
        // console.log('5' - 3); // 2
        // // 足し算の場合、文字列となる。
        // // ⇒parseInt(num, 10(進数))として変換すること。
        // console.log('5' + 3); // 53
        // console.log(parseInt('5', 10) + 3); // 8
        // console.log(parseInt('hello', 10)); // NaN(Not a Number)
    }
    {  // 比較演算子
        // const price = 1200;
        // console.log(price > 1000);
        // console.log(price < 1000);
        // console.log(price === 1000);
        // console.log(price !== 1000);

        // // false <- 0, null, undefined, '', false
        // // true <- 上記以外全部
        // console.log(Boolean(0));
        // console.log(Boolean(''));
        // console.log(Boolean('hello'));
        // console.log(!(Boolean('hello')));
    }
    { // if文の条件分岐
        // const score = 85;
        // // if(score >= 80) {
        // //     console.log('Great!');
        // // } else if (score >= 60) {
        // //     console.log('Good');
        // // } else {
        // //     console.log('OK...')
        // // }

        // // 条件式 ? 真の処理 : 偽の処理;
        // score >= 80 ? console.log('80以上') : console.log('80未満');
    }
    {
        // const score = 60;
        // const name = 'tachimichi';

        // if(score >= 50) {
        //     if(name === 'tachimichi') {
        //         console.log('tachimichi,Great');
        //     }
        // }

        // if(score >= 50 && name === 'tachimichi') {
        //     console.log('tachimichi,Good');
        // }
    }
    {
        // const signal = 'pink';

        // // 比較したい変数等をカッコに入れる。
        // switch(signal) {
        //     case 'red':
        //         console.log('Stop!');
        //         break;
        //     case 'yellow':
        //         console.log('Caution');
        //         break;
        //     case 'blue':
        //     case 'green':
        //         console.log('Go');
        //         break;
        //     default:
        //         console.log('No signal');
        // }
    }
    {
        // for (let i = 0; i < 10; i++) {
        //     console.log('Hello World');
        //     console.log('Hello ' + i);
        //     // バッククォートで囲むと、${変数}使用可能
        //     console.log(`Hello ${i}`);
        // }
    }
    {   // for文とwhile文の使い分け
        // 回数指定があるものはfor文
        // 条件によって、終了するループはwhile


        // let hp = 100;
        // while(hp > 0) {
        //     console.log(`${hp} HP Left`);
        //     hp -= 33;
        // }
        
        // let hp = -50;
        // // do {} while(条件式)
        // // ⇒先に処理を行ってから、条件式を評価する
        // do {
        //     console.log(`${hp} HP Left`);
        //     hp -= 15;
        //     console.log(`${hp} HP Left`);
        // } while(hp > 0);
    }
    { // for文とwhile文の特定の回数をスキップ
        // for (let i = 1; i <= 10; i++) {
        //     if(i === 4) {
        //         // ループをスキップ（1回）
        //         // ⇒強制終了の場合はbreak;
        //         continue;
        //     }
        //     console.log(i);
        // }
    }
    { // 関数処理
        // // 仮引数 = 'any'とすると、実引数無し関数にはanyが入る。
        // function showAd(message = 'default') { // 仮引数
        //     console.log('-------------');
        //     console.log(`--- ${message} ---`);
        //     console.log('-------------');
        // }

        // showAd('Header Ad'); // 実引数
        // console.log('Tom is Great');
        // console.log('Bob is Great');
        // showAd('Ad');
        // console.log('Steve is Great');
        // console.log('Nomad is Great');
        // showAd('Footer Ad');
        // showAd();
    }
    { // 関数宣言と関数式
        // // 関数宣言
        // function sum (a, b, c) {
        //     console.log(a + b + c);
        //     return a + b + c;
        //     // returnの処理は強制終了される
        //     console.log(a + b + c);
        // }
        // // 関数式
        // const sum = function(a, b, c) {
        //     console.log(a + b + c);
        //     return a + b + c;
        //     // returnの処理は強制終了される
        //     console.log(a + b + c);
        // };

        // sum(1, 2, 3);
        // sum(4, 5, 6);
        // const total = sum(1, 2, 3) + sum(4, 5, 6);
        // console.log(total);
    }
    {
        // // 関数式
        // // const sum = function(a, b, c) {
        // //     return a + b + c;
        // // };

        // // アロー関数（引数３つ）
        // const sum = (a, b, c) => {
        //     return a + b + c;
        // };
        // const total = sum(1, 2, 3) + sum(4, 5, 6);
        // console.log(total);

        // // // アロー関数（引数１つ）
        // // const double = function(a) {
        // //     return a * 2;
        // // };

        // const double = a => a * 2;
        // console.log(double(12));
    }
    { // 定数、スコープ
        // const x = 2;
        // function f() {
        //     const x = 1;
        //     console.log(x); // 1
        // }
        // f();
        // console.log(x); // 2
    }
    {
        // （注意）スクリプトタグについて
        // main.jsを読み込んだ後に、直接HTML内に
        // スクリプトタグを用いて、同じ変数を使用した場合
        // 別ファイルではなく、同じファイルのように処理されるので
        // 注意が必要。
        // ⇒だから毎回、{ブロック}で囲む
    }
})();