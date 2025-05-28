"use client";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

import { LogoBig } from "./icons";

export default function RegisterPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-5xl bg-white rounded shadow-md overflow-hidden">
        {/* Kiri - Logo dan Brand */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-white p-10 relative">
          <div className="flex justify-center md:justify-start mb-6">
            <LogoBig size={200} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-center">
            Prosperity Catalyst Vision
          </h2>
          <div className="absolute top-6 left-6 w-4 h-4 bg-gray-300 rounded-full" />
          <div className="absolute bottom-8 left-12 w-4 h-4 bg-gray-300 rounded-full" />
          <div className="absolute top-1/2 right-2 w-3 h-3 bg-gray-300 rounded-full" />
        </div>

        {/* Kanan - Form Registrasi */}
        <div className="w-full md:w-1/2 bg-gray-200 px-8 py-10">
          <h2 className="text-lg font-bold mb-6">PENDAFTARAN</h2>

          <form className="space-y-4">
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-white">
              <option value="">Negara tempat tinggal</option>
              <option value="ID">Indonesia</option>
              <option value="MY">Malaysia</option>
              <option value="SG">Singapura</option>
              {/* Tambahkan opsi lain sesuai kebutuhan */}
            </select>

            <Input placeholder="Email" type="email" />

            <div className="relative">
              <Input
                placeholder="Kata Sandi"
                type={passwordVisible ? "text" : "password"}
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm"
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? "Sembunyikan" : "Tampilkan"}
              </button>
            </div>

            <Input placeholder="Kode mitra (opsional)" type="text" />

            <div className="flex items-start space-x-2">
              <Checkbox />
              <span className="text-sm text-gray-700">
                Saya menyatakan dan mengonfirmasi bahwa saya bukan warga negara
                atau penduduk AS untuk tujuan pajak.
              </span>
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
