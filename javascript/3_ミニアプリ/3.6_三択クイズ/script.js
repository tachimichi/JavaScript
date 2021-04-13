(function () {
    'use strict';
    {
        const question = document.getElementById('question');
        const choices = document.getElementById('choices');
        const btn = document.getElementById('btn');
        const result = document.getElementById('result');
        const scoreLabel = document.querySelector('#result > p');

        const quizSet = shuffle([
            { q: '世界で一番大きな湖は?', c: ['カスピ海', 'カリブ海', '琵琶湖'], },
            { q: '2の8乗は?', c: ['256', '64', '1024'], },
            { q: '次のうち、最初にリリースされた言語は?', c: ['Python', 'HTML', 'JavaScript'], },
        ]);
        let currentNum = 0;
        let isAnswered;
        let score = 0;

        // 配列全体の中からランダムに要素を選択。(0~2:3個)
        // 最後の要素と入れ替え。
        function shuffle(arr) {
            // ランダム範囲の終点⇒i（3個の長さ-1⇒i=2）
            for(let i = arr.length -1; i > 0; i--) {
                // ランダム範囲の中から選択する要素⇒j
                // 0~i（0~2.99999⇒0~2）番目のランダム整数を生成する
                const j = Math.floor(Math.random() * (i + 1));
                console.log(Math.floor(Math.random() * (i + 1)));
                // 分割代入（＝入れ替え）
                // もちろん、最後の要素同士入れ替えない場合もあり。
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
            return arr;
        }

        // 正誤判定関数
        function checkAnswer(li) {
            // 答え選択済みなら、関数処理を行わない
            if(isAnswered === true) {
                return;
            }
            // 解答済みかどうか判定する
            isAnswered = true;
            // 正誤判定に応じて、クラスの割り当て
            if(li.textContent === quizSet[currentNum].c[0]) {
                li.classList.add('correct');
                score++;
            } else {
                li.classList.add('wrong');
            }
            // 答えを選択したら、nextボタンを活性化
            btn.classList.remove('disabled');
        }

        function setQuiz() {
            // isAnsweredを初期値：false
            isAnswered = false;
            // 問題文を表示させる
            question.textContent = quizSet[currentNum].q;

            // 最初の子要素がある限り(nullになるまで)
            while(choices.firstChild) {
                // 最初の子要素を消す
                choices.removeChild(choices.firstChild);
            }

            // shuffle関数に引数としてquizSetを渡してあげる
            // 問題：そのままだと、元の配列自体も変化する（正誤判定できない）
            // 原因：参照が引数に渡される。⇒値のコピーではないため。
            const shuffleChoices = shuffle([...quizSet[currentNum].c]);

            console.log(quizSet[currentNum].c);
            // 解決策：配列の値のコピーを引数に渡す。
            // [...配列]（スプレッド演算子）

            // 選択肢（配列）をforeachで展開する
            shuffleChoices.forEach(choice => {
                // li要素（空の状態）の作成
                const li = document.createElement('li');
                // liのテキストに個々要素（＝choice）を代入。例：<li>A0</li>
                li.textContent = choice;
                
                // 正誤判定（描画前に設定することで、論理的に動く）
                // create段階以降で、イベントやプロパティの設定はOK
                li.addEventListener('click', () =>{
                    checkAnswer(li);
                });
                
                // liをchoices（親要素：ul）に追加することで、画面表示
                choices.appendChild(li);
            });

            // quizSet.length - 1（＝最後の問題）の場合
            // 前提：cuurentnum（現在の問題番号（0スタート））
            if(currentNum === quizSet.length - 1) {
                btn.textContent = 'Show Score';
            }
        }

        setQuiz();

        // nextボタンを押下したときの処理
        btn.addEventListener('click', () => {
            // もしdisabledが付いていた場合
            // 答えを選択していない場合：⇒ isAnsweredでも可
            if(btn.classList.contains('disabled')) {
                return;
            }
            // disabledクラスを付ける
            btn.classList.add('disabled');

            // 問題番号と問題数が一致（＝最後の問題）の時
            if(currentNum === quizSet.length - 1) {
                // スコアを表示する
                scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
                // スコア領域をhiddenクラスを取り除く
                result.classList.remove('hidden');
            } else {
                // 問題番号を1増やす。setQuiz()を開く
                currentNum++;
                setQuiz();
            }


        });
    }














    { // フィッシャー・イェーツのアルゴリズム
        // 例：1, 2, 3, 4, 5, ... , n
        // ①最後の要素（n番目）を軸に
        // 最初~最後-1番目の中の要素をランダムで抜き取る。
        // ②最後の要素と、ランダム要素を入れ替える。
        // ③次に、最後から-1の要素を軸にループする。
    }
})();