import { render, screen } from '@testing-library/react';
import Options from './../Options';

test('gelen her vceri için bir resim gösterir', async () => {
  render(<Options optionType="cesitler" />);

  //resimleri bul
  const resimler = await screen.findAllByRole('img', { name: /cesit/i });
  expect(resimler).toHaveLength(4);
});
