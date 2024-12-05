"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import RaceDetailsForm from "@/components/RaceDetailsForm";

const Dashboard = () => {
  const [selectedDriver, setSelectedDriver] = useState("Driver 1"); // Default to Driver 1
  const [activeSection, setActiveSection] = useState("Race Details");
  const [driverData, setDriverData] = useState(null); // Holds the fetched driver details
  const [formData, setFormData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    description: "",
    country: "",
    car: "",
    points: 0,
    wins: 0,
    podiums: 0,
    championships: 0,
  }); // Form data
  const router = useRouter();

  // Get the Driver ID from localStorage
  const driver1Id = localStorage.getItem("driver1Id");
  const driver2Id = localStorage.getItem("driver2Id");


  // Fetch driver data from the backend
  const fetchDriverData = async (driverId: string) => {
    try {
      const response = await axios.get(`/api/driver/${driverId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      console.log("Driver data:", response.data);
      const fetchedData = response.data;
      setDriverData(fetchedData);

      // Ensure no field is null, set to empty string if null
      setFormData({
        id: fetchedData.id || "",
        first_name: fetchedData.first_name || "",
        last_name: fetchedData.last_name || "",
        description: fetchedData.description || "", // Ensure description is not null
        country: fetchedData.country || "",
        car: fetchedData.car || "",
        points: fetchedData.points || 0,
        wins: fetchedData.wins || 0,
        podiums: fetchedData.podiums || 0,
        championships: fetchedData.championships || 0,
      });
    } catch (error) {
      console.error("Error fetching driver data", error);
    }
  };

  // When a driver profile is selected, fetch the driver data
  useEffect(() => {
    if (selectedDriver === "Driver 1" && driver1Id) {
      fetchDriverData(driver1Id);
    } else if (selectedDriver === "Driver 2" && driver2Id) {
      fetchDriverData(driver2Id);
    }
  }, [selectedDriver]);

  // Handle form input change
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (update driver data)
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const driverId = selectedDriver === "Driver 1" ? driver1Id : driver2Id;
    try {
      const response = await axios.put(
        `/api/driver/${driverId}`,
        { ...formData },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      alert("Driver data updated successfully");
    } catch (error) {
      console.error("Error updating driver data", error);
      alert("Failed to update driver data");
    }
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

        {/* Logout */}
        <div className="flex items-center space-x-5">
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
            <Link href="#" onClick={() => setActiveSection("Race Details")}>
              <div
                className={`hover:bg-blue-20 p-2 rounded ${
                  activeSection === "Race Details" ? "bg-blue-20" : ""
                }`}
              >
                Race Details
              </div>
            </Link>
            <Link
              href="#"
              onClick={() => {
                setActiveSection("Driver 1");
                setSelectedDriver("Driver 1");
              }}
            >
              <div
                className={`hover:bg-blue-20 p-2 rounded ${
                  selectedDriver === "Driver 1" ? "bg-blue-20" : ""
                }`}
              >
                Driver 1
              </div>
            </Link>
            <Link
              href="#"
              onClick={() => {
                setActiveSection("Driver 2");
                setSelectedDriver("Driver 2");
              }}
            >
              <div
                className={`hover:bg-blue-20 p-2 rounded ${
                  selectedDriver === "Driver 2" ? "bg-blue-20" : ""
                }`}
              >
                Driver 2
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
            {activeSection === "Race Details" && (
              <div>
                {activeSection === "Race Details" && (
                  <div>
                    <h2 className="text-xl font-bold mb-3">Race Details</h2>
                    <p>
                      Welcome to your Race Details. Here you can add details for
                      a new race.
                    </p>
                    <RaceDetailsForm />
                  </div>
                )}
              </div>
            )}

            {(activeSection === "Driver 1" || activeSection === "Driver 2") &&
              driverData && (
                <div>
                  <h2 className="text-xl font-bold mb-3">
                    {selectedDriver}'s Profile
                  </h2>

                  <form onSubmit={handleFormSubmit}>
                    <div className="space-y-4">
                    <input
                        type="text"
                        name="DRIVER ID"
                        value={formData.id}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="First Name"
                        disabled
                      />
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Last Name"
                      />
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Description"
                      />
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Country"
                      />
                      <input
                        type="text"
                        name="car"
                        value={formData.car}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Car"
                      />
                      <input
                        type="number"
                        name="points"
                        value={formData.points}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Points"
                      />
                      <input
                        type="number"
                        name="wins"
                        value={formData.wins}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Wins"
                      />
                      <input
                        type="number"
                        name="podiums"
                        value={formData.podiums}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Podiums"
                      />
                      <input
                        type="number"
                        name="championships"
                        value={formData.championships}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        placeholder="Championships"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Update
                    </button>
                  </form>
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
