import Item from "./Item";

// step3. 將Home寫的listData拿出來 step11 將Home寫的deleteData拿出來
function List({ listData, deleteData }) {
  // 看有沒有成功拿到
  console.log("listData", listData);
  return (
    <div className="List">
      {/* 用map將item渲染出來 記得加key key必須是獨一無二的*/}
      {/* {listData.map((item) => (
        <Item key={item} />
      ))} */}
      {/* step9. 剛剛item的參數還沒有被傳入值  這邊將值取出 用解構的方式*/}
      {listData.map((item) => {
        const { note, date, time, id } = item;
        // step9.左邊的note是item.js的參數  step10.加上key
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
}

export default List;
