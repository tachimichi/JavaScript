// 前提：JSは大文字小文字を区別するため気を付ける。
(function(){ //即時関数
    'use strict';

    // document.getElementById('target')
    // ⇒id('target')の要素を指定。
    const target1 = document.getElementById('target1');
    const target2 = document.getElementById('target2');
    const target3 = document.getElementById('target3');
 
    // addEventListener
    // ⇒何かのイベントが起きたとき、次の処理を行う
    target1.addEventListener('click', () =>{
        // document.getElementById('target').style.background = 'pink';
        // document.getElementById('target').style.borderRadius = '50%';

        // ターゲットで取得した要素のクラスにcircleを追加する
        target1.classList.toggle('circle');
    });
    target2.addEventListener('click', () =>{
        target2.classList.toggle('circle');
    });
    target3.addEventListener('click', () =>{
        target3.classList.toggle('circle');
    });
    


})();
