import { use } from "react";
import { useState, useEffect } from "react";

function ItemCounter(props) {
  const [count, setCount] = useState(1);
  const [isOn, setIsOn] = useState(true);

  const { onSubmitCount } = props;

  const handleAdd = () => {
    if (count === props.max) {
      alert("maxima cantiadad alcanzada");
    } else {
      setCount(count + 1);
    }
    console.log("suma");
  };

  const handleSubsTract = () => {
    console.log("resta");
    if (count < 2) {
      alert("Minima cantidad seleccionble alzanzada");
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    console.log("Funcion de montaje");
  }, []);

  console.log(count);

  return (
    <div className="handle">
      <button className="handleAdd" onClick={handleAdd}>
        ➕
      </button>
      <span>{count}</span>
      <button className="handleSubsTract" onClick={handleSubsTract}>
        ➖
      </button>

      <div>
        <button
          className="btn"
          onClick={() => {
            onSubmitCount(count);
          }}
        >
          Comprar
        </button>
      </div>

      {/* ejemplo de false y true botton */}
      {/* <div>
        <button onClick={() => setIsOn(!isOn)}> {String(isOn)} </button>
      </div> */}
    </div>
  );
}

export default ItemCounter;
