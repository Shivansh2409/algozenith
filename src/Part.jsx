// Part.js
import React from 'react';
import Item from './Item';
import "./Part.css";

function Part({ part,title, time, difficulty, items, progress,number,icon }) {
  return (
    <div className="part">
        <div className="part-1">
            <div className="title-1">
                <div className='con-1'>{part}</div>
                <div className='con-2'>{title}</div>  
            </div>
            <div>


                <div className="part-info">
                    <span className='time-11'><span><img src="./Vector (6).png" alt="" /></span><span>{time}</span></span>
                    <span className='mide'><span><img src="./Vector (11).png" alt="" /></span><span>{difficulty}</span></span>
                    <span className='num'><span><img src="./Vector (8).png" alt="" /></span><span>{number}</span></span>
                    <span><img src={icon} alt="" /></span>
                </div>
                <div className='progress'>{progress} %Completed</div>
            </div>
            
        </div>
      
      <div className="items">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Part;
