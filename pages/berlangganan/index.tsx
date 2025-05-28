import DefaultLayout from "@/layouts/default";
import SubscriptionPlans from "@/components/berlangganan";


export default function IndexPage() {
  return (
    <DefaultLayout>
    <SubscriptionPlans />
    <div className="py-24 bg-gradient-to-t from-neutral-800 to-white"></div>
    </DefaultLayout>
  );
}
