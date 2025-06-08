"use client";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useRouter } from "next/router";

import { LogoBig } from "./icons";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };

    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      alert("Registrasi berhasil!");
      router.push("/auth/login");
    } else {
      alert("Registrasi gagal.");
    }
  };
  const [passwordVisible, setPasswordVisible] = useState(false);

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

        {/* Kanan - Form Registrasi */}
        <div className="w-full md:w-1/2 bg-gray-200 px-8 py-10">
          <h2 className="text-lg font-bold mb-6">PENDAFTARAN</h2>

          <form className="space-y-4" onSubmit={handleRegister}>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-white">
              <option value="">Negara tempat tinggal</option>
              <option value="ID">Indonesia</option>
              <option value="MY">Malaysia</option>
              <option value="SG">Singapura</option>
              {/* Tambahkan opsi lain sesuai kebutuhan */}
            </select>

            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative">
              <Input
                type="password"
                placeholder="Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Input placeholder="Kode mitra (opsional)" type="text" />

            <div className="flex items-start space-x-2">
              <Checkbox />
              <span className="text-sm text-gray-700">
                Saya menyatakan dan mengonfirmasi bahwa saya bukan warga negara
                atau penduduk AS untuk tujuan pajak.
              </span>
            </div>

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
              Masuk dengan Google
            </Button>

            <p className="text-xs text-gray-600 mt-4 text-center">
              Dengan mendaftar, Anda setuju dengan{" "}
              <span className="underline cursor-pointer">Syarat</span>,{" "}
              <span className="underline cursor-pointer">Ketentuan</span>, dan{" "}
              <span className="underline cursor-pointer">Kebijakan PCV</span>.
              <br />
              <span className="text-black">Sudah Punya Akun?</span>{" "}
              <a className="text-purple-700 font-semibold" href="/auth/login">
                Masuk
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
