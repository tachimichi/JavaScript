// 前提：JSは大文字小文字を区別するため気を付ける。
(function(){ //即時関数
    // 厳しくチェックする
    'use strict';

    const num = 5;
    // 0以上num未満の数字を生成してくれる
    // Math.flloaで少数点を切り捨てる
    const winner = Math.floor(Math.random() * num); // 0-4


    for (let i =0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('box');

        div.addEventListener('click', () => {
            if(i === winner) {
                div.textContent = 'Win!';
                div.classList.add('win');
            } else {
                div.textContent = 'Lose!!';
                div.classList.add('lose');
            }
        });
        // divをbodyの子要素として追加したい
        document.body.appendChild(div);
    }

})();
