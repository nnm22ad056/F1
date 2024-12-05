"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface DriverUpdateData {
  id: number; 
  first_name?: string;
  last_name?: string;
  country?: string;
  car?: string;
  wins?: number;
  podiums?: number;
  championships?: number;
}

export default function DriverUpdateForm({ driverId }: { driverId: number }) {
  const [formData, setFormData] = useState<DriverUpdateData>({
    id: driverId,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "wins" || name === "podiums" || name === "championships"
        ? parseInt(value) || 0
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await axios.put("/api/driver", formData);
      setMessage(response.data.message || "Driver updated successfully!");
    } catch (error: any) {
      setMessage(
        error.response?.data?.error || "An unexpected error occurred!"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-gray-800 shadow rounded text-gray-200">
      <h1 className="text-2xl font-bold mb-6 text-gray-100">Update Driver</h1>
      {message && (
        <div
          className={`p-4 mb-4 ${
            message.includes("error") ? "bg-red-700 text-white" : "bg-green-700 text-white"
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="first_name" className="block text-sm font-medium mb-2">
            First Name:
          </Label>
          <Input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Enter first name"
            value={formData.first_name || ""}
            onChange={handleChange}
            className="bg-gray-900 text-gray-100"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="last_name" className="block text-sm font-medium mb-2">
            Last Name:
          </Label>
          <Input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Enter last name"
            value={formData.last_name || ""}
            onChange={handleChange}
            className="bg-gray-900 text-gray-100"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="country" className="block text-sm font-medium mb-2">
            Country:
          </Label>
          <Input
            type="text"
            id="country"
            name="country"
            placeholder="Enter country"
            value={formData.country || ""}
            onChange={handleChange}
            className="bg-gray-900 text-gray-100"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="car" className="block text-sm font-medium mb-2">
            Car:
          </Label>
          <Input
            type="text"
            id="car"
            name="car"
            placeholder="Enter car"
            value={formData.car || ""}
            onChange={handleChange}
            className="bg-gray-900 text-gray-100"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="wins" className="block text-sm font-medium mb-2">
            Wins:
          </Label>
          <Input
            type="number"
            id="wins"
            name="wins"
            placeholder="Enter wins"
            value={formData.wins || 0}
            onChange={handleChange}
            className="bg-gray-900 text-gray-100"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="podiums" className="block text-sm font-medium mb-2">
            Podiums:
          </Label>
          <Input
            type="number"
            id="podiums"
            name="podiums"
            placeholder="Enter podiums"
            value={formData.podiums || 0}
            onChange={handleChange}
            className="bg-gray-900 text-gray-100"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="championships" className="block text-sm font-medium mb-2">
            Championships:
          </Label>
          <Input
            type="number"
            id="championships"
            name="championships"
            placeholder="Enter championships"
            value={formData.championships || 0}
            onChange={handleChange}
            className="bg-gray-900 text-gray-100"
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-700 text-gray-100">
          {isSubmitting ? "Updating..." : "Update Driver"}
        </Button>
      </form>
    </div>
  );
}
