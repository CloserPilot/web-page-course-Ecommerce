import { fullURL } from "../../../api"
import { Link } from 'react-router'
import './CheckoutHeader.css'


function CheckoutHeader({paymentSummary}) {
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src={`${fullURL}/images/logo.png`} />
            <img className="mobile-logo" src={`${fullURL}/images/mobile-logo.png`} />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<Link className="return-to-home-link"
            to="/">{paymentSummary?.totalitems ?? 0} items</Link>)
        </div>

        <div className="checkout-header-right-section">
          <img src={`${fullURL}/images/icons/checkout-lock-icon.png`} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutHeader;