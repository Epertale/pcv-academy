import Image from "next/image";
import { motion } from "framer-motion";
import images from "@/public/images/images.png";
import { Button } from "@heroui/button";
import Link from "next/link";

const services = [
  {
    id: 1,
    src: "/images/materi-trading.webp",
    title: 'Edukasi Trading',
    features: [
      'Materi pembelajaran untuk semua level (Beginner, Intermediate, Expert).',
      'Webinar, workshop, dan konten edukatif tentang analisis pasar, manajemen risiko, dan psikologi trading.',
    ],
    alt: 'Gambar Edukasi Trading',
  },
  {
    id: 2,
    src: "/images/sinyal-trading.jpeg",
    title: 'Sinyal Trading',
    features: [
      'Sinyal manual dengan akurasi 70-90% untuk panduan eksekusi market.',
      'Notifikasi real-time via aplikasi atau website.',
    ],
    alt: 'Gambar Sinyal Trading',
  },
  {
    id: 3,
    src: "/images/zona-trading.png",
    title: 'Zona Mapping',
    features: [
      'Rekomendasi zona buy/sell yang teruji dengan keberhasilan tinggi hingga 8 dari 10 zona.',
    ],
    alt: 'Gambar Zona Mapping',
  },
  {
    id: 4,
    src: "/images/komunitas.jpg",
    title: 'Komunitas Eksklusif',
    features: [
      'Forum diskusi dan grup Telegram untuk berbagi strategi dan pengalaman.',
    ],
    alt: 'Gambar Komunitas Eksklusif',
  },
  {
    id: 5,
    src: "/images/dukungan.png",
    title: 'Dukungan 24/7',
    features: [
      'Customer service siap membantu kapan saja.',
    ],
    alt: 'Gambar Dukungan 24/7',
  },
];

export default function LayananSection() {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Layanan</h2>
        
        {/* Container diubah menjadi flex */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="text-white shadow-lg bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-transform"
              style={{
                flex: '1 1 300px', // Fleksibel dengan basis 300px
                maxWidth: '400px', // Maksimum lebar card
                minWidth: '300px', // Minimum lebar card
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="relative h-40 w-full">
                <Image
                  src={service.src}
                  alt={service.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center pt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/layanan">
            <Button
              className="shadow-lg text-white bg-gradient-to-r from-neutral-900 to-neutral-800 font-bold py-3 px-6 rounded-lg"
            >
              Learn more
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
