import { useState, useEffect } from "react";
import { API_GET_DATA } from "../../global/constants";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
function Home() {
  //step1 用useState 寫一個共同狀態（記事列表）
  const [data, setData] = useState([]);
  //useEffect綁定useState
  //拿後端資料
  useEffect(() => {
    // fetch("http://localhost:3000/posts/1")
    fetch(API_GET_DATA)
      .then((res) => res.json)
      .then((data) => console.log(data));
  }, [data]);
  return (
    <div className="app">
      {/* step4  將setData放進Edit*/}
      <Edit add={setData} />
      {/* step2. 把上面data放進來 */}
      {/* step11. 開始做刪除 將setData放進List*/}
      <List listData={data} deleteData={setData} />
    </div>
  );
}

export default Home;
