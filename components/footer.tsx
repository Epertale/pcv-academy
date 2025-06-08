import { Logo } from "@/components/icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Logo />
            <h1 className="font-semibold text-sm">
              PROSPERITY CATALYST VISION
            </h1>
          </div>
          <p className="text-sm italic text-gray-300 mb-4">
            Your Trusted Trading Education Partner
          </p>
          <div className="relative w-full max-w-xs">
            <input
              className="w-full pl-4 pr-10 py-2 rounded-md text-sm text-black"
              placeholder="Masukkan Email Anda"
              type="email"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-white rounded-md w-7 flex items-center justify-center">
              <span className="text-black text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold text-sm mb-2">Contact</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Customer Service: +6281-2300-82514</li>
            <li>
              Email:{" "}
              <a className="underline" href="mailto:support@pcvacademy.com">
                support@pcvacademy.com
              </a>
            </li>
            <li>
              Alamat: Gedung Financial Center, Lt. 5, Jl. Sudirman Kav. 52-53,
              Surabaya
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-semibold text-sm mb-2">Media Social</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><Link href="https://www.instagram.com/dancingwithgold_" className="text-white">Instagram</Link></li>
            <li><Link href="https://www.tiktok.com/@dwgacademy_" className="text-white">TikTok</Link></li>
            <li><Link href="https://t.me/dancingwithgold" className="text-white">Telegram</Link></li>
            <li><Link href="https://wa.me/6281230082514" className="text-white">WhatsApp</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <span>© Prosperity catalyst vision All Rights Reserved 2025</span>
        <span className="mt-2 md:mt-0">Terms & Conditions</span>
      </div>
    </footer>
  );
};
