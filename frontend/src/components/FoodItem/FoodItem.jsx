import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image,prepTime}) => {


    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='food-item'>
    <div className='food-item-img-container'>
      <img className='food-item-image' src={url+"/images/"+image} alt=""></img>
      {!cartItems[id]
        ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""></img>
        :<div className='food-item-counter'>
           <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""></img>
           <p>{cartItems[id]}</p>
           <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""></img>
        </div>
      }

    </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
        <p>{name}</p>
        <img src={assets.rating_starts} alt=" "></img>
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>₹{price}</p>
        {/* add time*/}
        <p className='food-item-prep-time'><strong>Prep Time:</strong> {prepTime ? `${prepTime} minutes` : "N/A"}</p>
      </div>
    </div>
  )
}

export default FoodItem
