// 前提：JSは大文字小文字を区別するため気を付ける。
(function() { //即時関数
    'use strict';
    {
        const btn1 = document.getElementById('btn1');
        const count1 = document.getElementById('count1');
        var num1 = 0;

        btn1.addEventListener('click', () => {
            // 配列として作る。
            const results = ['大吉','中吉','凶','末吉','大凶'];

            // 0~2の値をおみくじに表示する。それのn番目を表示する。
            const n = Math.floor(Math.random() * results.length);
            btn1.textContent = results[n];
            
        });

        btn1.addEventListener('click', () => {
            num1++;
            count1.textContent = num1;
        });
    }

    {
        const btn2 = document.getElementById('btn2');
        const count2 = document.getElementById('count2');
        var num2 = 0;
        btn2.addEventListener('click', () => {
            // 0~4の値をおみくじに表示する。
            const n = Math.floor(Math.random() * 5);
            // switch文での処理（配列無し）
            switch (n) {
                case 0:
                    btn2.textContent = '大吉';
                    break;
                case 1:
                    btn2.textContent = '中吉';
                    break;
                case 2:
                    btn2.textContent = '凶';
                    break;
                case 3:
                    btn2.textContent = '末吉';
                    break;
                case 4:
                    btn2.textContent = '大凶';
                    break;
            }
        });
        btn2.addEventListener('click', () => {
            num2++;
            count2.textContent = num2;
        });
    }
        // Math.random()      ⇒0以上1未満
        // Math.random() * 3 ⇒0以上3未満
        // Math.floor(num)    ⇒小数点以下を切り捨てる
        // Math.floor(Math.random() * (n + 1))
        // ⇒一般公式
        // min + Math.floor(Math.random() * (max + 1 - min))
        // ⇒最小から最大値
})();