import { useState, useEffect } from 'react';
import BottomNav from '../../components/mobile/BottomNav';

const Hub = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollpos > currentScrollPos);
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollpos]);

  return (
    <>
      <style jsx>{`
        body {
          margin: 0;
          background-color: #f1f1f1;
          font-family: Arial, Helvetica, sans-serif;
        }

        #navbar {
          background-color: #333;
          position: fixed;
          top: 0;
          width: 100%;
          display: block;
          transition: top 0.3s;
        }

        #navbar a {
          float: left;
          display: block;
          color: #f2f2f2;
          text-align: center;
          padding: 15px;
          text-decoration: none;
          font-size: 17px;
        }

        #navbar a:hover {
          background-color: #ddd;
          color: black;
        }
      `}</style>

      <div
        id="navbar"
        style={{ top: visible ? 0 : '-55px' }}
      >
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
      {/* <Header /> */}

      <div style={{ padding: '15px 15px 2500px', fontSize: '30px', marginTop: '30px' }}>
        <p><b>This example demonstrates how to hide a navbar when the user starts to scroll the page.</b></p>
        <p>Scroll down this frame to see the effect!</p>
        <p>Scroll up to show the navbar.</p>
        <p>Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <BottomNav />
    </>
  );
};

export default Hub;
