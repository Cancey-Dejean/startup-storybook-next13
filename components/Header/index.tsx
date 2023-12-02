"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import classNames from "classnames";
import Logo from "../atoms/Logo";
import MobileMenuBtn from "../atoms/MobileMenuBtn";
import { Button } from "../atoms/Button/Button";

 type MenuItem = {
  id: number;
  title: string;
  path?: string;

};

export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: MenuItem[];
};


const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen((prevState) => !prevState);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={classNames(
          "header fixed left-0 top-0 z-40 flex w-full items-center bg-transparent",
          sticky
            ? "bg-white bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-primary dark:bg-opacity-20"
            : "",
        )}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={classNames(
                  "header-logo block w-full",
                  sticky ? "py-5 lg:py-2" : "py-8",
                )}
              >
                <Logo
                  imgSrc="/images/logo/logo-2.svg"
                  className="w-full dark:hidden"
                  imgAlt="logo"
                />

                <Logo
                  imgSrc="/images/logo/logo.svg"
                  className="hidden w-full dark:block"
                  imgAlt="logo"
                />
              </Link>
            </div>

            <div className="flex w-full items-center justify-between px-4">
              <div>
                {/* Mobile Menu */}
                <MobileMenuBtn navbarToggleHandler={navbarToggleHandler} navbarOpen={navbarOpen} />

                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <button
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>

                            {menuItem.submenu && menuItem.submenu.length > 0 && (
                          <div
                            className={`submenu relative left-0 top-full rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? "block" : "hidden"
                            }`}
                          >
                            {menuItem.submenu.map(({ path, id, title }) => (
                              <Link
                                href={path}
                                key={id}
                                className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3"
                              >
                                {title}
                              </Link>
                            ))}
                                </div>
                              )
                            }
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Button
                  intent="text"
                  className="hidden md:block"
                  label=" Sign In"
                />

                <Button
                  intent="primary"
                  fontWeight="bold"
                  shadowHover
                  className="ease-in-up hidden md:block md:px-9 lg:px-6"
                  label=" Sign Up"
                />

                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
