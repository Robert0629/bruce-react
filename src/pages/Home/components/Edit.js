import { useState } from "react";
//step10. 下載uuid
import { v4 } from "uuid";

// step5. 將Home寫的add拿出來
function Edit({ add }) {
  //step6. 將下列各個input分別綁定useState
  const [note, setNote] = useState("");
  //step6.  要放入下列input中onchange的函式
  function changeNote(e) {
    setNote(e.target.value);
  }
  const [date, setDate] = useState("");
  function changeDate(e) {
    setDate(e.target.value);
  }
  const [time, setTime] = useState("");
  function changeTime(e) {
    setTime(e.target.value);
  }
  console.log(note, date, time);
  // step5. 寫一個新增事項的函示
  function addItem() {
    //step7. 寫一個函式接上一個值（一個空陣列）並將剛剛新增的三個值（變數）放入
    add(function (prevData) {
      return [
        {
          // step10. 加上id
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }
  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      {/*step6. 將上面usetate的note及函式放入 */}
      <input type="text" value={note} onChange={changeNote} />
      <p>日期：</p>
      <input type="date" value={date} onChange={changeDate} />
      <p>時間：</p>
      <input type="time" value={time} onChange={changeTime} />
      {/* step5. 新增點擊事件 將addItem函式帶入 */}
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
}

export default Edit;
