import dayjs from "dayjs"
import { formatMoney } from "../../../../utils"

function DeliveryOptions({deliveryOptions, cartItem}) {
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

        return (
          <div key={deliveryOption.id} className="delivery-option">
            <input type="radio"
              checked={cartItem.deliveryOptionId === deliveryOption.id}
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