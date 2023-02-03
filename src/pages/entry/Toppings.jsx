import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Toppings() {
  const [items, setItems] = useState([]);
  const [subTotal, setSubTotal] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/soslar`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleTop(e, item) {
    if (e.target.checked) {
      setSubTotal([...subTotal, item]);
    } else {
      const lol = subTotal.filter((i) => i.name !== item.name);
      setSubTotal(lol);
    }
  }
  console.log(subTotal);
  return (
    <div className="container">
      <h1 className="text-start my-4">Soslar</h1>
      <h2 className="text-start mb-1">Ücret: {subTotal.length * 2}</h2>

      <p className="lead text-start my-4">Tanesi 2$</p>
      <div className="row">
        {items.map((item) => (
          <div
            key={item.name}
            className="col-3 gap-2"
            style={{ maxWidth: '140px' }}
          >
            <img src={item.imagePath} alt="sos" className="w-100" />
            <p>{item.name}</p>
            <input
              type="checkbox"
              className="checkbox"
              style={{ width: '20px', height: '20px' }}
              onChange={(e) => handleTop(e, item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
