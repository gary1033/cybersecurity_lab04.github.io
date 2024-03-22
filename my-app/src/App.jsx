import React, { useState } from 'react';
import './App.css';
import ha from './assets/ha.gif';
import ChatRoom from './ChatRoom.jsx';
function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const [visitors, setVisitors] = useState(0); // 假設的訪客人數

  useState(() => {
    setVisitors(v => v + 1); // 在組件掛載時增加訪客數量
  }, []);

const renderPage = () =>{
  switch(currentPage) {
    case 'chat':
      content = <ChatRoom />;
      break;
    case 'about':
      content = (
        <div className="about-section">
          <div>
            <img src={ha}/>
            <p>國立台灣大學 電機所資安組</p>
            <p>張瑞麟</p>
          </div>
          <div className="intro">
            <h1>Welcome!</h1>
            <p>歡迎光臨！這裡是我的介紹頁面</p>
          </div>
        </div>
      );
      break;
    case 'home':
    default:
      content = (
        <div className="home-section">
          {/* 首頁的內容 */}
          <h1>Home Page</h1>
          {/* 其他首頁內容 */}
        </div>
      );
  }
}




  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#home" onClick={() => setCurrentPage('home')}>首頁</a>
          <a href="#about" onClick={() => setCurrentPage('about')}>關於</a>
          <a href="#chat" onClick={() => setCurrentPage('chat')}>聊天室</a>
          <a className="visitors-count">訪客人數：{visitors}</a>

        </nav>
        <div className="login-signup">
          <button>登入</button>
          <button>註冊</button>
        </div>
      </header>
      
      <main className="App-main">
        {renderPage}
      </main>
    </div>
  );
}

export default App;