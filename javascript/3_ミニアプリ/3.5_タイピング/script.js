(function (){
    'use strict';
    {
        function setWord() {
        // 配列のn番目の単語をランダムで代入する
        // splice ⇒前回取得した文字は削除する
        word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
        // 初期文字をHTMLに（DOM操作で）追加
        target.textContent = word;
        // locの初期化
        loc = 0;
        }

        // 初期文字を定義
        const words = [
            'red',
            'blue',
            'pink',
            'yellow',
        ];
        let word;
        let loc = 0;    // 用語の位置（番号）
        let startTime;
        let isPlaying = false;
        const target = document.getElementById('target');

        // スタート時の制御
        document.addEventListener('click', () => {
            if(isPlaying === true) {
                return;
            }
            
            isPlaying = true;
            startTime = Date.now();
            setWord();
        });


        // 押したキーの情報が欲しい⇒イベントオブジェクトを引数。
        document.addEventListener('keydown', e => {
            // メインのならない部品を先にreturnさせる。（早期リターン）
            // ⇒メインの処理を明確にする
            if(e.key !== word[loc]) {
                return;
            }
                loc++;
                // 表示したい内容：
                // 1: _ed    // 2: __d    // 3: ___
                // '文字列'.repeat(数値)⇒数だけ、文字列をリピート
                // substring(数値)⇒文字列の何番目から抜き取る。
                target.textContent = '_'.repeat(loc) + word.substring(loc);
                // 単語が最後まで打ち終わった時（＝locとlengthが一致する）
                if(loc === word.length) {
                    if(words.length === 0) {
                        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
                        const result = document.getElementById('result');
                        result.textContent = `Finished! ${elapsedTime} seconds!`;
                        return;
                    }
                    setWord();
                }
        });
    }
})();