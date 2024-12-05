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
    <main className="bg-blue-10">
      <Nav />
      <section className="pt-16 pb-20 px-80">
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
                <div className="absolute z-10 bg-white divide-y divide-black-100 rounded-lg shadow w-44 dark:bg-blue-20">
                  <ul className="py-2 text-sm text-white dark:text-black-200">
                    {uniqueGrandPrix.map((grandPrix, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleGrandPrixSelection(grandPrix)}
                          className="block w-full text-left px-4 py-2 hover:bg-black-100 dark:hover:bg-blue-20 dark:hover:text-white"
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
            <table className="w-full text-sm text-left rtl:text-right text-black-10">
              <thead className="text-xs uppercase bg-gray-200 dark:bg-black-700 dark:text-black-100">
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
                    <tr className="bg-white border-b dark:bg-black-100 dark:border-black-700" key={index}>
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
    </main>
  );
}
