import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    src: "/images/materi-trading.webp",
    title: "Materi Pembelajaran untuk Semua Level",
    subtitle: "Dipilih mentor, disusun berdasarkan level",
    text: "Materi disusun secara sistematis dari level pemula, menengah, hingga lanjutan. PCV Academy akan memastikan Anda belajar dengan tahapan yang tepat dan sesuai dengan level Anda sekarang.",
  },
  {
    src: "/images/sinyal-trading.jpeg",
    title: "Sinyal Trading",
    subtitle: "Analisa Menarik & Eksekusi Real-Time",
    text: "Mentor akan memberikan sinyal setiap harinya secara real-time, dilengkapi dengan instruksi jelas dan analisa mendalam agar Anda memahami logika di balik sinyal tersebut. Sinyal dikirim langsung ke Telegram group PCV Academy.",
  },
  {
    src: "/images/zona-trading.png",
    title: "Zona Mapping",
    subtitle: "Rumuskan Zona Buy/Sell",
    text: "Kuasai strategi mapping zona untuk menemukan area buy/sell terbaik dan memahami konteks market dengan lebih presisi. Anda akan belajar cara menggambar zona secara tepat dan konsisten serta bagaimana cara memanfaatkannya untuk entry yang optimal.",
  },
  {
    src: "/images/komunitas.jpg",
    title: "Komunitas Eksklusif",
    subtitle: "Forum diskusi aktif & Support Langsung",
    text: "Komunitas aktif yang siap menjawab pertanyaan Anda setiap hari. Anda bisa bertanya, berdiskusi, dan saling memberikan semangat bersama member dan mentor lainnya. Semua lewat aplikasi & Telegram group resmi PCV Academy.",
  },
  {
    src: "/images/dukungan.png",
    title: "Dukungan 24/7",
    subtitle: "Customer service 24/7",
    text: "Kami menyediakan tim support yang siap membantu Anda kapan pun dibutuhkan. Semua kendala akan kami bantu selesaikan secepat mungkin, agar proses belajar dan trading Anda tetap lancar tanpa hambatan.",
  },
];


export default function DetailLayanan() {
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Gambar kiri */}
            <div className="w-full md:w-1/2">
              <Image
                src={step.src}
                alt={step.title}
                width={800}
                height={600}
                className="rounded-xl shadow-lg w-full h-auto"
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
