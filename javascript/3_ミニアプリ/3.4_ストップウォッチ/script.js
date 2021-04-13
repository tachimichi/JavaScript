(function() { //即時関数
    'use scrict';
    {
        const timer = document.getElementById('timer');
        const start = document.getElementById('start');
        const stop = document.getElementById('stop');
        const reset = document.getElementById('reset');

        let startTime;
        let timeoutId;
        let elapsedTime = 0;

        function countUp() {
            // 関数を開いた時間 - startボタンを押した時間
            console.log(Date.now() - startTime);
            // 経過時間をDateオブジェクトとする。（整数値の引数１つ）
            // ⇒UTC時間で1970年1月1日00:00.000に引数を与えられた数値をミリ秒として日時を返す
            // 現在のミリ秒 - スタートボタンクリック時 + 途中停止積み上げ時間
            const d = new Date(Date.now() - startTime + elapsedTime);
            const m = String(d.getMinutes()).padStart(2,'0');
            const s = String(d.getSeconds()).padStart(2,'0');
            const ms = String(d.getMilliseconds()).padStart(3,'0');
            timer.textContent = `${m}:${s}.${ms}`;

            // 10ミリ秒ごとにカウントアップを開く関数処理
            timeoutId = setTimeout(() => {
                countUp();
            }, 10);
        }

        // 初期画面ボタンの活性
        function setButtonSateInitial() {
            start.classList.remove('inactive');
            stop.classList.add('inactive');
            reset.classList.add('inactive');
        }
        // 走っている時のボタン活性
        function setButtonSateRunning() {
            start.classList.add('inactive');
            stop.classList.remove('inactive');
            reset.classList.add('inactive');
        }
        // ストップ時のボタン活性
        function setButtonSateStopped() {
            start.classList.remove('inactive');
            stop.classList.add('inactive');
            reset.classList.remove('inactive');
        }

        // 初期ボタン呼び出し
        setButtonSateInitial();
        // startクリック時の制御
        start.addEventListener('click', () => {
            // クラスにinactiveがある場合、そのままreturn
            if(start.classList.contains('inactive') === true) {
                return;
            }
            // 活性ボタンの入れ替え
            setButtonSateRunning();
            // 基準となる日時からのミリ秒（⇒startボタン押した時間）
            startTime = Date.now();
            // カウント機能の呼び出し
            countUp();
        });

        // stopクリック時の制御
        stop.addEventListener('click', () => {
            // クラスにinactiveがある場合、そのままreturn
            if(stop.classList.contains('inactive') === true) {
                return;
            }
            // 活性ボタンの呼び出し
            setButtonSateStopped();
            // setTimeoutをキャンセルする
            // タイムアウト用のIDを渡す
            clearTimeout(timeoutId);
            // 途中停止時間の積み上げ
            elapsedTime += Date.now() - startTime;
        });
        // resetクリック時の制御
        reset.addEventListener('click', () => {
            // クラスにinactiveがある場合、そのままreturn
            if(reset.classList.contains('inactive') === true) {
                return;
            }
            // 活性ボタンの呼び出し
            setButtonSateInitial();
            // もとの数値に戻す
            timer.textContent = '00:00.000';
            // 積み上げ時間のリセット
            elapsedTime = 0;
        });
    }
})();

