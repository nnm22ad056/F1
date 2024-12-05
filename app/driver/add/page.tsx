"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface DriverFormData {
  first_name: string;
  last_name?: string;
  country: string;
  car?: string;
  managerId: number;
  wins?: number;
  podiums?: number;
  championships?: number;
}

export default function DriverForm() {
  const [formData, setFormData] = useState<DriverFormData>({
    first_name: "",
    last_name: "",
    country: "",
    car: "",
    managerId: 0,
    wins: 0,
    podiums: 0,
    championships: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "managerId" || name === "wins" || name === "podiums" || name === "championships"
        ? parseInt(value) || 0
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await axios.post("/api/driver", formData);
      setMessage(response.data.message || "Driver created successfully!");
    } catch (error: any) {
      setMessage(
        error.response?.data?.error || "An unexpected error occurred!"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6 text-blue-20">Add New Driver</h1>
      {message && (
        <div
          className={`p-4 mb-4 ${
            message.includes("error") ? "bg-red-200" : "bg-green-200"
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="first_name" className="text-blue-20 block text-sm font-medium mb-2">
            First Name:
          </Label>
          <Input
            required
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Enter first name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="last_name" className="text-blue-20 block text-sm font-medium mb-2">
            Last Name:
          </Label>
          <Input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Enter last name (optional)"
            value={formData.last_name || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="country" className="block text-sm font-medium mb-2 text-blue-20">
            Country:
          </Label>
          <Input
            required
            type="text"
            id="country"
            name="country"
            placeholder="Enter country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="car" className="block text-sm font-medium mb-2 text-blue-20">
            Car:
          </Label>
          <Input
            type="text"
            id="car"
            name="car"
            placeholder="Enter car (optional)"
            value={formData.car || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="managerId" className="block text-sm font-medium mb-2 text-blue-20">
            Manager ID:
          </Label>
          <Input
            required
            type="number"
            id="managerId"
            name="managerId"
            placeholder="Enter manager ID"
            value={formData.managerId || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="wins" className="block text-sm font-medium mb-2 text-blue-20">
            Wins:
          </Label>
          <Input
            type="number"
            id="wins"
            name="wins"
            placeholder="Enter number of wins (optional)"
            value={formData.wins || 0}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="podiums" className="block text-sm font-medium mb-2 text-blue-20">
            Podiums:
          </Label>
          <Input
            type="number"
            id="podiums"
            name="podiums"
            placeholder="Enter number of podiums (optional)"
            value={formData.podiums || 0}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="championships" className="block text-sm font-medium mb-2 text-blue-20">
            Championships:
          </Label>
          <Input
            type="number"
            id="championships"
            name="championships"
            placeholder="Enter championships won (optional)"
            value={formData.championships || 0}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
