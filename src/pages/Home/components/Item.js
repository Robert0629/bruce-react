//step8. 將要顯示在頁面上的值設一個新的參數 可取相同名稱
function Item({ id, note, date, time, deleteData }) {

  function deleteItem() {
    deleteData(function (prev) {
        //看不懂
      return prev.filter((item) => item.id !== id);
    });
  }
  
  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">
        刪除
      </button>
    </div>
  );
}

export default Item;
