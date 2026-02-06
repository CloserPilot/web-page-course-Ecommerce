import { Link } from 'react-router';
import { fullURL } from '../../api'
import './Header.css';

function Header({cart}) {
  let totalQuantity = 0;

  cart.forEach((cartElement) => {
    totalQuantity += cartElement.quantity;
  });

  return (
   <div className="header">
    <div className="left-section">
      <Link to="/" className="header-link">
        <img className="logo" src= {`${fullURL}/images/logo-white.png`} />
        <img className="mobile-logo" src={`${fullURL}/images/mobile-logo-white.png`} />
      </Link>
    </div>

    <div className="middle-section">
      <input className="search-bar" type="text" placeholder="Search" />

      <button className="search-button">
        <img className="search-icon" src= {`${fullURL}/images/icons/search-icon.png`} />
      </button>
    </div>

    <div className="right-section">
      <Link className="orders-link header-link" to="/orders">

        <span className="orders-text">Orders</span>
      </Link>

      <Link className="cart-link header-link" to="/checkout">
        <img className="cart-icon" src={`${fullURL}/images/icons/cart-icon.png`} />
        <div className="cart-quantity">{totalQuantity}</div>
        <div className="cart-text">Cart</div>
      </Link>
    </div>
  </div>
  )
}

export default Header;