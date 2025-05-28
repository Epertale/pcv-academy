import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const plans = [
  {
    title: "SILVER",
    description:
      "Cocok untuk trader pemula yang ingin memperdalam lebih ke dalam pasar digital.",
    price: "IDR 2,599,999.00 / 3 months",
    features: [
      "Akses Channel Telegram Sinyal, Edukasi, Webinar.",
      "Akses group komunitas trading forex, saham, komoditas, crypto, PVC Academy.",
      "Mendapatkan indikator sinyal untuk digunakan di Aplikasi Trading View.",
    ],
    badge: null,
  },
  {
    title: "GOLD",
    description:
      "Dikhususkan untuk trader yang paham pentingnya analisa namun perlu bimbingan lebih dalam.",
    price: "IDR 14,599,999.00 / Year",
    features: [
      "Akses Channel Telegram Sinyal, Edukasi, Webinar.",
      "Akses group komunitas trading forex, saham, komoditas, crypto PVC Academy.",
      "Mendapatkan indikator sinyal untuk digunakan di Aplikasi Trading View.",
      "Pilihan mentoring 1x pertemuan dengan mentor Berpengalaman.",
    ],
    badge: null,
  },
  {
    title: "PLATINUM",
    description:
      "Untuk mereka yang ingin masuk dunia trading dengan tingkat penting dan memerlukan bimbingan eksklusif.",
    price: "IDR 21,999,999.00 Lifetime",
    features: [
      "Akses Channel Telegram Sinyal, Edukasi, Webinar.",
      "Akses group komunitas trading forex, saham, komoditas, crypto PVC Academy.",
      "Mendapatkan indikator sinyal untuk digunakan di Aplikasi Trading View.",
      "Pilihan mentoring 3x pertemuan bersama mentor Berpengalaman.",
      "Akses ke dalam job & society dengan related trader-trader Berpengalaman.",
    ],
    badge: null,
  },
  {
    title: "Swing Trading Lab",
    description:
      "Untuk trader yang perlu bimbingan dalam mengambil posisi trade.",
    price: "IDR 25,174,609.48 Lifetime",
    features: [
      "Akses untuk menghadiri acara eksklusif khusus VIP.",
      "Akses komunitas bersama trader terbaik SNL.",
      "Melatih analisa dan strategi.",
      "Mentoring bersama mentor yang berpengalaman.",
    ],
    badge: "Swing Trading Lab",
  },
];

export default function SubscriptionPlans() {
  return (
    <div className="pt-16 min-h-screen bg-white pb-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-4">Berlangganan</h2>
      <div className="h-1 w-24 bg-black mx-auto mb-12" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {plan.badge && (
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 10.5L12 14.25l-2.25-2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{plan.badge}</span>
              </div>
            )}

            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="mb-4 text-sm text-gray-300">{plan.description}</p>
            <p className="text-lg font-semibold mb-4">{plan.price}</p>
            <ul className="space-y-2 text-sm text-gray-300 mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-400">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              as={Link}
              className="mt-auto bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition"
              color="primary"
              href="/auth/register"
            >
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
