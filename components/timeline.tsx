import Image from "next/image";
import { Button } from "@heroui/button"; // Sesuaikan dengan project-mu
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    src: "/images/perkenalan-trading.jpg",
    title: "Perkenalan Trading",
    text: "Mulai perjalanan trading anda dengan panduan praktis dari Mentor Berpengalaman",
  },
  {
    src: "/images/teknikal-analisis.webp",
    title: "Pahami Teknikal Analisis",
    text: "Mempelajari teknik analisis yang tepat dan gampang sehingga mudah dipahami.",
  },
  {
    src: "/images/komunitas.jpg",
    title: "Gabung Komunitas Ekslusif",
    text: "Edukasi terstruktur dari dasar hingga mahir, komunitas supportif, dan tools trading akurat untuk semua level trader",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-24">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Gambar */}
            <motion.div className="w-full md:w-1/2">
              <Image
                src={step.src}
                alt={`step-${index}`}
                width={1600}
                height={900}
                className="w-full h-[300px] rounded-xl shadow-lg"
              />
            </motion.div>

            {/* Teks */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
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
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/auth/login">
            <Button
              className="shadow-lg text-white bg-gradient-to-r from-neutral-900 to-neutral-800 font-bold py-3 px-6 rounded-lg"
            >
              COBA TRIAL 7 HARI
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
