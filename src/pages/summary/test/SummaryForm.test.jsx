import { render, fireEvent, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('checkboxa tıklandığında buton aktif olur', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const termsCheck = screen.getByRole('checkbox', {
    name: 'Koşulları okudum ve kabul ediyorum',
  });
  const orderBtn = screen.getByRole('button', {
    name: 'Siparişi Onayla',
  });
  //sayfa yüklendiğinde tikli olmasın
  expect(termsCheck).not.toBeChecked();
  expect(orderBtn).toBeDisabled();
  //enable olma
  await user.click(termsCheck);
  expect(orderBtn).toBeEnabled();
  //disable olma
  await user.click(termsCheck);
  expect(orderBtn).toBeDisabled();
});

test('üstüne gelince bilgilendirme çıkıyor', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const termsLabel = screen.getByText('Koşulları okudum ve kabul ediyorum');

  //mouse üstüne gelince ortaya çıkıyor
  await user.hover(termsLabel);
  const popup = screen.getByText(/size gerçekten bir şey teslim etmeyeceğiz/i);
  expect(popup).toBeVisible();
  //hover gitti
  await user.unhover(termsLabel);
  expect(popup).not.toBeVisible();
});
