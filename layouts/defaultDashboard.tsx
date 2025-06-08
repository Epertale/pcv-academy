import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-black">
      <Head />
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}

// relative flex flex-col min-h-screen

// mx-auto max-w-7xl px-6 flex-grow pt-16
