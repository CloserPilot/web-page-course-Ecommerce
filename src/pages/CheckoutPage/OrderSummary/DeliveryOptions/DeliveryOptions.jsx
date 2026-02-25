import dayjs from "dayjs"
import { formatMoney } from "../../../../utils"
import { fullURL, api } from '../../../../api'

function DeliveryOptions({deliveryOptions, cartItem, loadCart}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>

      {deliveryOptions.map((deliveryOption) => {
        let priceString = 'FREE Shiping'
        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)}- Shipping`
        }

        const updateDeliveryOption = async () =>{
          await api.put(`${fullURL}/api/cart/${cartItem.productId}`,{
            deliveryOptionId : deliveryOption.id
          });
          await loadCart();
        }
        return (
          <div key={deliveryOption.id} className="delivery-option" onClick={updateDeliveryOption}>
            <input type="radio"
              checked={cartItem.deliveryOptionId === deliveryOption.id}
              onChange={()=>{}}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.id}`} />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTime).format('dddd, MMMM D')}
              </div>
              <div className="delivery-option-price">
                {priceString}
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default DeliveryOptions;