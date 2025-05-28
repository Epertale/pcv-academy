import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Apa beda PCV Academy dengan sinyal trading gratis di Telegram?",
    answer:
      "PCV Academy menyediakan sinyal berdasarkan analisa mendalam dari mentor profesional dan disertai edukasi berkelanjutan, berbeda dengan sinyal gratis yang umumnya tanpa konteks atau pembelajaran.",
  },
  {
    question: "Bagaimana cara verifikasi akurasi sinyal PCV Academy?",
    answer:
      "Kami menyediakan track record, evaluasi performa mingguan, serta ulasan dari komunitas aktif untuk transparansi penuh.",
  },
  {
    question: "Apakah cocok untuk yang belum pernah trading sama sekali?",
    answer:
      "Sangat cocok! Kami menyediakan kurikulum pemula lengkap dari nol hingga mahir, termasuk mentoring.",
  },
  {
    question: "Bisa pakai sinyal PCV Academy untuk trading crypto?",
    answer:
      "Ya, sinyal kami mencakup forex, saham, komoditas, dan juga crypto.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
      {/* Right: FAQ Heading and Button */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center items-center"
      >
        <h2 className="text-[30px] md:text-[60px] font-bold mb-2">FAQ</h2>
        <p className="text-[20px] md:text-[30px] text-gray-600 mb-6">Frequently Asked Questions</p>
      </motion.div>
      {/* Left: FAQ */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-4 rounded-xl shadow-lg cursor-pointer"
            onClick={() => toggle(index)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center text-left">
              <h4 className="font-medium text-sm md:text-base">
                {faq.question}
              </h4>
              <span className="text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <motion.p
                className="mt-2 text-sm text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
