"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import backgroundImage from '/icons/poster1.png';

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      console.log({email, password});
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const response = await res.json();
      console.log(response);

      // Assuming the response contains the JWT token & manager id in response.jwt
      if (response.jwt && response.managerId && response.driver1Id && response.driver2Id) {
        localStorage.setItem("authToken", response.jwt);
        localStorage.setItem("managerId", response.managerId);
        localStorage.setItem("driver1Id", response.driver1Id);
        localStorage.setItem("driver2Id", response.driver2Id);

      }

      // Redirect or perform other actions after a successful login
      window.location.href = "/driver";
    } catch (err) {
      console.error("Login error:", err);

      // Handle error cases and display the error message
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }    
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen flex items-center overflow-hidden bg-blue-10">
      <section
        className="ml-5 w-1/2 h-[95vh] flex items-center justify-center rounded-md"
        style={{
          backgroundImage: `url('/icons/poster1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold"></h1>
        </div>
      </section>
      <section className="mx-2 w-1/2 h-[95vh] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="mx-auto grid w-[550px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-6xl text-left font-bold py-4">Login</h1>
              <p className="text-left font-medium text-muted-foreground">
                Don’t have an account?{" "}
                <Link href="/signup">
                  <span className="text-red-1 hover:text-red-20 font-bold">Sign up</span>
                </Link>
              </p>
            </div>
            <div className="grid gap-8">
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="grid gap-2">
                <Label htmlFor="email">*Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">*Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm text-red-1 hover:text-red-20"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                onClick={handleLogin}
                className="w-1/4 h-12 inline-flex animate-shimmer items-center justify-center rounded-xl border border-red-10 bg-[linear-gradient(110deg,#C30000,45%,#EE0000,55%,#C30000)] bg-[length:200%_100%] px-6 text-md font-semibold transition-all duration-800 ease-in-out hover:bg-[length:150%_100%] hover:scale-105 active:scale-95 focus:outline-none focus:ring-0"
                disabled={loading}
              >
                {loading ? "Loading..." : "LOGIN"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
