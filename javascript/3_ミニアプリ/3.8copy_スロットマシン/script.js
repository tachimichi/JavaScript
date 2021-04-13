(function () {
    'use strict';
    {
        class Panel {
            constructor() {
                // sectionはこのコンストでしか使用しないためconstを使用
                const section = document.createElement('section');
                // section要素にpanelクラスを追加する
                section.classList.add('panel');

                // thisの理由：このクラスの他のメソッドから呼び出したいから
                this.img = document.createElement('img');
                this.img.src = this.getRandomImage();   // 初期画面もランダム

                this.timeoutId = undefined;


                // div要素を作成する
                this.stop = document.createElement('div');
                // div要素のテキストに、STOPを追加する
                this.stop.textContent = 'STOP';
                // div要素に、stopクラスを追加する
                this.stop.classList.add('stop', 'inactive');
                // STOPボタン押下時の処理
                this.stop.addEventListener('click', () => {
                    // 既にinactiveクラスがある場合
                    if(this.stop.classList.contains('inactive')) {
                        return;
                    }
                    // inactiveクラスの追加（2重で押せないように）
                    this.stop.classList.add('inactive');
                    // 回転を停止する
                    clearTimeout(this.timeoutId);
                    // activeなパネルの数の残りを計算
                    panelsLeft--;
                    // 0になった場合
                    if(panelsLeft === 0) {
                        // spinボタンを活性化
                        spin.classList.remove('inactive');
                        // 残りパネル数のリセット
                        panelsLeft = 3;
                        // 結果の判定処理を呼び出す
                        checkResult();
                    }
                
                });

                // section要素に下記2つを追加する
                section.appendChild(this.img);
                section.appendChild(this.stop);

                // main要素を取得し、直下にsection要素を追加する
                const main = document.querySelector('main');
                main.appendChild(section);
            }

            // クラスのメソッド定義に、functionは必要ない
            getRandomImage() {
                const images = [
                    'img/seven.png',
                    'img/bell.png',
                    'img/cherry.png',
                ];
                // 0 ~ 1 * 配列の数　⇒　配列のn番目
                return images[Math.floor(Math.random() * images.length)];
            }

            spin() {
                // getRandomImage()の結果をsrcに代入する
                this.img.src = this.getRandomImage();
                // 返り値（識別ID）を値に代入
                this.timeoutId = setTimeout(() => {
                    this.spin();
                }, 37.5);
            }

            // 比較するべき他の2つ（0に対する1,2）をp1, p2で受け取る
            isUnmatched(p1, p2) {
                // 主が副1と異なる and 主が副2と異なる場合
                // if(this.img.src !== p1.img.src && this.img.src !== p2.img.src) {
                //     return true;
                // } else {
                //     return false;
                // }

                // a && b ⇒ aもbも不一致の場合のみtrue
                return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
            }

            // マッチしなかった（余り1）の処理
            unmatch() {
                this.img.classList.add('unmatched');
            }

            activate() {
                // imgとstopボタンのクラスを除去
                this.img.classList.remove('unmatched');
                this.stop.classList.remove('inactive');
            }


        }

        // 最後のストップボタンを押すとcheckResult発動
        function checkResult() {
            // 主（panels[0]）が他の2枚とマッチしなかった場合
            if(panels[0].isUnmatched(panels[1], panels[2])) {
                panels[0].unmatch();
            }
            // 主（panels[1]）が他の2枚とマッチしなかった場合
            if(panels[1].isUnmatched(panels[0], panels[2])) {
                panels[1].unmatch();
            }
            // 主（panels[2]）が他の2枚とマッチしなかった場合
            if(panels[2].isUnmatched(panels[0], panels[1])) {
                panels[2].unmatch();
            }
        }

        // コンストラクタを表示するためのインスタンスを作成
        // →new Panel()の時点で、Panelクラスのコンストラクタが呼び出される
        const panels = [
            new Panel(),
            new Panel(),
            new Panel(),
        ];

        let panelsLeft = 3;

        // #spinのDOM要素を取得する
        const spin = document.getElementById('spin');
        // spinをクリック時の処理
        spin.addEventListener('click', () =>{
            // 既にinactiveクラスがある場合、returnで処理を強制終了
            if(spin.classList.contains('inactive')) {
                return;
            }
            // inactiveクラスの追加
            spin.classList.add('inactive');
            // 各パネルごとに処理
            panels.forEach(panel => {
                // 
                panel.activate();
                // リールの回転処理
                panel.spin();
            });
        });

    }
})();