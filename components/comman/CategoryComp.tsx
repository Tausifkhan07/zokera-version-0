import { useState, useEffect, useRef } from 'react';

const CategoryComp = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionsRef.current || !navRef.current) {
        return;
      }

      const navHeight = navRef.current.offsetHeight;
      const sections = sectionsRef.current.querySelectorAll('section');
      const curPos = window.scrollY;

      sections.forEach((section) => {
        const top = section.offsetTop - navHeight;
        const bottom = top + section.offsetHeight;

        if (curPos >= top && curPos <= bottom) {
          setActiveSection(section.id);
          const navLinks = navRef.current?.querySelectorAll<HTMLAnchorElement>('a');
          navLinks?.forEach((a) => {
            a.classList.remove('active');
          });
          section.classList.add('active');
          const activeNavLink = navRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${section.id}"]`);
          if (activeNavLink) {
            activeNavLink.classList.add('active');
          }
        }

      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (!navRef.current) {
      return;
    }

    const navHeight = navRef.current?.offsetHeight ?? 0;
    const targetId = e.currentTarget.getAttribute('href');
    const target = targetId ? document.querySelector(targetId) as HTMLElement : null;

    if (!target) {
      return;
    }

    const top = target.offsetTop - navHeight;


    window.scrollTo({
      top: top,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <style jsx>
        {`
        *, ::before, ::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .category-wrap {
          display: flex;
          width: 100%;
          justify-content: flext-start;
        }
        .category-wrap .nav {
          display: flex;
          -moz-box-pack: start;
          justify-content: flex-start;
          align-items: flex-start;
          flex-flow: column nowrap;
          min-height: 0px;
          position: fixed;
          top: 57px;
          left: 0;
          bottom: 0;
        }
        .category-wrap .sections {
          width: 100%;
          height: 100%;
          overflow-y: scroll;
          padding-left: 106px;
          overflow-x: hidden;
        }
        .category-wrap .nav ul {
          height: 100%;
          overflow-y: scroll;
        }
        .category-wrap .nav ul li {
          height: 96px;
          width: 96px;
          background-color: rgb(240, 240, 240);
          border-bottom: 1px solid rgb(223, 223, 223);
          position: relative;
        }
        .category-wrap .nav ul li a {
          width: 100%;
          height: 100%;
          display: block;
          position: relative;
          display: flex;
          -moz-box-pack: center;
          justify-content: center;
          -moz-box-align: center;
          align-items: center;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }
        .category-wrap .nav ul li a.active {
          position: relative;
          background-color: #fff;
        }
        .category-wrap .nav ul li a.active::after {
          content: "";
          border: 2px solid #00518f;
          border-radius: 0px 4px 4px 0px;
          width: 4px;
          top: 0px;
          left: 0px;
          bottom: 0px;
          position: absolute;
          opacity: 1;
          transition: opacity 0.3s ease-in-out 0s;
        }
        .category-wrap .nav ul li a.active img {
          filter: brightness(0) saturate(100%) invert(21%) sepia(45%) saturate(3184%) hue-rotate(188deg) brightness(96%) contrast(101%);
        }
        .category-wrap .nav ul li a.active span {
          color: #00518f;
        }
        .category-wrap .nav ul li a img {
          height: 24px;
          width: 24px;
        }
        .category-wrap .nav ul li a span {
          text-align: center;
          max-width: 72px;
          color: rgb(102, 102, 102);
          font-size: 13px;
          line-height: 16px;
          transition: color 0.3s ease-in-out 0s;
        }
        .sections section {
          width: 100%;
          display: inline-table;
          margin-top: 28px;
        }
        .sections section.active {
          margin-top: 5px;
        }
        .sections section .title {
          display: flex;
          flex-direction: row;
          color: rgb(153, 153, 153);
          text-transform: uppercase;
          width: 97%;
          margin-left: 2px;
          font-size: 11px;
          line-height: 16px;
          position: relative;
          justify-content: center;
          z-index: 2;
        }
        .sections section .title::before  {
          content: "";
          position: absolute;
          top: 8px;
          right: 0;
          height: 1px;
          width: 100%;
          background-color: rgb(223,223,223);
          z-index: -2;
        }
        .sections section .title > span {
          background-color: #fff;
          z-index: 5;
          padding: 0 7px;
        }
        .sections section a .title::before {
          display: none;
        }
        .sections section .cat-inner-box {
          width: 100%;
        }
        .sections section .cat-inner-box li {
          margin-top: 8px;
        }
        .sections section .cat-inner-box li .heading {
          color: rgb(51, 51, 51);
          margin-left: 2px;
          font-size: 17px;
          line-height: 20px;
        }
        .sections section .cat-inner-box li .inn-sec {
          margin-top: 8px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px 5px;
          margin-bottom: 8px;
          margin-right: 5px;
        }
        .sections section .cat-inner-box li .inn-sec a {
          margin-top: 0px;
          display: flex;
          flex-direction: column;
          -moz-box-align: center;
          align-items: center;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 0px 3px 0 rgba(0,0,0,.18);
          padding: 3px;
          border-radius: 4px;
        }
        .sections section .cat-inner-box li .inn-sec a picture {
          display: flex;
        }
        .sections section .cat-inner-box li .inn-sec a picture img {
          object-fit: contain;
          width: 72px;
          height: 72px;
        }
        .sections section .cat-inner-box li .inn-sec a .title {
          text-align: center;
          font-size: 11px;
          line-height: 16px;
          color: rgb(102, 102, 102);
          padding-top: 5px;
        }
        @media only screen and (min-width: 768px) {
          .sections section .cat-inner-box li .inn-sec {
            grid-template-columns: repeat(6, 1fr);
            gap: 10px 15px;
          }
          .category-wrap {
            padding-right: 8px;
          }
        }
      `}
      </style>
      <div className="category-wrap">
        <nav className='nav' ref={navRef}>
          <ul>
            <li>
              <a href="#1" className='active'>
                <picture>
                  <img src="/category/electronics.webp" alt="electronics" />
                </picture>
                <span>Electronics</span>
              </a>
            </li>
            <li>
              <a href="#2">
                <picture>
                  <img src="/category/home-and-kitchen.webp" alt="home and kitchen" />
                </picture>
                <span>Home And Kitchen</span>
              </a>
            </li>
            <li>
              <a href="#3">
                <picture>
                  <img src="/category/electronics.webp" alt="electronics" />
                </picture>
                <span>Electronics</span>
              </a>
            </li>
            <li>
              <a href="#4">
                <picture>
                  <img src="/category/home-and-kitchen.webp" alt="home and kitchen" />
                </picture>
                <span>Home And Kitchen</span>
              </a>
            </li>
            <li>
              <a href="#5">
                <picture>
                  <img src="/category/electronics.webp" alt="electronics" />
                </picture>
                <span>Electronics</span>
              </a>
            </li>
            <li>
              <a href="#6">
                <picture>
                  <img src="/category/home-and-kitchen.webp" alt="home and kitchen" />
                </picture>
                <span>Home And Kitchen</span>
              </a>
            </li>
            <li>
              <a href="#7">
                <picture>
                  <img src="/category/electronics.webp" alt="electronics" />
                </picture>
                <span>Electronics</span>
              </a>
            </li>
            <li>
              <a href="#8">
                <picture>
                  <img src="/category/home-and-kitchen.webp" alt="home and kitchen" />
                </picture>
                <span>Home And Kitchen</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="sections" ref={sectionsRef}>
          <section id='1' className='active'>
          <div className="title"><span>Electronics</span></div>
            <ul className="cat-inner-box">
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
            </ul>
          </section>
          <section id='2'>
            <div className="title"><span>Home And Kitchen</span></div>
            <ul className="cat-inner-box">
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
            </ul>
          </section>
          <section id='3'>
          <div className="title"><span>Electronics</span></div>
            <ul className="cat-inner-box">
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
            </ul>
          </section>
          <section id='4'>
          <div className="title"><span>Home And Kitchen</span></div>
            <ul className="cat-inner-box">
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
            </ul>
          </section>
          <section id='5'>
            <div className="title"><span>Electronics</span></div>
            <ul className="cat-inner-box">
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
            </ul>
          </section>
          <section id='6'>
            <div className="title"><span>Home And Kitchen</span></div>
            <ul className="cat-inner-box">
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
            </ul>
          </section>
          <section id='7'>
          <div className="title"><span>Electronics</span></div>
            <ul className="cat-inner-box">
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
            </ul>
          </section>
          <section id='8'>
          <div className="title"><span>Home And Kitchen</span></div>
            <ul className="cat-inner-box">
              <li>
                <h6 className="heading">Audio</h6>
                <div className="inn-sec">
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/bluetooth-earphone.webp" alt="bluetooth earphone" />
                    </picture>
                    <span className="title">Bluetooth Headphone & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/wire-earphone.webp" alt="Wired Headphones & Earphones" />
                    </picture>
                    <span className="title">Wired Headphones & Earphones</span>
                  </a>
                  <a href="/">
                    <picture>
                      <img src="/category/speakers.webp" alt="Speakers" />
                    </picture>
                    <span className="title">Speakers</span>
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
};
export default CategoryComp;
