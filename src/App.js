import React, { useState } from 'react'
import "./App.css";
import { PaymentForm } from "./components/PaymentForm";
import { PaymentProvider } from "./PaymentContext";
import PayPal from "./components/PayPal";
import PayWithPayPal from './components/PayWIthPayPal';

function App() {

  const [checkout, setCheckOut] = useState(false)

  return (
    <>
      {checkout ? (
        <PayWithPayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </>
  );
}

export default App;
