// Sidebar.js
import React from 'react';
import ImgNav from './ImgNav';
import "./Sidebar.css"

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="Img"><span className="logo"><img src="./Vector (1).png" alt="" /></span><span className="algo"><img src="./Group 1.png" alt="" /></span></div>
      <nav>
        <div><ImgNav title="./ViewGridOutline.png"></ImgNav><span className='con'>Dashboard</span></div>
        <div><ImgNav title="./LightBulbOutline.png"></ImgNav><span className='con'>Learn</span></div>
        <div><ImgNav title="./UserGroupOutline.png"></ImgNav><span className='con'>Forums</span></div>
        <div className='select'><ImgNav title="./Vector.png"></ImgNav><span className='con'>Upskill</span></div>
        <div><ImgNav title="./ChartBarOutline.png"></ImgNav><span className='con'>Contest</span ></div>
        <div><ImgNav title="./StarOutline.png"></ImgNav><span className='con'>Leaderboard</span></div>
      </nav>
    </aside>
  );
}

export default Sidebar;
