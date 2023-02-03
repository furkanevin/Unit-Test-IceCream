import React from 'react';
import Scoops from './Scoops';
import Toppings from './Toppings';
import SummaryForm from './../summary/SummaryForm';
import '../../index.css';
const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1 id="main-head">Dondurmanı Oluştur</h1>
      <Scoops />
      <Toppings />
      <SummaryForm />
    </div>
  );
};

export default WelcomePage;
