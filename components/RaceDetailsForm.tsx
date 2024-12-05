import axios from "axios";
import { useState } from "react";

export default function RaceDetailsForm() {
  const [formData, setFormData] = useState({
    location: "",
    winnerId: "",
    laps: "",
    hours: "",
    minutes: "",
    seconds: "",
    milliseconds: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Race Details Submitted:", formData);
    const response = axios.post("/api/races", formData);
  };

  return (
<div className="p-8 max-w-xl mx-auto bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-6 text-gray-800">
    Add Race Details
  </h2>
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Location */}
    <div>
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Location
      </label>
      <input
        type="text"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        placeholder="Enter race location"
        required
      />
    </div>

    {/* Winner ID */}
    <div>
      <label
        htmlFor="winnerId"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Winner ID
      </label>
      <input
        type="number"
        id="winnerId"
        name="winnerId"
        value={formData.winnerId}
        onChange={handleInputChange}
        className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        placeholder="Enter winner ID"
        required
      />
    </div>

    {/* Laps */}
    <div>
      <label
        htmlFor="laps"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Number of Laps
      </label>
      <input
        type="number"
        id="laps"
        name="laps"
        value={formData.laps}
        onChange={handleInputChange}
        className="block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        placeholder="Enter number of laps"
        required
      />
    </div>

    {/* Time */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Time
      </label>
      <div className="flex gap-4">
        <input
          type="number"
          name="hours"
          value={formData.hours}
          onChange={handleInputChange}
          className="w-1/4 rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Hours"
          required
        />
        <input
          type="number"
          name="minutes"
          value={formData.minutes}
          onChange={handleInputChange}
          className="w-1/4 rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Minutes"
          required
        />
        <input
          type="number"
          name="seconds"
          value={formData.seconds}
          onChange={handleInputChange}
          className="w-1/4 rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Seconds"
          required
        />
        <input
          type="number"
          name="milliseconds"
          value={formData.milliseconds}
          onChange={handleInputChange}
          className="w-1/4 rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Milliseconds"
          required
        />
      </div>
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-red-10 text-white py-3 px-4 rounded-md hover:bg-red-20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Submit Race Details
    </button>
  </form>
</div>

  );
}
