import React from 'react'
import './Styles/checkoutproduct.css'
import { useStateValue } from '../api/StateProvider'

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

  return (
    <div className='checkoutProduct flex my-[20px]  '>
    <img className='checkoutProduct__image' src={image} />

    <div className='checkoutProduct__info pl-[20px]'>
        <p className='checkoutProduct__title text-[17px] font-extrabold max-sm:font-normal max-sm:text-[10px]'>{title}</p>
        <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating flex">
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
            <button onClick={removeFromBasket}
            className='bg-[#f0c14b] border mt-[10px] text-[#111]'>Remove from Basket</button>
        )}
    </div>
</div>
  )
}

export default CheckoutProduct