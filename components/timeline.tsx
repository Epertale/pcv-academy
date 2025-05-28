import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const steps = [
  {
    src: "/images/perkenalan-trading.jpg",
    text: "Mulai perjalanan trading anda dengan panduan praktis dari Mentor Berpengalaman",
    title: "Perkenalan Trading",
  },
  {
    src: "/images/teknikal-analisis.webp",
    text: "Mempelajari teknik analisis yang tepat dan gampang sehingga mudah dipahami.",
    title: "Pahami Teknikal Analisis",
  },
  {
    src: "/images/komunitas.jpg",
    text: "Edukasi terstruktur dari dasar hingga mahir, komunitas supportif, dan tools trading akurat untuk semua level trader",
    title: "Gabung Komunitas Ekslusif",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-24">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center gap-8 md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {/* Gambar */}
            <motion.div className="w-full md:w-1/2">
              <Image
                alt={`step-${index}`}
                className="h-[300px] w-full rounded-xl shadow-lg"
                height={900}
                src={step.src}
                width={1600}
              />
            </motion.div>

            {/* Teks */}
            <div className="w-full text-center md:w-1/2 md:text-left">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="text-lg font-medium text-gray-700">{step.text}</p>
            </div>
          </motion.div>
        ))}

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <Link href="/auth/login">
            <Button className="bg-gradient-to-r from-neutral-900 to-neutral-800 font-bold px-6 py-3 rounded-lg shadow-lg text-white">
              COBA TRIAL 7 HARI
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
