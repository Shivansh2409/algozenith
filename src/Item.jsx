// Item.js
import React from 'react';
import "./Item.css"

function Item({ type, title, duration }) {
  return (
    <div className="item">
      <div className='vid-1'>
        <span className='img-1'>
            <img src={type} alt="" />
        </span>
        <span>
            {title}
        </span>
      </div>
      
      <span className='time-1'>
        <div className='time-1-img'>
            <img src="./Vector (9).png" alt="" />
        </div>
        <div>
            {duration}
        </div>
      </span>
      
    </div>
  );
}

export default Item;
