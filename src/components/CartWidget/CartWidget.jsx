import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
  return (
    <div class="cart">
        <FontAwesomeIcon icon={faCartShopping} />
        4
    </div>
  )
}

export default CartWidget