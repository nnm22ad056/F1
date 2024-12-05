"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const signup = async () => {
    try {
      console.log(formData);
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Signup failed");
      }

      const response = await res.json();
      console.log(response);

      // Store JWT token & manager id in localStorage
      if (response.jwt && response.managerId && response.driver1Id && response.driver2Id) {
        localStorage.setItem("authToken", response.jwt);
        localStorage.setItem("managerId", response.managerId);
        localStorage.setItem("driver1Id", response.driver1Id);
        localStorage.setItem("driver2Id", response.driver2Id);
      }

      // Redirect to the dashboard after successful signup
      window.location.href = "/driver";
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <main className="w-full min-h-screen flex items-center overflow-hidden">
      <section className="mx-2 w-1/2 h-[95vh] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="mx-auto grid w-[550px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-6xl text-left font-bold py-4">Create an account</h1>
              <p className="text-left font-medium text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login">
                  <span className="text-red-10 hover:text-red-20 font-bold">Login</span>
                </Link>
              </p>
            </div>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="grid gap-2 w-1/2">
                  <Label htmlFor="firstName">*First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2 w-1/2">
                  <Label htmlFor="lastName">*Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">*Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">*Company</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">*Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                onClick={signup}
                className="w-1/4 h-12 inline-flex animate-shimmer items-center justify-center rounded-xl border border-red-10 bg-[linear-gradient(110deg,#C30000,45%,#EE0000,55%,#C30000)] bg-[length:200%_100%] px-6 text-md font-semibold transition-all duration-800 ease-in-out hover:bg-[length:150%_100%] hover:scale-105 active:scale-95 focus:outline-none focus:ring-0"
              >
                SIGN UP
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="mr-5 w-1/2 h-[95vh] flex items-center justify-center rounded-md"
        style={{
          backgroundImage: `url('/icons/poster1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold"></h1>
        </div>
      </section>
    </main>
  );
};

export default SignupForm;
