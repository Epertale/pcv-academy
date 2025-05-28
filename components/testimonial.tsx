import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Testimonial {
  name: string;
  title: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Andi K.",
    title: "Trader Forex (2 Tahun Pengalaman)",
    rating: 5,
    text: "Sebagai seorang trader baru, saya sangat terbantu dengan edukasi yang diberikan. Materinya sangat mudah dipahami dan langsung bisa saya aplikasikan dalam trading sehari-hari.",
    image: "/testimoni/andi.jpg",
  },
  {
    name: "Rina S.",
    title: "Mahasiswa & Part-Time Trader",
    rating: 5,
    text: "Tutorial dan video dari PVC Academy membantu saya paham dasar trading dengan cara yang fun dan ringan. Sangat cocok untuk pemula seperti saya!",
    image: "/testimoni/rina.jpg",
  },
  {
    name: "David I.",
    title: "Full-Time Trader",
    rating: 5,
    text: "Team sangat aktif dalam komunitas! Setiap hari saya dapat insight baru yang berguna banget untuk strategi trading saya.",
    image: "/testimoni/david.jpg",
  },
  {
    name: "Lina M.",
    title: "Ibu Rumah Tangga & Trader Pemula",
    rating: 5,
    text: "Saya baru belajar trading dan merasa nyaman karena penjelasan mentor sangat sabar dan jelas.",
    image: "/testimoni/lina.jpg",
  },
  {
    name: "Reza T.",
    title: "Karyawan Swasta",
    rating: 4,
    text: "Materi yang disampaikan sangat sistematis. Cocok untuk yang sibuk bekerja seperti saya.",
    image: "/testimoni/reza.jpg",
  },
  {
    name: "Melati D.",
    title: "Content Creator & Trader",
    rating: 5,
    text: "Gabung ke komunitas ini bikin semangat trading lagi! Banyak teman sharing dan mentor yang aktif.",
    image: "/testimoni/melati.jpg",
  },
  {
    name: "Budi W.",
    title: "Trader Saham & Forex",
    rating: 4,
    text: "Insight yang dibagikan sangat membantu saya memahami analisa teknikal dengan lebih dalam.",
    image: "/testimoni/budi.jpg",
  },
  {
    name: "Nina A.",
    title: "Mahasiswi Ekonomi",
    rating: 5,
    text: "Suka banget karena setiap kelas terasa ringan tapi penuh ilmu. Materi mudah dicerna.",
    image: "/testimoni/nina.jpg",
  },
  {
    name: "Arif Z.",
    title: "Entrepreneur",
    rating: 5,
    text: "Trading jadi hobi baru yang menyenangkan sejak ikut pelatihan dari PVC Academy.",
    image: "/testimoni/arif.jpg",
  },
  {
    name: "Citra H.",
    title: "Guru & Trader",
    rating: 5,
    text: "Mentor sangat responsif dan ramah. Grup komunitas juga aktif dan suportif.",
    image: "/testimoni/citra.jpg",
  },
  {
    name: "Dimas R.",
    title: "Pelajar SMA",
    rating: 5,
    text: "Saya baru mulai belajar forex dan kelas-kelas dari PVC Academy sangat membantu!",
    image: "/testimoni/dimas.jpg",
  },
  {
    name: "Yuni S.",
    title: "Desainer Grafis",
    rating: 4,
    text: "Platform pembelajaran yang sangat user-friendly. Jadwal kelasnya fleksibel juga.",
    image: "/testimoni/yuni.jpg",
  },
  {
    name: "Galih E.",
    title: "Freelancer",
    rating: 5,
    text: "Suka dengan pendekatan yang real dan jujur dari para pengajarnya. Tidak hanya teori, tapi juga praktik.",
    image: "/testimoni/galih.jpg",
  },
  {
    name: "Tari F.",
    title: "Ibu Muda",
    rating: 5,
    text: "Saya tidak menyangka bisa belajar trading sambil mengurus anak. Terima kasih untuk ilmunya!",
    image: "/testimoni/tari.jpg",
  },
  {
    name: "Rico N.",
    title: "Analis Keuangan",
    rating: 4,
    text: "Kelasnya sangat profesional dan cocok untuk memperdalam strategi trading saya.",
    image: "/testimoni/rico.jpg",
  },
  {
    name: "Nadia V.",
    title: "Fresh Graduate",
    rating: 5,
    text: "Program mentoring-nya sangat membantu saya menghindari kesalahan umum pemula.",
    image: "/testimoni/nadia.jpg",
  },
  {
    name: "Ilham B.",
    title: "Barista & Trader Sampingan",
    rating: 5,
    text: "Bergabung di komunitas ini bikin saya percaya diri mulai live trading.",
    image: "/testimoni/ilham.jpg",
  },
];

const CARD_WIDTH = 288 + 32; // w-72 + mx-4 (margin kiri dan kanan)
const totalLength = CARD_WIDTH * testimonials.length * 2; // karena kamu duplikasi [...testimonials, ...testimonials]

export default function ClientTestimonials() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scrollDuration = 40;

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMounted || !isVisible) return;

    let isActive = true;

    // Pindahkan set ke luar loopAnimation
    controls.set({ x: 0 });

    const loopAnimation = async () => {
      while (isActive) {
        await controls.start({
          x: -totalLength / 2,
          transition: { duration: scrollDuration, ease: "linear" },
        });
        await controls.set({ x: 0 }); // Reset ke awal (boleh di sini karena sudah mounted)
      }
    };

    loopAnimation();

    return () => {
      isActive = false;
      controls.stop();
    };
  }, [isMounted, isVisible, controls, totalLength]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full h-[400px] bg-gray-100 flex items-center relative"
    >
      {isMounted && (
        <motion.div
          animate={controls}
          className="flex flex-row"
          initial={{ x: 0 }}
          style={{ width: `${totalLength}px` }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 w-72 p-6 rounded-xl shadow-lg bg-gradient-to-r from-neutral-900 to-neutral-800 text-white mx-4 flex-shrink-0"
            >
              <div className="flex items-center gap-3">
                <img
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  src={t.image}
                />
                <div>
                  <h4 className="font-semibold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-white">{t.title}</p>
                </div>
              </div>
              <p className="text-sm text-white">&ldquo;{t.text}&rdquo;</p>
              <div className="flex text-yellow-400">
                {Array(t.rating)
                  .fill(null)
                  .map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.538 1.118l-3.39-2.463a1 1 0 00-1.176 0l-3.39 2.463c-.783.57-1.838-.197-1.538-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.025 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />
    </div>
  );
}
