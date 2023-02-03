import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Scoops() {
  const [items, setItems] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/cesitler`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  function findAmount(cesit) {
    const sum = basket.filter((item) => item.name === cesit.name);
    return sum.length;
  }

  return (
    <div className="container">
      <h1 className="text-start my-4">Çeşitler</h1>
      <h2 className="text-start mb-5">Ücret: {basket.length * 3} $</h2>
      <p className="lead text-start">Tanesi 3$</p>
      <div className="row d-flex gap-4">
        {items.map((item) => {
          const amount = findAmount(item);
          return (
            <div
              key={item.name}
              className="col-3 gap-2"
              style={{ maxWidth: '200px' }}
            >
              <img src={item.imagePath} className="w-100" alt="cesit" />
              <p>{item.name}</p>

              <span className="lead mx-3">{amount}</span>
              <button
                className="btn btn-info"
                onClick={() => setBasket([...basket, item])}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
