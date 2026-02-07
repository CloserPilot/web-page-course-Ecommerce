import './TrackingPage.css'
import { Header } from '../../Components'
import { Link } from 'react-router'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react';
import { api, fullURL } from '../../api'
import dayjs from 'dayjs';


function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await api.get(`/api/order/${orderId}?expand=product`);
      setOrder(response.data.order);
    };
    fetchOrder();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const product = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });

  return (
    <>
      <title>Tracking</title>

      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on {dayjs(product.estimatedDeliveryTimeMs).format('MMMM D')}
          </div>

          <div className="product-info">
            {product.product.name}
          </div>

          <div className="product-info">
            Quantity: {product.quantity}
          </div>

          <img className="product-image" src={`${fullURL}/${product.product.image}`} />

          <div className="progress-labels-container">
            <div className="progress-label">
              Preparing
            </div>
            <div className="progress-label current-status">
              Shipped
            </div>
            <div className="progress-label">
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default TrackingPage;