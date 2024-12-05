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
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Add Race Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter race location"
            required
          />
        </div>

        {/* Winner ID */}
        <div>
          <label
            htmlFor="winnerId"
            className="block text-sm font-medium text-gray-700"
          >
            Winner ID
          </label>
          <input
            type="number"
            id="winnerId"
            name="winnerId"
            value={formData.winnerId}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter winner ID"
            required
          />
        </div>

        {/* Laps */}
        <div>
          <label
            htmlFor="laps"
            className="block text-sm font-medium text-gray-700"
          >
            Number of Laps
          </label>
          <input
            type="number"
            id="laps"
            name="laps"
            value={formData.laps}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter number of laps"
            required
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <div className="flex gap-3">
            <input
              type="number"
              name="hours"
              value={formData.hours}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Hours"
              required
            />
            <input
              type="number"
              name="minutes"
              value={formData.minutes}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Minutes"
              required
            />
            <input
              type="number"
              name="seconds"
              value={formData.seconds}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Seconds"
              required
            />
            <input
              type="number"
              name="milliseconds"
              value={formData.milliseconds}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Milliseconds"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit Race Details
        </button>
      </form>
    </div>
  );
}
