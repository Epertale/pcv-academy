import DefaultLayout from "@/layouts/default";
import Dashboard from "@/components/dashboardpage";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Dashboard />
      <div className="py-24 bg-gradient-to-t from-neutral-800 to-white" />
    </DefaultLayout>
  );
}
