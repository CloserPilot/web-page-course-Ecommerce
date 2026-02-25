import { api } from '../../api'
import { useState, useEffect } from 'react'
import { CheckoutHeader } from './CheckoutHeader'
import { OrderSummary } from './OrderSummary'
import { PaymentsSummary } from './PaymentsSummary'
import './CheckoutPage.css'


function CheckoutPage({ cart, loadCart }) {

  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckouData = async () => {
      const response =  await api.get('api/delivery?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);
    };
    fetchCheckouData();
  }, []);

  useEffect(() => {
    const loadCart = async () => {
      const response = await api.get('api/payment-summary');
      setPaymentSummary(response.data);
    };
    loadCart();
  },[cart])

  return (
    <>
      <title> Checkout </title>
      <CheckoutHeader paymentSummary={paymentSummary} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} paymentSummary={paymentSummary} loadCart={loadCart}/>
          <PaymentsSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
        </div>
      </div>
    </>
  )
}

export default CheckoutPage;