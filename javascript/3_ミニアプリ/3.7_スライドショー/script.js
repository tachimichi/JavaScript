(function () {
    'use strict';
    {
        const images = [
            'img/pic00.png',
            'img/pic01.png',
            'img/pic02.png',
            'img/pic03.png',
            'img/pic04.png',
            'img/pic05.png',
            'img/pic06.png',
            'img/pic07.png',
        ];
        let currentIndex = 0;
        // playボタン再生中かどうか判断フラグ
        let isPlaying = false;
        
        // id:mainのDOM要素（＝imgタグ）を取得する
        const mainImage = document.getElementById('main');
        // 配列[何番目]を、取得したmainのsrcに代入する
        mainImage.src = images[currentIndex];

        // サムネイルに画像を表示したい
        // 画像が配列なので、forEach文で処理
        images.forEach((image, index) => {

            // 中身の確認
            console.log('image: ' + image);
            console.log('index: ' + index);

            // img要素（空）の作成
            const img = document.createElement('img');
            // img要素のsrcに、配列の個々を代入
            img.src = image;

            // li要素（空）の作成
            const li = document.createElement('li');

            // ループ処理の番号と、currentIndexが一致した場合
            if(index === currentIndex) {
                // li要素にcurrentクラスを追加する
                // サムネイルをアクティブにするようにclassを指定
                li.classList.add('current');
            }
            // サムネイルをクリックしたときの処理
            li.addEventListener('click', () => {
                // クリックしたli要素の画像を、mainImageのsrcへ変更する
                mainImage.src = image;

                // li要素の情報を全て取得して、変数へ代入する
                const thumbnails = document.querySelectorAll('.thumbnails > li');
                // サムネイル（現在の番号）のクラスから、currentを削除
                thumbnails[currentIndex].classList.remove('current');
                // currentIndexに、indexを代入
                currentIndex = index;
                // サムネイル（現在の番号）のクラスに、currentを追加
                thumbnails[currentIndex].classList.add('current');

            });

            // li要素の子要素として、作成したimg要素を追加
            li.appendChild(img);
            // さらにサムネイルの子要素として、作成したliを追加する
            document.querySelector('.thumbnails').appendChild(li);
        });

        // nextボタンのDOM要素を取得する
        const next = document.getElementById('next');
        // nextボタン押下時の処理
        next.addEventListener('click', () => {
            // 次のサムネイル（current + 1)の変数を作成
            let target = currentIndex + 1;
            // targetが最後まで来たら、0に戻す
            if(target === images.length) {
                target = 0;
            }
            // 上記のループ処理で使用したclick()が再利用できる
            document.querySelectorAll('.thumbnails > li')[target].click();
        });
        
        // prevボタンのDOM要素を取得する
        const prev = document.getElementById('prev');
        // prevボタン押下時の処理
        prev.addEventListener('click', () => {
            // 前のサムネイル（current - 1)の変数を作成
            let target = currentIndex - 1;
            // targetが最初まできたら、最後(個数 - 1が配列の最後)に戻す
            if(target < 0) {
                target = images.length - 1;
            }
            // 上記のループ処理で使用したclick()が再利用できる
            document.querySelectorAll('.thumbnails > li')[target].click();
        });

        let timeoutId;

        function playSlideshow() {
            // 1000ミリ秒後（1秒）に、next.clickと同じ動作を繰り返す
            timeoutId = setTimeout(() => {
                next.click();
                playSlideshow();
            }, 500);
        }

        // playボタン押下時の処理
        // playのDOM情報を取得する
        const play = document.getElementById('play');
        // playボタンクリック時の処理
        play.addEventListener('click', () => {
            // 再生中かどうか自作フラグで判断
            if(isPlaying === false) {
                playSlideshow();
                play.textContent = 'Pause';
            } else {
                // play中のsetTimeoutを止める（引数：timeoutIdで管理する）
                clearTimeout(timeoutId);
                play.textContent = 'Play';
            }
            // ボタンがクリックされる度に、true/falseを切り替える
            isPlaying = !isPlaying;
        });

    }
})();