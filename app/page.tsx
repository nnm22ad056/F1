"use client";
import Nav from "@/components/Nav";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";

export default () => {
  return (
    <main className="bg-blue-10">          
      <Nav />
      <section className="pt-40 flex flex-col items-center gap-10">
        <div className="glassmorphism pl-4 pr-2 rounded-full text-h">
          <div className="flex items-center justify-between">
            <p className="mr-2 font-regular">Who’s Leading the Race?</p>
            <a href="/leaderboard" className="font-semibold">
              <div className="py-1">
                <div className="inline-flex animate-shimmer items-center justify-center rounded-full border px-2 py-1 border-red-1 bg-[linear-gradient(110deg,#C30000,45%,#EE0000,55%,#C30000)] bg-[length:200%_100%] font-semibold text-sm transition-all duration-800 ease-in-out hover:bg-[length:150%_100%] hover:scale-105 active:scale-95 focus:outline-none focus:ring-0">
                  {/* <div className="inline-flex items-center justify-center bg-red-1 text-white rounded-full px-2 py-1 font-semibold hover:bg-red-20 text-sm"> */}
                  Check now &rarr;
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="container mx-auto relative w-full">
          <h1 className="text-7xl text-center font-bold">
            Track Your Favorite <br />
            <span
              className="font-bold text-7xl animate-shimmer bg-[linear-gradient(110deg,#C30000,45%,#EE0000,55%,#C30000)] 
              bg-[length:200%_200%] bg-clip-text text-transparent transition-all duration-800 ease-in-out"
            >
              F1 Drivers
            </span>{" "}
            in Real Time.
          </h1>
          <p className="text-1xl mt-4 text-center mx-auto">
            Explore driver profiles, view live leaderboard updates, and dive
            into race track records. For fans, by fans.
          </p>
          <div className="pt-10 relative flex flex-col items-center justify-center">
            <button className="inline-flex top-4 z-20 relative h-12 animate-shimmer items-center justify-center rounded-xl border border-red-10 bg-[linear-gradient(110deg,#C30000,45%,#EE0000,55%,#C30000)] bg-[length:200%_100%] px-6 font-semibold transition-all duration-800 ease-in-out hover:bg-[length:150%_100%] hover:scale-105 active:scale-95 focus:outline-none focus:ring-0">
              <a href="/driver"> Fuel Your F1 Passion!</a>
            </button>
            <ContainerScroll titleComponent={<></>}>
              <Image
                src={`/icons/poster.png`}
                alt="hero"
                height={1400}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full"
                draggable={false}
              />
            </ContainerScroll>
          </div>
        </div>
      </section>
      <section className="pb-60">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-red-1">
            Start Exploring
            </h2>
            <p className="mt-2 text-4xl font-semibold  text-white sm:text-5xl">
              Everything You Need to Track F1 in Real-Time
            </p>
            <p className="mt-6 font-medium text-gray-400">
              Stay ahead of the race with real-time updates, comprehensive
              stats, and seamless navigation. Whether you’re following your
              favorite driver, team, or race, our platform delivers everything
              you need at your fingertips.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="font-medium font-semibold text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-1">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                      />
                    </svg>
                  </div>
                  Real-Time Leaderboards
                </dt>
                <dd className="mt-2 text-base/7 font-medium text-gray-400">
                  Quickly view the latest rankings of drivers and teams as the
                  season unfolds. Stay updated on race results, points, and
                  podium finishes—delivered live and in real-time.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-1">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                  Race Highlights & Results
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                Catch up on every race with detailed results and analysis. From qualifying sessions to race-day victories, get the inside scoop on every moment that matters in F1.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-1">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  Driver & Team Stats
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Track individual driver stats, team performances, and race
                  results with just a few clicks. Dive deep into career stats,
                  race history, and performance comparisons, all in one place.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-1">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                      />
                    </svg>
                  </div>
                  Simple Navigation, Advanced Features
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Seamlessly explore the world of F1 with a user-friendly
                  interface that delivers complex data in a way that’s simple to
                  understand and easy to navigate. eget.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      {/* <section className="pb-60">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"></img>
        <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"></img>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
            <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
          </div>
      </section> */}
      {/* <section className="pb-60">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"></img>
        <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"></img>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
            <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
          </div>
      </section> */}
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
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Resources
                </h2>
                <ul className="text-gray-400 font-medium">
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
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Follow us
                </h2>
                <ul className="text-gray-400 font-medium">
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
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul className="text-gray-400 font-medium">
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
            <span className="text-sm sm:text-center text-gray-400">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                F1®
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-white">
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
              <a href="#" className="text-gray-500 hover:text-white ms-5">
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
              <a href="#" className="text-gray-500 hover:text-white ms-5">
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
              <a href="#" className="text-gray-500 hover:text-white ms-5">
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
