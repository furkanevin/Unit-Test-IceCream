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

  function handleBasket(item) {
    const filtred = basket.filter((i) => i.name !== item.name);
    setBasket(filtred);
  }
  return (
    <div className="container">
      <h1 className="text-start my-3">Çeşitler</h1>
      <h2 className="text-start mb-5" data-testid="ucret">
        Ucret: {basket.length * 3} $
      </h2>
      <p className="lead text-start">Tanesi 3$</p>
      <div className="row d-flex gap-4">
        {items.map((item) => {
          const amount = findAmount(item);
          return (
            <div
              key={item.name}
              className="col-3 gap-2 d-flex flex-column align-items-center mx-5"
              style={{ maxWidth: '150px' }}
            >
              <img src={item.imagePath} className="w-100" alt="cesit" />
              <label htmlFor={item.name}>{item.name}</label>
              <div className="d-flex gap-4 mt-4">
                <button
                  className="btn btn-danger"
                  onClick={() => handleBasket(item)}
                  id={`${item.name}-reset`}
                >
                  Sıfırla
                </button>

                <span className="lead mx-3">{amount}</span>

                <button
                  id={item.name}
                  className="btn btn-info"
                  onClick={() => setBasket([...basket, item])}
                >
                  Ekle
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
