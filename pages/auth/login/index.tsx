import LoginPage from "@/components/login";
import DefaultLayout from "@/layouts/default";

export default function Login() {
  return (
    <DefaultLayout>
      <LoginPage />
      <div className="py-24 bg-gradient-to-t from-neutral-800 to-white" />
    </DefaultLayout>
  );
}
