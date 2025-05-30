import Image from "next/image";
import { motion } from "framer-motion";

import { LogoBig } from "@/components/icons";

export default function ProfilPerusahaanSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Kiri: Logo di atas, text di bawahnya, center align */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center md:justify-start mb-6">
            <LogoBig size={300} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold uppercase">
            Prosperity Catalyst Vision
          </h2>
          <p className="text-gray-700 mt-4 max-w-md mx-auto md:mx-0 text-sm md:text-base">
            Platform edukasi dan layanan trading berbasis AI yang dirancang
            untuk membantu trader pemula hingga profesional meraih profit
            konsisten dan kebebasan finansial.
          </p>
        </motion.div>

        {/* Kanan: Chart Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            alt="Chart Vision"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
            height={300}
            src="/images/chart.jpg" // Sesuaikan dengan path kamu
            width={400}
          />
        </motion.div>
      </div>
    </section>
  );
}
