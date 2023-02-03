import { render, screen } from '@testing-library/react';
import Scoops from './../Scoops';
import Toppings from './../Toppings';

test('API den gelen her çeşit verisi için bir resim gösterir', async () => {
  render(<Scoops />);

  //Çeşitlerde resimleri bul
  const resimler = await screen.findAllByRole('img', { name: /cesit/i });
  expect(resimler).toHaveLength(4);
});

test('API den gelen her sos için bir resim gösterir', async () => {
  render(<Toppings />);

  //Soslarda resimleri bul
  const resimler = await screen.findAllByRole('img', { name: /sos/i });
  expect(resimler).toHaveLength(6);
});
