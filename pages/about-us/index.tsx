import ProfilPerusahaanSection from "@/components/profilusaha";
import TentangKamiSection from "@/components/tentangKami";
import VisiMisiSection from "@/components/visimisi";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <ProfilPerusahaanSection />
      <TentangKamiSection />
      <VisiMisiSection />
      <div className="py-24 bg-gradient-to-t from-neutral-800 to-white"></div>
    </DefaultLayout>
  );
}
