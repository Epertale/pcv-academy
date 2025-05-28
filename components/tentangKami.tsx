import Image from "next/image";
import { motion } from "framer-motion";

export default function TentangKamiSection() {
  const team = [
    { name: "Ravendo Zacariva A.", role: "Project Manager (PM)", img: "/anggota/ravendo.png" },
    { name: "Fransiskus K.H.", role: "Web Developer", img: "/anggota/frans.png" },
    { name: "Brain Overino", role: "Business Consultant", img: "/anggota/brain.png" },
    { name: "Ricky Avriel I.", role: "UI/UX Designer", img: "/anggota/ricky.png" },
    { name: "Reyhan Bayu Desfrianto", role: "Content Strategist", img: "/anggota/reyhan.png" },
    { name: "Taruna Adi Wibowo", role: "Digital Marketing Specialist", img: "/anggota/taruna.png" },
  ];

  return (
    <section className="text-white py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-black mb-1">Tentang Kami</h2>
      <div className="border-b-2 border-white w-24 mx-auto mb-10"></div>

      <div className="shadow-lg bg-gradient-to-r from-neutral-900 to-neutral-800 py-10 rounded-lg flex flex-wrap justify-center gap-8">
        {team.map((person, idx) => (
          <motion.div
            key={idx}
            className="text-center w-36"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="relative w-24 h-24 mx-auto mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="overflow-hidden w-full h-full bg-transparant shadow-lg">
                <Image
                  src={person.img}
                  alt={person.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <p className="font-semibold text-sm leading-tight pt-1">{person.name}</p>
            <p className="text-xs text-gray-300">{person.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
