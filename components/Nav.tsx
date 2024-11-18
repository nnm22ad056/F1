import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  
  // State to store if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
    if (token) {
      console.log(token)
      console.log("auth")
      setIsAuthenticated(true); // User is authenticated
    } else {
      console.log("noauth")
      setIsAuthenticated(false); // User is not authenticated
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from localStorage
    setIsAuthenticated(false); // Update authentication state
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <nav className="glassheader fixed top-0 left-0 w-full z-50 p-4 border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/icons/F1.svg"
              alt="F1 Logo"
              className="h-6 w-auto"
            />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-grow flex justify-center space-x-10 font-medium ml-28">
          <Link href="/">
            <span
              className={`text-red-10 hover:text-red-20 font-medium ${
                pathname === "/" ? "font-semibold text-red-10" : "text-white"
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/leaderboard">
            <span
              className={`text-red-10 hover:text-red-20 font-medium ${
                pathname === "/leaderboard"
                  ? "font-semibold text-red-10"
                  : "text-white"
              }`}
            >
              Leaderboard
            </span>
          </Link>
          <Link href="/driver">
            <span
              className={`text-red-10 hover:text-red-20 font-medium ${
                pathname === "/driver"
                  ? "font-semibold text-red-10"
                  : "text-white"
              }`}
            >
              Drivers
            </span>
          </Link>
        </div>

        {/* Button Section */}
        <div className="flex items-center space-x-5">
          {/* Conditionally render the buttons based on authentication state */}
          {!isAuthenticated ? (
            <>
              <a href="/signup">
                <button className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-900 bg-blue-10 px-5 font-medium text-xs hover:bg-blue-20 hover:scale-105 active:scale-95">
                  SIGN UP
                </button>
              </a>
              <a href="/login">
                <button className="inline-flex h-12 items-center justify-center rounded-full border border-red-20 bg-red-1 px-6 font-medium text-xs hover:bg-red-20 hover:scale-105 active:scale-95">
                  LOGIN
                </button>
              </a>
            </>
          ) : (
            <>
              <a href="/dashboard">
              <button className="inline-flex h-12 items-center justify-center rounded-full border border-red-20 bg-red-1 px-6 font-medium text-xs hover:bg-red-20 hover:scale-105 active:scale-95"
              >
                DASHBOARD
              </button>
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
