import React, { useState, useEffect } from 'react';
import './App.css';
import ha from './assets/ha.gif';
import ChatRoom from './ChatRoom.jsx';
import Register from './Register.jsx';


function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const [visitors, setVisitors] = useState(0);
  const userdata = [
    { "id": 1, "name": "Eric" },
    { "id": 2, "name": "Eric2" },
    { "id": 3, "name": "Eric3" },
    { "id": 4, "name": "Ben" },
    { "id": 5, "name": "Ben" },
    { "id": 6, "name": "..." }
  ];
  useEffect(() => {
    // 假設的訪客人數增加，這裡可以替換為從後端服務獲取真實數據
    setVisitors(v => v + 1);
  }, []);

  const renderPage = () => {
    let content;
    switch (currentPage) {
      case 'chat':
        content = <ChatRoom />;
        break;
      case 'about':
        content = (
          <div className="about-section">
            <div>
              <img src={ha} alt="哈"/>
              <p>國立台灣大學 電機所資安組 張瑞麟</p>
            </div>
            <div className="intro">
              <h1>Welcome!</h1>
              <p>歡迎光臨！這裡是我的介紹頁面</p>
            </div>
          </div>
        );
        break;
      case 'home':
        content = (
          <div className="home-section">
            <h1>Home Page</h1>
          </div>
        );
        break;
      case 'user':
        content = (
          <div>
            <pre>{JSON.stringify(userdata, null, 2)}</pre>
          </div>
        );
        break;
      case 'register':
        content = <Register />;
        break;
      default:
        content = (
          <div className="home-section">
            <h1>首頁內容</h1>
          </div>
        );
    }
    return content;
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#home" onClick={() => setCurrentPage('home')}>首頁</a>
          <a href="#about" onClick={() => setCurrentPage('about')}>關於</a>
          <a href="#user" onClick={() => setCurrentPage('user')}>User</a>
          <a href="#register" onClick={() => setCurrentPage('register')}>註冊</a>
          <span className="visitors-count">訪客人數：{visitors}</span>
        </nav>
        <div className="login-signup">
          <button>登入</button>
          <button>註冊</button>
        </div>
      </header>
      <main className="App-main">
        <div>
          {renderPage()} {/* 調用函數來渲染當前頁面的內容 */}
        </div>
      </main>
    </div>
  );
};

export default App;
