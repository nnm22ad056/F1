"use client";
import Nav from "@/components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DriverList() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  interface Driver {
    id: number;
    first_name: string;
    last_name: string;
    name: string;
    country: string;
    wins: number;
    podiums: number;
    championships: number;
    points: number;
  }

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get("/api/driver");
        const driverData = response.data.data.map(
          (driver: Driver, index: number) => ({
            id: driver.id,
            name: `${driver.first_name} ${driver.last_name}`,
            rank: index + 1,
            image: "/icons/default-driver.jpg", // Assuming a default image path
            points: driver.points,
            country: driver.country,
            wins: driver.wins,
            podiums: driver.podiums,
            championships: driver.championships,
          })
        );
        setDrivers(driverData);
      } catch (error) {
        console.error("Error fetching driver data:", error);
      }
    };

    fetchDrivers();
  }, []);

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

        {/* Display all drivers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 mx-56">
          {drivers.map((driver: Driver) => {
            return (
              <div
                key={driver.name}
                className="rounded-2xl overflow-hidden bg-blue-20 p-8"
              >
                <div className="relative z-10">
                  <img
                    src={`/uploads/` + driver.id + `.jpg`}
                    alt={driver.name}
                    width={500}
                    height={500}
                    className="rounded-2xl"
                  />
                  <div className="py-4 relative z-20">
                    <h2 className="text-white text-2xl text-left font-bold">
                      <a
                        href={"/" + driver.name.toLowerCase().replace(" ", "-")}
                        className="text-bronze hover:underline"
                      >
                        {driver.name}
                      </a>
                    </h2>

                    <div className="flex items-center mt-4">
                      <span className="text-neutral-200">{driver.country}</span>
                    </div>

                    <div className="mt-4">
                      <ul className="text-neutral-200 mt-2 space-y-1">
                        <li>
                          Wins: <span className="font-bold">{driver.wins}</span>
                        </li>
                        <li>
                          Podiums:{" "}
                          <span className="font-bold">{driver.podiums}</span>
                        </li>
                        <li>
                          Championships:{" "}
                          <span className="font-bold">
                            {driver.championships}
                          </span>
                        </li>
                        <li>
                          Points:{" "}
                          <span className="font-bold">{driver.points}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
