import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    src: "/images/pembelajaran-flexibel.jpg",
    title: "Pembelajaran Fleksibel",
    subtitle: "Akses Mudah, Kapan Saja & di Mana Saja",
    text: "Gunakan PCV Academy lewat smartphone, tablet, atau komputer. Materi, sinyal, dan notifikasi penting selalu bisa diakses dengan cepat dan real-time, memastikan Anda selalu update dan siap ambil keputusan trading terbaik.",
  },
  {
    src: "/images/sinyal-trading.jpeg",
    title: "Sinyal Trading Akurat",
    subtitle: "Sinyal Akurat & Manajemen Risiko Cerdas",
    text: "Dapatkan informasi trading yang disampaikan oleh mentor PCV Academy secara cepat dan akurat. Sinyal diberikan lengkap dengan entry, stop loss, dan take profit, serta dilengkapi dengan analisa risiko dan reasoning profit.",
  },
  {
    src: "/images/mentor-berpengalaman.JPEG",
    title: "Mentor Berpengalaman",
    subtitle: "Belajar dari Mentor Berpengalaman",
    text: "Belajar trading langsung dari para mentor berpengalaman yang siap membimbing Anda mulai dari pemahaman dasar hingga ke level mahir, termasuk mindset, prinsip-prinsip, dan kontrol emosi.",
  },
  {
    src: "/images/komunitas-aktif.jpg",
    title: "Komunitas Aktif",
    subtitle: "Komunitas Aktif & Support Langsung",
    text: "Bergabung di komunitas eksklusif PCV Academy lewat aplikasi dan telegram. Bertanya, berdiskusi, hingga saling memberi semangat dan inspirasi trading setiap hari.",
  },
];

export default function DetailKeuntungan() {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-24">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {/* Gambar kiri */}
            <div className="w-full md:w-1/2">
              <Image
                alt={step.title}
                className="rounded-xl shadow-lg w-full h-auto"
                height={600}
                src={step.src}
                width={800}
              />
            </div>

            {/* Konten kanan */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-base font-semibold text-gray-700 mb-4">
                {step.subtitle}
              </p>
              <p className="text-base text-gray-600">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
