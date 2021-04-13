// 前提：JSは大文字小文字を区別するため気を付ける。
(function() { //即時関数
    'use strict';
    { // 配列
        // const scores = [80, 90, 40];
        // console.log(scores);
        // console.log(scores[1]);
        
        // scores[2] = 44;
        // console.log(scores);
        // console.log(scores.length);
    }
    {
        // const scores = [80, 90, 40];
        // // console.log(`Score: ${scores[0]}`);
        // // console.log(`Score: ${scores[1]}`);
        // // console.log(`Score: ${scores[2]}`);
        
        // for ( let i = 0; i < scores.length; i++) {
        //     console.log(`Score ${i - 1}: ${scores[i + 1] - 1}`);
        // }
    }
    { // 配列の操作{unshift(), shift(), push(), pop()}
        // unshift()   ⇒ 先頭に追加する
        // shift()      ⇒ 先頭から削除する（1つのみ）
        // push()      ⇒ 末尾に追加する
        // pop()       ⇒ 末尾から削除する（1つのみ）

        // const scores = [80, 90, 40, 70];
        // scores.push(60, 77, 100);
        // scores.shift();

        // for ( let i = 0; i < scores.length; i++) {
        //     console.log(`Score ${i}: ${scores[i]}`);
        // }
        // console.log(`all Score : ${scores}`);

        // // スコアを3つになるまで消したい
        // while(scores.length > 3) {
        //     scores.shift();
        //     console.log(`Score : ${scores}`);
    }
    { // 配列の変更（戦闘、末尾以外）
        // splice()
        // ⇒(変化が開始する位置, 削除数, 追加する要素（必要な数だけ）)
        // const scores = [80, 90, 40];
        // scores.splice(1, 1, 40, 50);

        // for ( let i = 0; i < scores.length; i++) {
        //     console.log(`Score${i}: ${scores[i]}`);
        // }
    }
    { // スプレッド記入法
        // const otherScores = [10, 20];
        // const scores = [80, 90, 40, 70, ...otherScores];
        // console.log(scores);

        // function sum(a, b) {
        //     console.log(a + b);
        // }
        // sum(...otherScores);
        // // sum(10, 20);
    }
    { // 分割代入
        // const scores = [80, 90, 40, 70];
        // // const [a, b, c, d] = scores;
        // // console.log(a);
        // // console.log(b);
        // // console.log(c);
        // // console.log(d);

        // // const [a, b, ...others] = scores;
        // // console.log(a);
        // // console.log(b);
        // // console.log(others);

        // let x = 30;
        // let y = 70;
        // [x, y] = [y, x];
        // console.log(x);
        // console.log(y);
    }
    { // forEach構文
        // const scores = [80, 90, 40, 70];
        // // scores.forEach((score) => {
        //     // 配列の要素、要素番号
        // scores.forEach((score, index) => {
        //     console.log(`Score ${index}: ${score}`);
        // });
    }
    { // map関数
        // const prices = [180, 190, 200];
        // // 配列の要素に対して、処理を行い別の配列を作成する
        // const updatedPrices = prices.map((price) => {
        //     return price + 20;
        // });
        // console.log(updatedPrices);
    }
    { // filter関数
        // 配列の要素をチェックして条件に合うものだけを
        // 抽出して別の配列として取得する
        // const numbers = [1, 4, 7, 8, 10];

        // const evenNumbers = numbers.filter(number => {
        //     if(number % 2 === 0) {
        //         return true;
        //     }else {
        //         return false;
        //     }
        // });
        // console.log(evenNumbers);
    }
    { // オブジェクト
        // 配列⇒複数の値に順番を付けてまとめたもの
        // オブジェクト⇒値に名前を付けて管理する
        // const point = {
        //     // プロパティ
        //     // 名前（キー）、値
        //     x: 100,
        //     y: 180
        // };
        // console.log(point);
    }
    { // プロパティの変更、追加、削除
        // const point = {
        //     x: 100,
        //     y: 180
        // };
        // // プロパティの変更
        // console.log(point.x);
        // point.x = 120;
        // console.log(point.x);
        // point['x'] = 150;
        // console.log(point.x);
        // console.log(point['y']);
        // // プロパティの追加、削除
        // point.z = 90;
        // delete point.y;
        // console.log(point);
    }
    { // スプレッド構文、分割代入、レスト構文
        // const otherProps = {
        //     r: 4,
        //     color: 'red',
        // };

        // const point = {
        //     x: 100,
        //     y: 180,
        //     ...otherProps,
        // };
        // console.log(point);
        // // 分割代入
        // const {y, r, ...others} = point;
        // console.log(y);
        // console.log(r);
        // console.log(others);
    }
    { // Object.keys()での列挙
        // const point = {
        //     x: 100,
        //     y: 180,
        // };
        // // オブジェクトのキーを配列として取得
        // const keys = Object.keys(point);
        // keys.forEach(key => {
        //     // 要素は${変数[配列要素]}
        //     console.log(`key: ${key} value: ${point[key]}`);
        // });
        
        // 配列とオブジェクトの組み合わせ
        // const points = [
        //     {x: 100, y: 180,},
        //     {x: 30, y: 50,},
        //     {x: 40, y: 40,},
        // ];
        // console.log(points[1]);
        // console.log(points[1].y);
    }
    { // 変数の挙動
            // ①
        // let x = 1;
        // let y = x;
        // x = 5;
        // console.log(x); // 5
        // console.log(y); // 1
            // ②
        // let x = [1, 2];
        // let y = x;
        // x[0] = 5;
        // console.log(x); // [5, 2]
        // console.log(y); // [5, 2]
            // ③
        // let x = [1, 2];
        // let y = [...x];
        // x[0] = 5;
        // console.log(x); // [5, 2]
        // console.log(y); // [1, 2]
    }
    {
        // const str = 'hello';
        // console.log(str.length);

        // // str.substring(開始位置、終了位置の手前);
        // console.log(str.substring(2,4));
        // // 配列のように扱う
        // console.log(str[1]);
    }
    { // 文字列（変数）の結合
        // const d = [2020, 12, 14];
        // console.log(d.join('/'));

        // const t = '13:52:35';
        // // console.log(t.split(':'));
        // const [hour, minute, second] = t.split(':');
        // console.log(hour);
        // console.log(minute);
        // console.log(second);
    }
    { // 数値計算、操作
        // const scores = [10, 3, 9,];
        // let sum = 0;

        // scores.forEach(score => {
        //     sum += score;
        // });
        // const avg = sum / scores.length;

        // console.log(sum);
        // console.log(avg);

        // console.log(Math.floor(Math.floor(avg))); // 7（小数点切り捨て）
        // console.log(Math.floor(Math.ceil(avg))); // 8（小数点切り上げ）
        // console.log(Math.floor(Math.round(avg))); // 7（四捨五入）
        // console.log(avg.toFixed(3)); // 7.333（小数点第x位まで）

        // 0~1のランダムな数値を生成
        // console.log(Math.random());
    }
    { // ランダムな整数値の作成
        // console.log(Math.random());
        // // 0, 1, 2
        // Math.floor(Math.random() * 3);
        // // 0, ..., n
        // Math.floor(Math.random() * (n + 1));
        // // min, ..., max
        // Math.floor(Math.random() * (max + 1 - min)) + min;

        // // さいころ
        // Math.floor(Math.random() * (6 + 1 - 1)) + 1;
        // console.log(Math.floor(Math.random() * (6 + 1 - 1)) + 1);
    }
    { // 現在日時
        // const d = new Date();
        // // グリニッジ標準時
        // console.log(`グリニッジ標準時${d}`);
        // // 日本標準時
        // console.log(`日本標準時${d + 9}`);
        // // 年（4桁）
        // console.log(`${d.getFullYear()}年`);
        // // 月（0~11)+1
        // console.log(`${d.getMonth() + 1}月`);
        // // 日（1~31)
        // console.log(`${d.getDate()}日`);
        // // 曜日（0~6：日~土）
        // console.log(d.getDay());
        
        // const days_kanji = ["日", "月", "火", "水", "木", "金", "土"];
        // console.log(`${days_kanji[d.getDay()]}曜日`);


        // // 時間(hour:0~23)
        // console.log(`${d.getHours()}時`);
        // // 分(minute:0~59)
        // console.log(`${d.getMinutes()}分`);
        // // 秒(second:0~59)
        // console.log(`${d.getSeconds()}秒`);
        // // ミリ秒(hour:0~999)
        // console.log(`${d.getMilliseconds()}ミリ秒`);
    }
    { // 特定の日時を扱う
        // const d = new Date(2019, 10) // 2019/11/01 00:00:00
        // d.setHours(10 + 9, 20, 30); // 2019/11/01 10:20:30
        // d.setDate(31); // // 2019/12/01 10:20:30
        // d.setDate(d.getDate() + 3); // // 2019/12/04 10:20:30
        // console.log(d);
    }
    { // alert(), confirm()の使用
        // alert(`alert`);
        // const answer =confirm(`削除しますか？`);
        // if(answer) {
        //     console.log(`削除しました。`);
        // } else {
        //     console.log(`キャンセルしました。`);
        // }
    }
    { // setInterval() ミリ秒間隔で処理を行う
        // let i = 0;
        
        // function showTime() {
        //     let d = new Date();
        //     console.log(d);
        //     console.log(`${d.getMilliseconds()}ミリ秒`);
        //     i++;
        //     if(i > 5) {
        //         clearInterval(intervalId);
        //     }
        // }
        // const intervalId = setInterval(showTime, 1000);
    }
    { // setTimeout ミリ秒後に1回のみ実行する
        // let i = 0;
        // function showTime() {
        //     console.log(new Date());
        //     const timeoutId = setTimeout(showTime, 1000);
        //     i++;
        //     if(i >2 ) {

        //         clearTimeout(timeoutId);
        //     }
        // }
        // showTime();
    }
    { // タイマー処理の違い
        // setInterval(処理,実行時間間隔):
        // ⇒実行処理時間が1000ミリ秒以上でも、1000ミリ秒ごとに繰り返す。

        // setTimeout(処理,実行時間間隔):
        // ⇒実行処理が終了してから、1000ミリ秒後に繰り返す。
    }
    { // 例外処理
        // const name = 'taguchi';
        // const name = 5; // 例外発生
        // try {
        //     console.log(name.toUpperCase());
        // } catch (e) { // 例外時の情報をeに格納できる
        //     console.log('-----------');
        //     console.log(e);
        //     console.log('-----------');
        // }
        // console.log('fin');
    }
    { // 複数オブジェクト
        // const posts = [
        //     {
        //         text: 'JS勉強中...',
        //         likeCount: 0,
        //     },
        //     {
        //         text: 'プログラミング楽しい',
        //         likeCount: 0,
        //     },
        // ];
        // function show(post) {
        //     console.log(`${post.text} - ${post.likeCount}いいね`);
        // }
        // show(posts[0]);
    }
    { // 複数オブジェクト② クラス使用していないので、毎メソッド記述する必要アリ
        // const posts = [
        //     {
        //         text: 'JS勉強中...',
        //         likeCount: 0,
        //         // 関数をプロパティに入れる⇒メソッド
        //         // show:  function () {
        //         //     console.log(`${this.text} - ${this.likeCount}いいね`);
        //         // },
        //         show() {
        //             console.log(`${this.text} - ${this.likeCount}いいね`);
        //         },
        //     },
        //     {
        //         text: 'プログラミング楽しい',
        //         likeCount: 0,
        //         show() {
        //             console.log(`${this.text} - ${this.likeCount}いいね`);
        //         },
        //     },
        // ];
        
        // // show(posts[0]);
        // posts[0].show();
        // posts[1].show();
    }
    { // クラスとインスタンス化
        // class Post {
        //     constructor(text) {
        //         this.text = text;
        //         this.likeCount = 0;
        //     }
        //     show() {
        //         console.log(`${this.text} - ${this.likeCount}いいね`);
        //     }
        // }

        // const posts = [
        //     new Post(`JS配列0番`),
        //     new Post(`JS配列1番`),
        // ];

        // posts[0].show();
        // posts[1].show();

        // // forEachを使用した配列の取り出し
        // posts.forEach(post => {
        //     post.show();
        // });
        // console.log(`---------①----------`);
        // // for文を使用した配列の取り出し
        // let i = 0;
        // for(i = 0; i < posts.length; i++) {
        //     posts[i].show();
        // }
        // console.log(`---------②----------`);
        // // メソッド記述の模索
        // new Post(`おかしい`).show();
    }
    { // カプセル化と静的メソッド
        // class Post {
        //     constructor(text) {
        //         this.text = text;
        //         this.likeCount = 0;
        //     }
        //     like() {
        //         this.likeCount++;
        //         this.show();
        //     }
        //     show() {
        //         console.log(`${this.text} - ${this.likeCount}いいね`);
        //     }
        //     // 静的メソッド
        //     // thisは使用不可
        //     static showInfo() {
        //         console.log(`Post class version 1.0`);
        //     }
        // }
        // const posts = [
        //     new Post(`JS配列0番`),
        //     new Post(`JS配列1番`),
        // ];

        // posts[0].like();
        // // 静的メソッドの呼び出し
        // Post.showInfo();
    }
    { // クラスの拡張（それぞれのクラスで重複が多い）
        // class Post {
        //     constructor(text) {
        //         this.text = text;
        //         this.likeCount = 0;
        //     }
        //     like() {
        //         this.likeCount++;
        //         this.show();
        //     }
        //     show() {
        //         console.log(`${this.text} - ${this.likeCount}いいね`);
        //     }
        // }
        // class SponsoredPost {
        //     constructor(text, sponsor) {
        //         this.text = text;
        //         this.likeCount = 0;
        //         this.sponsor = sponsor;
        //     }
        //     like() {
        //         this.likeCount++;
        //         this.show();
        //     }
        //     show() {
        //         console.log(`${this.text} - ${this.likeCount}いいね`);
        //         console.log(`.. sponsored ${this.sponsor}`);
        //     }
        //     // 静的メソッド
        //     // thisは使用不可
        //     static showInfo() {
        //         console.log(`Post class version 1.0`);
        //     }
        // }
        // const posts = [
        //     new Post(`JS配列0番`),
        //     new Post(`JS配列1番`),
        //     new SponsoredPost(`3分動画`, `dotInstall`),
        // ];
        // posts[0].like();
        // posts[2].show();
        // posts[2].like();

    }
    { // クラス継承
        class Post { // 親クラス
            constructor(text) {
                this.text = text;
                this.likeCount = 0;
            }
            like() {
                // thisの中身はSponsoredPost { text: '3分動画', likeCount: 0, sponsor: 'dotInstall' }
                // Postオブジェクトではなく、Sponsoredオブジェクトになっていることに注意
                // ⇒thisはnewで生成したインスタンス自身を指す。
                console.log(this);
                this.likeCount++;
                this.show();
            }
            show() {
                console.log(`${this.text} - ${this.likeCount}いいね`);
            }
        }
        class SponsoredPost extends Post { // 子クラス
            constructor(text, sponsor) {
                // 親クラスからtextを継承する
                super(text);
                this.sponsor = sponsor;
            }
            show() {
                super.show();
                console.log(`. sponsored ${this.sponsor}`);
            }
        }
        const posts = [
            new Post(`JS配列0番`),
            new Post(`JS配列1番`),
            new SponsoredPost(`3分動画`, `dotInstall`),
        ];
        posts[2].show();
        posts[2].like();

    }
})();