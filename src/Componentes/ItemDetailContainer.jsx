import { useState, useEffect } from "react";
import { getAsyncItemById } from "../../data/getAsyncData";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const params = useParams();
  const [itemInfo, setItemInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getItemData() {
      const response = await getAsyncItemById(id);
      setItemInfo(response);
    }
    getItemData();
  }, [id]);

  console.log(itemInfo);

  return (
    <div className="cardos">
      {" "}
      <ItemDetail {...itemInfo} />{" "}
    </div>
  );
}

export default ItemDetailContainer;
