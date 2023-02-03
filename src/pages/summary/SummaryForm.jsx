import React, { useState } from 'react';

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <form className="m-4 row  justify-content-center align-items-center ">
        <div className=" col-4 d-flex gap-4">
          <input
            type="checkbox"
            id="termsCheck"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <p
            id="popup"
            style={{
              opacity: isVisible ? '1 ' : '0',
            }}
          >
            size gerçekten bir şey teslim etmeyeceğiz
          </p>
          <label
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            htmlFor="termsCheck"
          >
            Koşulları okudum ve kabul ediyorum
          </label>
        </div>

        <button
          className="btn btn-warning col-sm-2 col-md-1"
          disabled={!isChecked}
        >
          Siparişi Onayla
        </button>
      </form>
    </>
  );
};

export default SummaryForm;
