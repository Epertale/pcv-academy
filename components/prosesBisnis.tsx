// components/BusinessProcessFlow.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    title: "1. Mendaftar di platform",
    text: "Cukup mendaftar sekali untuk mendapatkan akses ke semua fitur pembelajaran",
  },
  {
    title: "2. Memilih Pembelajaran",
    text: "Memilih pembelajaran yang sesuai dengan pengalaman dan kebutuhan anda.",
  },
  {
    title: "3. Menentukan Level Pembelajaran",
    text: "Tentukan level pembelajaran yang sesuai dengan kemampuan anda.",
  },
  {
    title: "4. Mengikuti materi",
    text: "Mengikuti materi, evaluasi, mentoring secara mandiri dan fleksibel.",
  },
  {
    title: "5. Aktif di komunitas",
    text: "Aktif di komunitas, tanya jawab, diskusi, serta belajar bersama.",
  },
  {
    title: "6. Mendapatkan Evaluasi & Mentoring",
    text: "Setiap peserta mendapatkan evaluasi dan mentoring.",
  },
];

export default function BusinessProcessFlow() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background parallax */}
      <motion.div
        style={{
          backgroundImage: "url('/images/education-bg.jpg')",
          y,
        }}
        className="absolute inset-0 bg-cover bg-center z-0"
      />
      {/* Overlay */}
      <div className="absolute z-10" />

      <div className="relative z-20 max-w-xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-center text-black mb-10">
          Bagaimana Tahapan Pembelajaran di kami?
        </h2>

        <div className="flex flex-col gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-xl text-xl px-4 py-1 w-fit mx-auto text-sm font-semibold shadow-lg shadow-black/50 bg-white">
                {step.title}
              </div>
              <p className="rounded-xl p-3 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white mt-2 text-lg">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
