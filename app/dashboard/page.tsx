"use client"

// app/dashboard/page.tsx
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // App Router version
import Link from "next/link";

const Dashboard = () => {
  const [selectedProfile, setSelectedProfile] = useState("Profile 1");
  const [activeSection, setActiveSection] = useState("Dashboard");
  const router = useRouter();

  // Handle Profile Switch
  const handleProfileSwitch = () => {
    setSelectedProfile(selectedProfile === "Profile 1" ? "Profile 2" : "Profile 1");
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove JWT from localStorage
    router.push("/"); // Redirect to the main page (home page)
  };

  return (
    <div className="flex min-h-screen flex-col">

      {/* Top Navbar */}
      <div className="w-full bg-blue-10 text-white p-4 flex justify-between items-center">
        {/* Dashboard Name */}
        <div className="text-xl font-bold">Dashboard</div>

        {/* Profile Switcher and Log out */}
        <div className="flex items-center space-x-5">
          <button
            onClick={handleProfileSwitch}
            className="px-4 py-2 bg-red-1 text-white rounded-md"
          >
            Switch to {selectedProfile === "Profile 1" ? "Profile 2" : "Profile 1"}
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-20 text-white rounded-md"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Layout with Sidebar for Navigation */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="w-1/4 bg-blue-10 text-white p-5">
          <div className="flex flex-col space-y-5">
            <Link href="#" onClick={() => setActiveSection("Dashboard")}>
              <div
                className={`hover:bg-blue-20 p-2 rounded ${
                  activeSection === "Dashboard" ? "bg-blue-20" : ""
                }`}
              >
                Dashboard
              </div>
            </Link>
            <Link href="#" onClick={() => setActiveSection("Profile")}>
              <div
                className={`hover:bg-blue-20 p-2 rounded ${
                  activeSection === "Profile" ? "bg-blue-20" : ""
                }`}
              >
                Profile
              </div>
            </Link>
            <Link href="#" onClick={() => setActiveSection("Settings")}>
              <div
                className={`hover:bg-blue-20 p-2 rounded ${
                  activeSection === "Settings" ? "bg-blue-20" : ""
                }`}
              >
                Settings
              </div>
            </Link>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-5">
          <div className="bg-blue-20 p-5 rounded-lg shadow-md">
            {activeSection === "Dashboard" && (
              <div>
                <h2 className="text-xl font-bold mb-3">Dashboard</h2>
                <p>Welcome to your Dashboard. Here you can see an overview of your data.</p>
              </div>
            )}
            {activeSection === "Profile" && (
              <div>
                <h2 className="text-xl font-bold mb-3">Profile</h2>
                <p>This is your profile. Here you can edit your details and view your information.</p>
                <p>Currently viewing {selectedProfile}</p>
              </div>
            )}
            {activeSection === "Settings" && (
              <div>
                <h2 className="text-xl font-bold mb-3">Settings</h2>
                <p>Change your settings here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
