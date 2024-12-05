"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import axios from "axios";

type RaceResult = {
  location: string;
  date: string;
  winnerId: number;
  laps: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  winner: {
    first_name: string;
    last_name: string;
    car: string;
  };
};

export default function RaceResultsTable() {
  const [raceResults, setRaceResults] = useState<RaceResult[]>([]);
  const [selectedGrandPrix, setSelectedGrandPrix] = useState<string>("All Grand Prix");
  const [selectedWinner, setSelectedWinner] = useState<string>("All Winners");
  const [selectedCar, setSelectedCar] = useState<string>("All Cars");

  const [showGrandPrixDropdown, setShowGrandPrixDropdown] = useState<boolean>(false);
  const [showWinnerDropdown, setShowWinnerDropdown] = useState<boolean>(false);
  const [showCarDropdown, setShowCarDropdown] = useState<boolean>(false);

  // Fetch race data when the component mounts
  useEffect(() => {
    const fetchRaceResults = async () => {
      try {
        const raceResults = await axios.get("/api/races"); // Update with the actual backend route
        setRaceResults(raceResults.data.data);
      } catch (error) {
        console.error("Error fetching race details:", error);
      }
    };

    fetchRaceResults();
  }, []);

  const uniqueGrandPrix = [
    "All Grand Prix",
    ...new Set(raceResults.map((race) => race.location)),
  ];
  const uniqueWinners = [
    "All Winners",
    ...new Set(raceResults.map((race) => `${race.winner.first_name} ${race.winner.last_name}`)),
  ];

  const uniqueCars = [
    "All Cars",
    ...new Set(raceResults.map((race) => race.winner.car)),
  ];

  const handleGrandPrixSelection = (selection: string) => {
    setSelectedGrandPrix(selection);
    setShowGrandPrixDropdown(false);
  };

  const handleWinnerSelection = (selection: string) => {
    setSelectedWinner(selection);
    setShowWinnerDropdown(false);
  };

  const handleCarSelection = (selection: string) => {
    setSelectedCar(selection);
    setShowCarDropdown(false);
  };

  const filteredResults = raceResults.filter(
    (race) =>
      (selectedGrandPrix === "All Grand Prix" || race.location === selectedGrandPrix) &&
      (selectedWinner === "All Winners" || `${race.winner.first_name} ${race.winner.last_name}` === selectedWinner) &&
      (selectedCar === "All Cars" || race.winner.car === selectedCar)
  );

  const formatTime = (hours: number, minutes: number, seconds: number, milliseconds: number) => {
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}.${milliseconds}`;
  };

  return (
    <main className="bg-blue-10 flex flex-col min-h-screen">
      <Nav />
      <section className="flex-grow pt-16 pb-20 px-80">
        <div className="pt-20">
          <h1 className="text-7xl font-bold text-center">
            The Race to the{" "}
            <span className="font-bold text-7xl animate-shimmer bg-[linear-gradient(110deg,#C30000,45%,#EE0000,55%,#C30000)] bg-[length:200%_200%] bg-clip-text text-transparent transition-all duration-800 ease-in-out">
              Championship
            </span>
          </h1>
          <h3 className="text-md font-light text-center pb-10 pt-6">
            Stay up to date with the latest standings, stats, and season progress of your favorite Formula 1 drivers and teams. <br />
            Whether you’re following your hero or scouting out the competition, our real-time leaderboards provide everything you need to analyze the race to the top.
          </h3>
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-4">
            {/* Grand Prix Filter */}
            <div className="relative">
              <button
                onClick={() => setShowGrandPrixDropdown(!showGrandPrixDropdown)}
                className="text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-red-20 hover:bg-red-1 focus:ring-red-20"
              >
                {selectedGrandPrix}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
              </button>
              {showGrandPrixDropdown && (
                <div className="absolute z-10 divide-y divide-black-100 rounded-lg shadow w-44 bg-blue-20">
                  <ul className="py-2 text-sm text-white dark:text-black-200">
                    {uniqueGrandPrix.map((grandPrix, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleGrandPrixSelection(grandPrix)}
                          className="block w-full text-left px-4 py-2 hover:bg-blue-20 hover:text-white"
                        >
                          {grandPrix}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Winner Filter */}
            <div className="relative">
              <button
                onClick={() => setShowWinnerDropdown(!showWinnerDropdown)}
                className="text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-red-20 hover:bg-red-1 focus:ring-red-20"
              >
                {selectedWinner}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
              </button>
              {showWinnerDropdown && (
                <div className="absolute z-10 bg-white divide-y divide-black-100 rounded-lg shadow w-44 dark:bg-blue-20">
                  <ul className="py-2 text-sm text-white dark:text-white">
                    {uniqueWinners.map((winner, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleWinnerSelection(winner)}
                          className="block w-full text-left px-4 py-2 hover:bg-black-100 dark:hover:bg-black-600 dark:hover:text-white"
                        >
                          {winner}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Car Filter */}
            <div className="relative">
              <button
                onClick={() => setShowCarDropdown(!showCarDropdown)}
                className="text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-red-20 hover:bg-red-1 focus:ring-red-20"
              >
                {selectedCar}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
              </button>
              {showCarDropdown && (
                <div className="absolute z-10 bg-white divide-y divide-black-100 rounded-lg shadow w-44 dark:bg-blue-20">
                  <ul className="py-2 text-sm text-white dark:text-black-200">
                    {uniqueCars.map((car, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleCarSelection(car)}
                          className="block w-full text-left px-4 py-2 hover:bg-black-100 dark:hover:bg-black-600 dark:hover:text-white"
                        >
                          {car}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Race Results Table */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-white-10">
              <thead className="text-xs uppercase bg-red-20">
                <tr>
                  <th className="px-6 py-3">Location</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Winner</th>
                  <th className="px-6 py-3">Car</th>
                  <th className="px-6 py-3">Laps</th>
                  <th className="px-6 py-3">Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.length > 0 ? (
                  filteredResults.map((race, index) => (
                    <tr className="bg-blue-20 border-b dark:bg-black-100 dark:border-black-700" key={index}>
                      <td className="px-6 py-4">{race.location}</td>
                      <td className="px-6 py-4">{new Date(race.date).toLocaleString()}</td>
                      <td className="px-6 py-4">{`${race.winner.first_name} ${race.winner.last_name}`}</td>
                      <td className="px-6 py-4">{race.winner.car}</td>
                      <td className="px-6 py-4">{race.laps}</td>
                      <td className="px-6 py-4">
                        {formatTime(race.hours, race.minutes, race.seconds, race.milliseconds)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-4">No results found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
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
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
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
                    fillRule="evenodd"
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                    clipRule="evenodd"
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
}
