// components/LoginPage.tsx
"use client";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { FcGoogle } from "react-icons/fc";

import { LogoBig } from "./icons";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-5xl bg-white rounded shadow-md overflow-hidden">
        {/* Kiri - Logo dan Brand */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-white p-10 relative">
          <div className="flex justify-center md:justify-start mb-6">
            <LogoBig className="" size={200} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-center">
            Prosperity Catalyst Vision
          </h2>
          {/* Background dots */}
          <div className="absolute top-6 left-6 w-4 h-4 bg-gray-300 rounded-full" />
          <div className="absolute bottom-8 left-12 w-4 h-4 bg-gray-300 rounded-full" />
          <div className="absolute top-1/2 right-2 w-3 h-3 bg-gray-300 rounded-full" />
        </div>

        {/* Kanan - Form Login */}
        <div className="w-full md:w-1/2 bg-gray-200 px-8 py-10">
          <h2 className="text-lg font-bold mb-6">MASUK</h2>

          <form className="space-y-4">
            <Input placeholder="Email/No Telepon" type="text" />
            <Input placeholder="Password" type="password" />

            <div className="flex items-center space-x-2">
              <Checkbox id="rememberMe" />
              <label className="text-sm" htmlFor="rememberMe">
                Ingat saya
              </label>
            </div>

            <Button className="w-full bg-black text-white hover:bg-gray-800">
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
