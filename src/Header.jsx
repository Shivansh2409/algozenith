// Header.js
import React from 'react';
import "./Header.css"

function Header() {
  return (
    <header className="header">
        <div className="two">
            <div className='men'>
            <button className='mentor'><div className="img ment"><img src="./CalendarOutline.png" alt="" /></div>Mentor Sessions</button>
            </div>
            <div className='lea'>
            <button className="mentor"><div className="img len"><img src="./BriefcaseOutline.png" alt="" /></div>Learning Material</button>
            </div>
        </div>
        <div className="one">
            <button className='help'><div className="he"><img src="./Vector (2).png" alt="" /></div><div className='how'>How it works</div></button>
        </div>
    </header>
  );
}

export default Header;
