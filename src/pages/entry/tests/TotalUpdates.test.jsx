import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Scoops from '../Scoops';

test.skip('çeşitlerin fiyat toplamının değişimini gösterir', async () => {
  const user = userEvent.setup();
  render(<Scoops />);

  //fiyat 0 tl den başlasın
  const cesitlerFiyat = screen.getByText('Çeşitler toplamı: $', {
    exact: false, //aynısı olmasa bile
  });
  expect(cesitlerFiyat).toHaveTextContent('0.00');
  //bir tane vanilyalı ekle fiyatı kontrol et
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'vanilya',
  });
  await user.clear(vanillaInput); //0 ın sağına veya solunu basabiilir o yüzden clear yap
  await user.type(vanillaInput, '1');
  expect(cesitlerFiyat).toHaveTextContent('2.00');
  //iki tane çikolatalı ekle fiyatı kontrol et
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'cikolata',
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, '2');
  expect(cesitlerFiyat).toHaveTextContent('6.00');
});
