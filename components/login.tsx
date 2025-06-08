// components/LoginPage.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/router";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { FcGoogle } from "react-icons/fc";

import { LogoBig } from "./icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/dashboard"); // Redirect ke dashboard jika login sukses
    } else {
      const data = await response.json();
      setErrorMsg(data.message || "Login gagal");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-5xl bg-white rounded shadow-md overflow-hidden flex-col md:flex-row">
        {/* Mobile Logo */}
        <div className="md:hidden flex justify-center items-center w-full py-8 bg-white">
          <LogoBig size={150} />
        </div>

        {/* Kiri - Logo (untuk desktop) */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-white p-10 relative">
          <div className="flex justify-center md:justify-start mb-6">
            <LogoBig className="" size={200} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-center">
            Prosperity Catalyst Vision
          </h2>
        </div>

        {/* Kanan - Form Login */}
        <div className="w-full md:w-1/2 bg-gray-200 px-8 py-10">
          <h2 className="text-lg font-bold mb-6">MASUK</h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center space-x-2">
              <Checkbox id="rememberMe" />
              <label className="text-sm" htmlFor="rememberMe">
                Ingat saya
              </label>
            </div>
            {errorMsg && <p className="text-red-500 mb-2">{errorMsg}</p>}
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              LANJUT
            </Button>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-400" />
              <span className="px-2 text-xs text-gray-600">
                atau lanjutkan dengan
              </span>
              <div className="flex-grow h-px bg-gray-400" />
            </div>

            <Button className="w-full flex items-center justify-center gap-2">
              <FcGoogle size={20} />
              Google
            </Button>

            <p className="text-xs text-gray-600 mt-4 text-center">
              Dengan mendaftar, Anda setuju dengan{" "}
              <span className="underline cursor-pointer">Syarat</span>,{" "}
              <span className="underline cursor-pointer">Ketentuan</span>, dan{" "}
              <span className="underline cursor-pointer">Kebijakan PCV</span>.
              <br />
              <span className="text-black">Belum Punya Akun?</span>{" "}
              <a
                className="text-purple-700 font-semibold"
                href="/auth/register"
              >
                Daftar
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
