"use client";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";

export default () => {
  return (
    <main className="position-percentage">
    <Nav />
      <section className="pt-40 flex flex-col items-center gap-20">
        <div className="fade-down glassmorphism pl-4 pr-2 rounded-full text-h">
          <div className="flex items-center justify-between">
            <p className="mr-2 font-light">Who’s Leading the Race?</p>
            <a href="#" className="font-semibold">
              <div className="py-1">
                <div className="inline-flex items-center justify-center bg-red-10 text-white rounded-full px-2 py-1 hover:bg-red-20 text-sm">
                  Check now <span>&rarr;</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="fade-down fade-down-delay-1 container mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-7xl text-center font-bold">
            Track Your Favorite <br />
            <span className="text-red-10 inter-italic font-bold">F1 Drivers</span>{" "}in Real Time.
          </h1>
          <p className="text-1xl mt-4 text-center mx-auto">
            Explore driver profiles, view live leaderboard updates, and dive
            into race track records. For fans, by fans.
          </p>
          {/* Center the button */}
          <div className="flex justify-center mt-8">
            {/* <Button className="px-4 py-4 bg-red-10 text-white font-medium hover:bg-red-20">
              Fuel Your F1 Passion!
            </Button> */}
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-red-10 bg-[linear-gradient(110deg,#C30000,45%,#EE0000,55%,#C30000)] bg-[length:200%_100%] px-6 font-medium transition-all duration-300 ease-in-out hover:bg-[length:150%_100%] hover:scale-105 active:scale-95 focus:outline-none focus:ring-0">
              Fuel Your F1 Passion!
            </button>
          </div>
        </div>
      </section>
      <ContainerScroll titleComponent={<></>}>
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <section>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 pb-10">
              Trusted by the racing teams
            </h2>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                  <img
                    src="/icons/McLaren-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/Mercedes-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/Aston-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/Sauber-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/Alpine-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/Ferrari-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/Haas-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/Williams-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/RedBull-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/RB-01.svg"
                    alt="My Icon"
                    className="h-14 w-14"
                  />
                </li>
              </ul>
              <ul
                className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true"
              >
                <li>
                  <img
                    src="/icons/McLaren-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/Mercedes-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/Aston-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/Sauber-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/Alpine-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img src="/icons/Ferrari-01.svg" alt="My Icon" height={32} />
                </li>
                <li>
                  <img
                    src="/icons/Haas-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/Williams-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/RedBull-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
                <li>
                  <img
                    src="/icons/RB-01.svg"
                    alt="My Icon"
                    className="h-14 w-auto"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="position-percentage2 border-t">
        <div className="mx-auto w-full max-w-screen-xl p-5 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a className="flex items-center">
                <img src="/icons/F1.svg" className="h-8 me-3" alt="F1 Logo" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.formula1.com/"
                      className="hover:underline"
                    >
                      Formula 1®
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.formula1.com/en/racing/2024"
                      className="hover:underline"
                    >
                      F1 Schedule
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white-100 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                F1®
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-red-20 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 1 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-red-20 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 18"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.64-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-red-20 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
                <span className="sr-only">Youtube</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};
