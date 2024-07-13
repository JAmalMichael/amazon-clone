import React from 'react'
import './Styles/subtotal.css'
import { NumericFormat } from 'react-number-format' 
import { useStateValue } from '../api/StateProvider'
import { useNavigate } from 'react-router-dom'
import { getBasketTotal } from '../api/reducer'

function SubTotal() {

    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();

  return (
            <div className="subtotal flex flex-col justify-between w-[300px] h-[400px] p-[20px]
             bg-[#f3f3f3] border-[3px] border-[#dddddd] max-sm:w-[150px] max-sm:h-[200px]">
             <NumericFormat
                    renderText={(value) => (
                    <div>
                        <p>
                        Subtotal ({basket.length} items): <strong>{`$ ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType="text"
                    thousandSeparator=","
           />

            <button className='bg-[#f0c14b] b-[2px] mt-[10px] text-[#111] h-[30px] 
            w-100%] max-sm:text-[10px]'>Proceed to Checkout</button>
        </div>
  )
}

export default SubTotal