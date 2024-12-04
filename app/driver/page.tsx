"use client";
import Nav from "@/components/Nav";
import { div } from "framer-motion/client";

export default () => {
  //dummy data
  const drivers = [
    {
      name: "Max Verstappen",
      image: "/icons/verstappen.jpg",
      country: "Netherlands",
      flag: "/icons/netherlands-flag.svg",
      wins: 10,
      podiums: 15,
      championships: 1,
      fastestLaps: 3,
    },
    {
      name: "Lando Norris",
      image: "/icons/norris.jpg",
      country: "United Kingdom",
      flag: "/icons/uk-flag.svg",
      wins: 3,
      podiums: 10,
      championships: 0,
      fastestLaps: 2,
    },
    {
      name: "Charles Leclerc",
      image: "/icons/leclerc.jpg",
      country: "Monaco",
      flag: "/icons/monaco-flag.png",
      wins: 5,
      podiums: 24,
      championships: 0,
      fastestLaps: 10,
    },
  ];

  return (
    <main className="bg-blue-10">
      <Nav />
      <section className="pt-16 pb-20 px-4">
        <div className="pt-20">
          <h1 className="text-7xl font-bold text-center">
            <span
              className="font-bold text-7xl animate-shimmer bg-[linear-gradient(110deg,#C30000,45%,#EE0000,55%,#C30000)] 
              bg-[length:200%_200%] bg-clip-text text-transparent transition-all duration-800 ease-in-out"
            >
              Champions
            </span>{" "}
            of the Track
          </h1>
          <h3 className="text-md font-light text-center pb-10 pt-6">
            Welcome to the heart of Formula 1! Here you can explore the profiles
            of the elite drivers who compete at the highest level of motorsport.{" "}
            <br />
            Each driver brings their unique style, skill, and passion to the
            track, and this is where you can learn all about them.
          </h3>
        </div>

        <div className="flex flex-col-3 items-center justify-between px-80">
          {drivers.map((driver) => {
            return (
              <div className="w-full rounded-2xl overflow-hidden max-w-sm bg-blue-20 p-8">
                <div className="relative z-10">
                  <img
                    src={driver.image}
                    alt={driver.name}
                    width={500}
                    height={500}
                    className="rounded-2xl"
                  />
                  <div className="py-4 relative z-20">
                    <h2 className="text-white text-2xl text-left font-bold">
                      <a href="" className="text-bronze hover:underline">
                        <span className="text-bronze">#3 </span>{driver.name}
                      </a>
                    </h2>

                    <div className="flex items-center mt-4">
                      <img
                        src={driver.flag}
                        alt={driver.flag + "'s Flag"}
                        className="w-6 h-4 mr-2"
                      />
                      <span className="text-neutral-200">{driver.country}</span>
                    </div>

                    <div className="mt-4">
                      <ul className="text-neutral-200 mt-2 space-y-1">
                        <li>
                          Wins: <span className="font-bold">{driver.wins}</span>
                        </li>
                        <li>
                          Podiums: <span className="font-bold">{driver.podiums}</span>
                        </li>
                        <li>
                          Championships: <span className="font-bold">{driver.championships}</span>
                        </li>
                        <li>
                          Fastest Laps: <span className="font-bold">{driver.fastestLaps}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* list of drivers */}

        {drivers.map((driver) => {
          return (
            <div className="flex flex-row items-center justify-between px-80 py-4">
              <div className="w-full relative rounded-2xl overflow-hidden max-w-7xl bg-blue-10 border border-zinc-800 p-8 flex items-center">
                <img
                  src={driver.image}
                  alt={driver.name}
                  width={100}
                  height={100}
                  className="rounded-2xl mr-6"
                />
                <div className="relative z-20 grid grid-cols-2 gap-4">
                  <div>
                    <h2 className="text-white text-3xl font-bold">
                      {driver.name}
                    </h2>

                    <div className="flex items-center mt-4">
                      <img
                        src={driver.flag}
                        alt={driver.country + "'s Flag"}
                        className="w-6 h-4 mr-2"
                      />
                      <span className="text-neutral-200">{driver.country}</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-neutral-200 word">
                      Wins: <span className="font-bold"> {driver.wins} </span>
                      Podiums:{" "}
                      <span className="font-bold"> {driver.podiums} </span>
                      Championships:{" "}
                      <span className="font-bold">
                        {" "}
                        {driver.championships}{" "}
                      </span>
                      Fastest Laps:{" "}
                      <span className="font-bold"> {driver.fastestLaps} </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <footer className="bg-blue-10 border-t">
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
