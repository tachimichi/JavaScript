// 前提：JSは大文字小文字を区別するため気を付ける。
(function() { //即時関数
    'use scrict';
    { //#1~3まで。spliceの使用方法解説
        // const source = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        // // Math.floor(Math.random() * (14 + 1));
        // // Math.floor(Math.random() * source.length);
        // console.log(Math.floor(Math.random() * source.length));
        // console.log(Math.floor(Math.random() * source.length));

        // const b =[];
        // // この時点では、配列の枠のみしか無い。
        // // 一応、コンソールでは、下で評価された値が表示されている。
        // console.log(b);
        // // splice(何番目, 何個)[0]⇒返り値が配列のため
        // // source[]からランダムに生成された番号から1個取り除き、b[0]として格納
        // b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        // console.log(b[0]);
        // console.log(b[1]);
        // console.log(b[2]);
        // console.log(b[3]);
        // console.log(b[4]);

        // b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        // console.log(b[0]);
        // console.log(b[1]);
        // console.log(b[2]);
        // console.log(b[3]);
        // console.log(b[4]);

        // b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        // console.log(b[0]);
        // console.log(b[1]);
        // console.log(b[2]);
        // console.log(b[3]);
        // console.log(b[4]);
        
        // b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        // console.log(b[0]);
        // console.log(b[1]);
        // console.log(b[2]);
        // console.log(b[3]);
        // console.log(b[4]);

        // b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        // console.log(b[0]);
        // console.log(b[1]);
        // console.log(b[2]);
        // console.log(b[3]);
        // console.log(b[4]);

        // console.log('-----------------');
        // // spliceで取り除いた値
        // console.log(b);
    }
    { // 列の作成（ループ処理で簡潔化）
        // // const source = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        // const source =[];
        // for(let i =0; i < 15; i++) {
        //     source[i] = i + 1;
        // }

        // const b =[];
        // // // splice(何番目, 何個)[0]⇒返り値が配列のため
        // for(i = 0; i < 5; i++) {
        //     b[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        // }
        // // spliceで取り除いた値
        // console.log(`B列の番号： $`);
    }
    { // 列の作成を関数化
        // function createColumn(col) {
        //     const source =[];
        //     for(let i =0; i < 15; i++) {
        //         // 1 ... 15
        //         // source[i] = i + 1 + 15 * 0;
        //         // 16 ... 30
        //         // source[i] = i + 1 + 15 * 1;
        //         // 31 ... 45
        //         // source[i] = i + 1 + 15 * 2;
        //         // 46 ... 60
        //         // source[i] = i + 1 + 15 * 3;
        //         source[i] = i + 1 + 15 * col;
        //     }
        //     const n =[];
        //     // splice(何番目, 何個)[0]⇒返り値が配列のため
        //     for(i = 0; i < 5; i++) {
        //         n[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        //     }
        //     // spliceで取り除いた値
        //     console.log(`n列の番号： ${n}`);
        //     // 関数を呼び出したときに値を返したい場合
        //     // （処理だけではなく、その結果を変数に入れたい）
        //     return n;
        // }
        // const columns = [];
        // columns[0] = createColumn(0);
        // columns[1] = createColumn(1);
        // columns[2] = createColumn(2);
        // columns[3] = createColumn(3);
        // columns[4] = createColumn(4);
        // // 真ん中をFREEにする
        // columns[2][2] = 'FREE';
        // // 配列の配列を表示する
        // console.table(columns);
    }
    { // 配列の行と列を反転させる
        function createColumn(col) {
            const source =[];
            for(let i =0; i < 15; i++) {
                source[i] = i + 1 + 15 * col;
            }

            const n =[];
            for(i = 0; i < 5; i++) {
                n[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
            }
            // spliceで取り除いた値（重複しないようにsplice）
            console.log(`n列の番号： ${n}`);
            // 関数を呼び出したときに値を返したい
            return n;
        }

        // n行作成するループ処理の関数
        function createColumns() {
            const columns = [];
            for(let i =0; i <5; i++) {
                columns[i] = createColumn(i);
            }
            // 真ん中をFREEにする
            columns[2][2] = 'FREE';
            // 関数は処理のみ（値を関数外で使用したい）
            return columns;
        }

        // ビンゴを作成する関数（行と列の入れ替え）
        function createBingo() {
            // 配列（の配列）を反転させたい
            const bingo = [];
            // 行（row）の数だけループ処理
            for(let row = 0; row < 5; row++) {
                // 個々の行自体も配列のため、宣言
                bingo[row] = [];
                // 5列分、入れ替え処理を行うためループ処理
                for(let col = 0; col < 5; col++) {
                    // 新[行][列] = 旧[列][行]として入れ替える
                    bingo[row][col] = columns[col][row];
                }
            }
            // 配列の配列を表示する
            console.table(bingo);
            // 関数は処理のみ（値を関数外で使用したい）
            return bingo;
        }
        
        // DOM操作によるtr,td要素の生成
        function renderBingo(bingo) {
            // ④n行作成できるようにループ処理に対応
            for(let row = 0; row < 5; row++) {
                // ③JSでtr要素（行要素）を作成する記述を行う
                const tr = document.createElement('tr');
                //
                for(let col =0; col < 5; col++) {
                    // td要素（row行目のcol列目のセル）の作成
                    const td = document.createElement('td');
                    td.textContent = bingo[row][col];
                    // 親要素(tr：行要素)をもとに、子要素として追加
                    tr.appendChild(td);
                    // さらに親要素(tbody：ボディ要素)をもとに、子要素（tr：行）を追加
                    document.querySelector('tbody').appendChild(tr);
                }
            }
        }

        const columns = createColumns();
        // 配列の配列を表示する
        console.table(columns);
        const bingo = createBingo(columns);
        renderBingo(bingo);


    }
    { // HTMLにマークアップしていく
        // ①テーブルタグを追加し、内側にtheadタグやtr,thタグを追加
        // ②CSSでスタイルを追加する
        // ③JSでtr要素を作成する記述を行う
        // ④n行作成できるようにループ処理に対応
    }

})();