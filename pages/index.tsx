import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";
import BusinessProcessFlow from "@/components/prosesBisnis";
import TimelineSection from "@/components/timeline";
import ClientTestimonials from "@/components/testimonial";
import KeuntunganSection from "@/components/keuntungan";
import LayananSection from "@/components/layanan";
import FAQSection from "@/components/fac";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 py-8 md:py-16 min-h-[70vh]">
        {/* Text section */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-[30px] md:text-[60px] font-bold text-black">
            Selamat Datang di
          </h1>
          <span className="text-[30px] md:text-[60px] font-bold text-blue-600 block">
            PCV Academy
          </span>
          <p className="mt-4 text-black text-base text-xl">
            Platform edukasi trading terpercaya dan terstruktur untuk beginner
            hingga expert di Indonesia.
          </p>
        </motion.div>

        {/* Image section */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <img
            alt="Welcome PCV Academy"
            className="w-full max-w-md"
            src="https://static.vecteezy.com/system/resources/previews/056/780/787/non_2x/hands-typing-on-a-laptop-surrounded-by-multiple-screens-displaying-financial-charts-in-a-flat-illustration-vector.jpg"
          />
        </motion.div>
      </section>
      <TimelineSection />
      <BusinessProcessFlow />
      <KeuntunganSection />
      <LayananSection />
      <ClientTestimonials />
      <FAQSection />
      <div className="py-24 bg-gradient-to-t from-neutral-800 to-white" />
    </DefaultLayout>
  );
}
