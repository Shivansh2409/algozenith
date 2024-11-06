// ChapterList.js
import React from 'react';
import "./ChapterList.css"

function ChapterList() {
  const chapters = [ 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'];

  return (
    <div className="chapter-list">
        <div className="chapters one-1">
            <span className='ch-1'>Chapter 1</span>
            <span className='ch-time'><div><div className='ch-img'><img src="./Vector (6).png" alt="" /></div></div><div className=''>05:00:00</div></span>
        </div>
      {chapters.map((chapter, index) => (
        <div key={index} className="chapter">
          {chapter}
        </div>
      ))}
    </div>
  );
}

export default ChapterList;
