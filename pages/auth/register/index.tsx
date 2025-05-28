import RegisterPage from "@/components/register";
import DefaultLayout from "@/layouts/default";

export default function Register() {
  return (
    <DefaultLayout>
      <RegisterPage />
      <div className="py-24 bg-gradient-to-t from-neutral-800 to-white" />
    </DefaultLayout>
  );
}
