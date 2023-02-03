import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  // gelen başlığa göre veriyi çeker
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [optionType]);

  console.log(items);
  // if (optionType !== 'cesitler') return 'loading';

  return (
    <>
      {items.map((item) => (
        <div key={item.name}>
          {/* image pathte "/"  var */}
          <img
            src={`http://localhost:3000${item.imagePath}`}
            alt={optionType == 'cesitler' ? 'cesit' : 'sos'}
          />
        </div>
      ))}
    </>
  );
}
