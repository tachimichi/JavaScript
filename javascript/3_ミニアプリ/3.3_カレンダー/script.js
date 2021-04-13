(function() { //即時関数
    'use scrict';
    // コンソールの初期化（推奨）
    console.clear();
    {
        const today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth(); // JSでは12月（0~11月）

        function getCalendarHead() {
            const dates = [];
            // 今月(12)の0日目（先月の末日）を指定。
            const d = new Date(year, month, 0).getDate();
            // 先月の最終週（日数）は、今月1日の曜日（0~6)と一致する。
            const n = new Date(year, month, 1).getDay();

            for(let i = 0; i < n; i++) {
                // 30:                   d（先月の末日）
                // 29, 30:              d - 1（先月の末日 - 1）
                // 28, 29, 30:         d - 2（先月の末日 - 2）
                dates.unshift({
                    // unshift⇒先頭に追加する
                    date: d - i,
                    isToday: false,
                    isDisabled: true,
                });
            }
            // 先月分の日数の確認
            console.log('先月分：');
            console.log(dates);

            // このままだと、コンソールに表示のみになるからreturn
            return dates;
        }

        function getCalendarBody() {
            const dates = []; // date: 日付, day: 曜日
            // 翌月（12 + 1）の0日目（今月の末日）を指定。
            // ⇒12/31（今月の末日）を取得する
            const lastDate = new Date(year, month + 1, 0).getDate();
            console.log(`翌月の0日目（＝今月の末日）は、${lastDate}`);

            // 1~lastDateまでループ処理。（＝プッシュ）
            for(let i = 1; i <= lastDate; i++) {
                dates.push({
                    // オブジェクトの配列
                    date: i,
                    isToday: false,
                    isDisabled: false,
                });
            }

            if(year === today.getFullYear() && month === today.getMonth()) {
                // 今日の日付を太字にする
                dates[today.getDate() - 1].isToday = true;
            }

            console.log('今月分：');
            console.log(dates);

            // このままだと、コンソールに表示のみになるからreturn
            return dates;
        }

        function getCalendarTail() {
            const dates = [];
            // 翌月の0日目（＝今月末日）の曜日（0~6単位）
            const lastDay = new Date(year, month + 1, 0).getDay();

            // i = 0だと、1個多くなる
            for(let i = 1; i < 7 - lastDay; i++) {
                // push⇒最後の要素として追加
                dates.push({
                    date: i,
                    isToday: false,
                    isDisabled: true,
                });
            }
            // 翌月の先頭週の確認
            console.log('翌月分：');
            console.log(dates);

            // このままだと、コンソールに表示のみになるからreturn
            return dates;
        }

        function clearCalendar () {
            // tbodyのDOM情報を取得する
            const tbody = document.querySelector('tbody');
            // tbodyに最初の子要素がある限り、
            while(tbody.firstChild) {
                // 最初の子要素を削除する
                tbody.removeChild(tbody.firstChild);
            }
        }

        function renderTitle() {
            // String(n).padStart(2, '0')　⇒　Not2桁,0を先頭に足す
            const title = `${year}/${String(month + 1).padStart(2, '0')}`;
            document.getElementById('title').textContent = title;
        }

        function renderWeeks() {
            // 全ての関数の結果を統合したい
            // スプレッド構文⇒配列の中の配列をなくしたい
            const dates = [
                ...getCalendarHead(),
                ...getCalendarBody(),
                ...getCalendarTail(),
            ];
            // 週ごとに配列を作成する。
            const weeks = [];
            const weeksCount = dates.length / 7;

            for(let i = 0; i < weeksCount; i++) {
                // 先頭から7個分データをweeksにpushする
                // （使用済みデータは移行（コピーではない））
                weeks.push(dates.splice(0, 7));
                // weeks[i] = dates.splice(0, 7);
            }
            // console.log(dates);
            // 週ごとのデータを確認する
            console.log(weeks);

            // weekごとにHTMLに記述したい
            weeks.forEach(week => {
                // weekごとに行を作成したい
                const tr = document.createElement('tr');
                // weekに対して、ループ処理（セルの作成）
                week.forEach(date => {
                    const td = document.createElement('td');
                    // セルに対して、date（個々）のdate（日付）をテキストとして挿入
                    td.textContent = date.date;
                    if(date.isToday) {
                        td.classList.add('today');
                    }
                    if(date.isDisabled) {
                        td.classList.add('disabled');
                    }
                    // tr要素の子要素としてtdを追加する
                    tr.appendChild(td);
                });
                // 作成したtrをtbody要素の子要素として追加
                document.querySelector('tbody').appendChild(tr);
            });
        }

        function createCalendar() {
            clearCalendar();
            renderTitle();
            renderWeeks();
        }

        // prevの処理
        document.getElementById('prev').addEventListener('click', () => {
            // 当月 - 1をする。
            month--;
            // 1月から12月への処理
            if(month < 0) {
                year--;
                month = 11;
            }
            // カレンダーの再描画
            createCalendar();
        });

        // todayの処理
        document.getElementById('today').addEventListener('click', () => {
            year = today.getFullYear();
            month = today.getMonth();
            // カレンダーの再描画
            createCalendar();
        });

        // nextの処理
        document.getElementById('next').addEventListener('click', () => {
            // 当月 - 1をする。
            month++;
            // 1月から12月への処理
            if(month > 11) {
                year++;
                month = 0;
            }
            // カレンダーの再描画
            createCalendar();
        });

        createCalendar();
    }
})();