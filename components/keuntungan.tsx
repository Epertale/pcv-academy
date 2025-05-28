import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import Link from "next/link";

const keuntunganItems = [
  {
    src: "/images/pembelajaran-flexibel.jpg",
    title: "Pembelajaran Fleksibel",
    description:
      "Didesain untuk fleksibilitas maksimal – bisa digunakan kapanpun melalui smartphone, tablet, atau komputer, dengan update informasi yang selalu tepat waktu.",
  },
  {
    src: "/images/sinyal-trading.jpeg",
    title: "Sinyal Trading Akurat",
    description:
      "Dapatkan notifikasi sinyal trading akurat 70–80% yang telah diverifikasi oleh tim analis profesional kami, lengkap dengan level entry dan manajemen risiko.",
  },
  {
    src: "/images/mentor-berpengalaman.JPEG",
    title: "Mentor Berpengalaman",
    description:
      "Tim mentor kami terdiri dari trader berizin resmi yang telah melewati berbagai siklus pasar, mampu membimbing Anda dengan metode praktis menuju target finansial mereka.",
  },
  {
    src: "/images/komunitas-aktif.jpg",
    title: "Komunitas Aktif",
    description:
      "Bergabunglah dengan komunitas besar aktif dari trader, belajar bersama, bertanya, dan mendapatkan motivasi serta peluang baru setiap hari dari mentor berpengalaman.",
  },
];

export default function KeuntunganSection() {
  return (
    <section className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Keuntungan</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {keuntunganItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-xl p-6 shadow-lg justify-between items-center"
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="w-2/3 pr-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                alt={`item-${index}`}
                className="w-28 h-56 lg:w-56 lg:h-28 object-cover rounded-md"
                height={900}
                src={item.src}
                width={1600}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
      {/* Tombol CTA */}
      <motion.div
        className="flex justify-center pt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <Link href="/keuntungan">
          <Button className="shadow-lg text-white bg-gradient-to-r from-neutral-900 to-neutral-800 font-bold py-3 px-6 rounded-lg">
            Learn more
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
