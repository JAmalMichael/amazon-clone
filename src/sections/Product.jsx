import React from 'react'
import './Styles/product.css';
import { useStateValue } from '../api/StateProvider';



function Product({ id, title, image, price, rating }) {

  const [{basket}, dispatch] = useStateValue();


  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product  max-sm:w-[80%] max-sm:mx-auto max-sm:h-[400px] 
    max-sm:justify-around max-md:h-[500px] max-md:justify-around">
    <div className="product__info">
      <p>{title}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>🌟</p>
          ))}
      </div>
    </div>

    <img src={image} alt="" className=' max-sm:mt-4 max-sm:w-[60%] max-sm:h-[100px] max-md:h-[150px]'/>

    <button onClick={addToBasket}>Add to Basket</button>
  </div>
  )
}

export default Product