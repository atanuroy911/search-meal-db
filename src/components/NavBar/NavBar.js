import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 mb-0 h-16">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/">
              <img src="https://www.themealdb.com/images/logo-small.png" alt="MealDB Logo" />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className="fa-solid fa-bars" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex bg-emerald-500" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-normal uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/home"
                >
                  <i className="fa-solid fa-home text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-normal uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/categories"
                >
                  <i className="fa-solid fa-tree text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Categories</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-normal uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/about"
                >
                  <i className="fa-solid fa-address-card text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-normal uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/api"
                >
                  <i className="fa-solid fa-link text-lg leading-lg text-white opacity-75"></i><span className="ml-2">API</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}