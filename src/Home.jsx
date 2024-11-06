// Home
import React from 'react';
//import Sidebar from './Sidebar';
import Sidebar from './Sidebar';
import Header from './Header';
import ChapterList from './ChapterList';
import Part from './Part';
import Bell from './Bell';
import "./Home.css"

function Home() {
  const parts = [
    {
      part:'Part 1',
      title: 'Lorem Ipsum Dolor Sit Amet',
      time: '02:00:00',
      difficulty: 'Medium',
      number:"5",
      progress: 45,
      icon:"./Vector (10).png",
      items: [
        { type: './PlayOutline.png', title: 'Video 1', duration: '10:00' },
        { type: './QuestionMarkCircleOutline.png', title: 'Article 1', duration: '10:00' },
        { type: './QuestionMarkCircleOutline.png', title: 'Quiz 1', duration: '10:00' },
        { type: './Vector (7).png', title: 'Coding Exercise 1', duration: '10:00' },
        { type: './Vector (8).png', title: 'Combined Resource 1', duration: '10:00' },
      ],
    },
    {
      part:'Part 2',
      title: 'Lorem Ipsum Dolor Sit Amet',
      time: '02:00:00',
      difficulty: 'Medium',
      progress: 20,
      number:"5",
      icon:"./Vector (12).png",
      items: [],
    },
    {
      part:'Part 3',
      title: 'Lorem Ipsum Dolor Sit Amet',
      time: '02:00:00',
      difficulty: 'Medium',
      progress: 0,
      number:"5",
      icon:"./Vector (12).png",
      items: [],
    },
  ];

  return (
    <div className="app">
      <Sidebar />
      
      <main>
        <Header />
        <div className="content">
          <ChapterList />
          <div className="parts">
            {parts.map((part, index) => (
              <Part key={index} {...part} />
            ))}
          </div>
        </div>
      </main>
      <Bell/>
    </div>
  );
}

export default Home;
