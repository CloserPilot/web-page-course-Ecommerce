import { api } from '../../api'
import { useState, useEffect } from 'react'
import { CheckoutHeader } from './CheckoutHeader'
import { OrderSummary } from './OrderSummary'
import { PaymentsSummary } from './PaymentsSummary'
import './CheckoutPage.css'


function CheckoutPage({ cart }) {

  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    api.get('api/delivery?expand=estimatedDeliveryTime').then((response) => {
      setDeliveryOptions(response.data);
    });

    api.get('api/payment-summary').then((response) => {
      setPaymentSummary(response.data);
    })
  }, []);

  return (
    <>
      <title> Checkout </title>
      <CheckoutHeader paymentSummary={paymentSummary} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} paymentSummary={paymentSummary} />
          <PaymentsSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  )
}

export default CheckoutPage;