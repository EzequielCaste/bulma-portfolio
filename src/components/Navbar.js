import React from 'react';

import './navbar.css';

const showHide = () => {
  const navBurger = document.querySelector('.navbar-burger');   
  const menu = document.querySelector('.dropdown-menu');
  navBurger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
}

const scrollTo = (el) => {  
   const element = document.querySelector(el);
   element.scrollIntoView({ behavior: 'smooth' });
}

const handleBurgerClick = (e) => {
  showHide()
}

export const Navbar = () => {
  return (
    <main className="has-navbar-fixed-top">
      <nav
        className="navbar is-fixed-top over-lottie is-white "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="dropdown over-all">
          <div className="dropdown-trigger is-pulled-right">
            <div
              onClick={handleBurgerClick}
              role="button"
              tabIndex="0"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div className="dropdown-menu" id="dropdown-menu2" role="menu">
            <div className="dropdown-content has-text-centered">
              <div className="dropdown-item">
                <button
                  onClick={() => scrollTo('#projects')}
                  type="button"
                  className="button is-white is-medium has-text-weight-semibold"
                >
                  <p>Projects</p>
                </button>
              </div>
              <hr className="dropdown-divider" />
              <div className="dropdown-item">
                <button
                  type="button"
                  className="button is-white is-medium has-text-weight-semibold"
                >
                  <p>Contact</p>
                </button>
              </div>
              <hr className="dropdown-divider" />
              <div className="dropdown-item">
                <button
                  type="button"
                  className="button is-white is-medium has-text-weight-semibold"
                >
                  <a download="" href="#" className="has-text-black">
                    <p>CV</p>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-end">
            <li className="navbar-item">
              <button
                onClick={() => scrollTo('#projects')}
                type="button"
                className="button is-white is-medium has-text-weight-semibold"
              >
              <p>Projects</p>
              </button>
            </li>
            <li className="navbar-item">
              <button
                type="button"
                className="button is-white is-medium has-text-weight-semibold"
              >
                <p>Contact</p>
              </button>
            </li>
            <li className="navbar-item">
              <button
                type="button"
                className="button is-white is-medium has-text-weight-semibold"
              >
                <a download="" href="#" className="has-text-black">
                  <p>CV</p>
                </a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
};
