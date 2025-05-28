import DefaultLayout from "@/layouts/default";
import DetailLayanan from "@/components/detail/keuntungan";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <DetailLayanan />
      <div className="py-24 bg-gradient-to-t from-neutral-800 to-white" />
    </DefaultLayout>
  );
}
