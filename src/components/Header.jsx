import React from 'react'
import './Styles/header.css'
import { FaSearch } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useStateValue } from "../api/StateProvider";
import { auth } from '../firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

  return (
            <div className='header bg-[#131921] flex h-[60px]
            items-center sticky top-0 z-[100] '>
            <Link
            to="/" >
            <img
            className="header__logo w-[100px] object-contain my-0 mx-[20px] mt-[18px] max-sm:mx-1 
            max-sm:w-[70px] max-[470px]:w-[60px]"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            </Link>
            
        

            <div className="header__search flex flex-1 items-center rounded-3xl max-[470px]:hidden">
                <input className="header__searchInput h-[12px] p-[10px] w-[100%] " 
                type="text" />
                <FaSearch className="header__searchIcon p-[2px] bg-[#cd9042]" />
            </div>

            <div className="header__nav flex justify-evenly max-sm:p-2 ">

                <Link to={!user && '/login'}>
                <div className="header__option" onClick={handleAuthenticaton}> 
                    <span className="header__optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                    <span className="header__optionLineTwo">{user ? "Sign out" : "Sign In"}</span> 
                </div>
                </Link>

            
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
           
            

            <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout">
            <div className="header__optionBasket flex items-center text-white">
                <FaShoppingCart />
                <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
                </span>
            </div>
            </Link>
        </div>
        </div>
  )
}

export default Header