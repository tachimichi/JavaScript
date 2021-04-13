// 前提：JSは大文字小文字を区別するため気を付ける。
(function(){ //即時関数
    'use strict';
    for (let i =0; i < 100; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        
        // iをdivのテキストの中に入れる。
        div.textContent = i;

        div.addEventListener('click', () => {
            div.classList.toggle('circle');
        });
        // divをbodyの子要素として追加したい
        document.body.appendChild(div);
    }

})();
