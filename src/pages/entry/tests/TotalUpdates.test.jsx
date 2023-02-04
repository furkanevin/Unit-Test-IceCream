import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Scoops from '../Scoops';

test('çeşitlerin fiyat toplamının değişimini gösterir', async () => {
  const user = userEvent.setup();
  render(<Scoops />);

  //! fiyat 0 tl den başlasın
  const cesitlerFiyat = screen.getByTestId('ucret');
  expect(cesitlerFiyat).toHaveTextContent('0');

  //! bir tane vanilyalı ekle fiyatı kontrol et
  const vanillaBtn = await screen.findByRole('button', {
    name: 'Vanilla',
  });
  await user.click(vanillaBtn);

  expect(cesitlerFiyat).toHaveTextContent('3');

  //! iki tane çikolatalı ekle fiyatı kontrol et
  const chocolateBtn = await screen.findByRole('button', {
    name: 'Chocolate',
  });

  await user.dblClick(chocolateBtn);
  expect(cesitlerFiyat).toHaveTextContent('9');

  //! Sıfırlamayı test et
  const [delMint, DelVanilla, DelChoco, DelCaramel] =
    await screen.findAllByRole('button', {
      name: 'Sıfırla',
    });
  await user.click(DelChoco);
  expect(cesitlerFiyat).toHaveTextContent('3');
});
