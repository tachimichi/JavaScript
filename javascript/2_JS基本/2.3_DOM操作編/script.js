// 前提：JSは大文字小文字を区別するため気を付ける。
(function() { //即時関数
    'use strict';
    { // DOM
        // ブラウザの仕組み
        // HTMLを読み込むと、内部的にDOMというデータ構造が作成される。
        // ⇒その内容に応じてページが描画される。
        // JSが操作しているのはDOM（Not HTML）

        // HTMLをDOMで表現⇒ツリー状（大元はdocument）
        // ツリー状の個々のデータをNodeと呼ぶ。
        // 改行や空白もNode
        // 親Node、子Node、兄弟Node
    }
    {  // 要素の操作
        // function update() {
        // 最初の要素しか適用されない
        //     // document.querySelector('h1').textContent = 'Changed';
        //     // document.querySelector('#target').textContent = 'Changed';
        //     document.getElementById('target').textContent = 'Changed';
        // }

        // // 1秒後
        // setTimeout(update, 1000);
    }
    { // 複数要素を取得する
        // function update() {
        //     // 配列みたいに[i]で指定or全部
        //     document.querySelectorAll('h4')[1].textContent = 'Changed';
        //     // forEachで全部の値を制御
        //     // ⇒リストに含まれる要素の個々に対して、操作を行う
        //     document.querySelectorAll('p').forEach((p, index) => {
        //         p.textContent = `${index}番目のpです`;
        //     });
        // }
        // // 1秒後
        // setTimeout(update, 1000);
    }
    { // 要素を取得する方法
        // id属性⇒getElementById('id)
        // 一つの要素を取得するなら⇒querySelector('section h1')
        //  複数の要素（リストとして）取得⇒querySelectorAll('ul > li')
        // その他　⇒getElementByTagName('h1)
        // その他　⇒getElementByClassName('box')
    }
    { // addEventListener
        // document.querySelector('button').addEventListener('click', () => {
        //     document.getElementById('target').textContent = 'Changed';
        // });
    }
    { // 要素の属性の操作
        // document.querySelector('button').addEventListener('click', () => {

        //     const targetNode = document.getElementById('target');
        //     targetNode.textContent = 'Changed';
        //     targetNode.title = 'This is Title';

        //     // // my-border⇒my-colorへ変更
        //     // targetNode.className = 'my-color';

        //     // my-borderを保持しつつ、my-colorを追加
        //     // targetNode.className = 'my-color my-border';
        //     targetNode.classList.add('my-color');

        // });
    }
    { // 要素の属性の操作
        // document.querySelector('button').addEventListener('click', () => {
        //     const targetNode = document.getElementById('target');
        //     targetNode.textContent = 'Changed';
        //     targetNode.title = 'This is Title';

        //     // containsでクラスがあるかどうかtrue/falseで返す
        //     if(targetNode.classList.contains('my-color') === true) {
        //         targetNode.classList.remove('my-color');
        //     } else {
        //         // my-borderを保持しつつ、my-colorを追加
        //         targetNode.classList.add('my-color');
        //     }
        // });
    }
    { //カスタムデータ属性
        // document.querySelector('button').addEventListener('click', () => {
        //     const targetNode = document.getElementById('target');
        //     // targetNode.textContent = 'changed by Dotinstall';
        //     // HTMLのh1タグのカスタムデータタグから引っ張る
        //     targetNode.textContent = targetNode.dataset.translation;
        // });
    }
    { // 要素の追加
        // // ①li要素の作成
        // // ②中身のテキストを設定
        // // ③DOMツリーに追加する
        //     document.querySelector('button').addEventListener('click', () => {
        //         const item2 = document.createElement('li');
        //         // リストを作成
        //         item2.textContent = 'item 2';

        //         const ulNode = document.querySelector('ul');
        //         // 作成したリストをDOMツリーに追加
        //         ulNode.appendChild(item2);
        // });
    }
    { // 要素の複製、挿入
        // ①要素を複製
        // ②DOMツリーに追加する
        //     document.querySelector('button').addEventListener('click', () => {
        //         const item0 = document.querySelectorAll('li')[0];
        //         // リスト[0]を複製。clone(trueなら情報を保持してコピー)
        //         const copy = item0.cloneNode(true);

        //         // ul（親要素）のDOM情報を取得
        //         const ul = document.querySelector('ul');
        //         // item2のDOM情報を取得
        //         const item2 = document.querySelectorAll('li')[2];
        //         // copyをitem2の前に挿入
        //         ul.insertBefore(copy, item2);

        // });
    }
    { // 要素の削除
    //     document.querySelector('button').addEventListener('click', () => {
    //         const item1 = document.querySelectorAll('li')[1];
    //         // ①要素を削除
    //         // item1.remove();
    //         // ②親Node.removeChild(削除するNode)
    //         document.querySelector('ul').removeChild(item1);
    // });
    }
    { // input要素の操作
        // document.querySelector('button').addEventListener('click', () => {
        //     // li要素の作成
        //     const li = document.createElement('li');
        //     // inputのDOM情報を取得
        //     const text = document.querySelector('input');
        //     // 入力された情報をli要素のテキストに格納
        //     li.textContent = text.value;
        //     // ulを親要素として、li要素を追加
        //     document.querySelector('ul').appendChild(li);

        //     text.value = '';
        //     text.focus();
        // });
    }
    { // セレクトボックス
        document.querySelector('button').addEventListener('click', () => {
            // // li要素の作成
            // const li = document.createElement('li');
            // // セレクトボックスのDOM情報を取得
            // const color = document.querySelector('select');
            // // li要素のテキストに、colorのvalueと何番目の要素かどうか記入
            // li.textContent = `${color.value} - ${color.selectedIndex}`;
            // // ulを親要素として、li要素を追加
            // document.querySelector('ul').appendChild(li);
        });
    }
    { // ラジオボタン
        // document.querySelector('button').addEventListener('click', () => {
        //     // 全てのinput要素を取得する
        //     const colors = document.querySelectorAll('input');
        //     // 選択された情報を保持する変数
        //     let selectedColor;

        //     // colorsにループ処理
        //     colors.forEach(color => {
        //         if(color.checked === true) {
        //             // チェック入っているcolorのvalue要素を取得する
        //             selectedColor = color.value;
        //         }
        //     });

        //     // チェックが選択されていない時の処理
        //     alert('選択されたラジオボタンのvalue要素のタイプ: ' + typeof selectedColor);
        //     if (typeof selectedColor === 'undefined') {
        //         alert('Not selected!');
        //         return;
        //     }

        //     // li要素を作成する
        //     const li = document.createElement('li');
        //     li.textContent = selectedColor;
        //     //作成したli要素を親要素ulの下に追加する
        //     document.querySelector('ul').appendChild(li);

        //     // ①ラジオボタンを初期化する
        //     const button = document.querySelector(`input[value=${selectedColor}]`);
        //     button.checked = false;
        //     // // ②ラジオボタンを初期化する
        //     // colors.forEach(color => {
        //     //     if(color.checked === true) {
        //     //         // チェック入っているcolorのチェックを外す
        //     //         color.checked = false;
        //     //     }
        //     // });
        // });
    }
    { // チェックボックス
        // document.querySelector('button').addEventListener('click', () => {
        //     // 全てのinput要素を取得
        //     const colors = document.querySelectorAll('input');
        //     // 複数選択可⇒配列として保持
        //     const selectedColors = [];

        //     colors.forEach(color => {
        //         if(color.checked === true) {
        //             // 配列に追加したい⇒push
        //             selectedColors.push(color.value);
        //         }
        //     });

        //     // チェックが選択されていない時の処理
        //     // 配列なので、true/falseではなく要素数が0個かどうか
        //     alert('選択されたセレクトボックスの要素数: ' + selectedColors.length);
        //     if (selectedColors.length === 0) {
        //         alert('Not selected!');
        //         return;
        //     }


        //     // li要素を作成する
        //     const li = document.createElement('li');
        //     li.textContent = selectedColors.join(', ');
        //     //作成したli要素を親要素ulの下に追加する
        //     document.querySelector('ul').appendChild(li);
        
        //     // ②チェックボックスを初期化する
        //     colors.forEach(color => {
        //         if(color.checked === true) {
        //             // チェック入っているcolorのチェックを外す
        //             color.checked = false;
        //         }
        //     });
        // });
    }

    { // イベント
        // document.querySelector('button').addEventListener('dblclick', () => {
        //     console.log('double clicked');

        // });
        // document.addEventListener('mousemove', () => {
        //     console.log(`moved`);
        // });
    }
    { // イベントオブジェクトの扱い
        // // マウスカーソルの座標の取得
        // document.addEventListener('mousemove', e => {
        //     console.log(e.clientX, e.clientY);
        // });
        // // キーボードの情報取得
        // document.addEventListener('keydown', e => {
        //     console.log(e.key);
        // });
    }
    { // フォーム部品
        // // フォーカスしたとき
        // const text =document.querySelector('textarea');
        // text.addEventListener('focus', () => {
        //     console.log('focus');
        // });
        // // フォーカスが外れたとき
        // text.addEventListener('blur', () =>{
        //     console.log('blur');
        // });
        // // テキストエリアに入力されたとき
        // text.addEventListener('input', () =>{
        //     console.log(`入力文字数：${text.value.length}`);
        // });
        // // 入力項目が変化したとき
        // text.addEventListener('change', () =>{
        //     console.log('changed');
        // });
    }
    { // フォームの送信
        // document.querySelector('form').addEventListener('submit', e => {
        //     // 既定の処理を無効化（ページ遷移等）
        //     e.preventDefault();
        //     console.log('submitted');
        // });
    }
    { // イベントの伝播
        document.querySelector('ul').addEventListener('click', e => {
            console.log(e.target.nodeName);
            console.log(e.target);
            console.log(e.currentTarget.nodeName);
            console.log(e.currentTarget);
            // e.targetノード名がLIの場合
            if(e.target.nodeName === 'LI') {
                e.target.classList.toggle('done');
            }
        });
    }
})();