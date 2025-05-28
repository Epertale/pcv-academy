export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Prosperity Catalyst Vision",
  description:
    "Platform edukasi dan layanan trading berbasis AI yang dirancang untuk membantu trader pemula hingga profesional meraih profit konsisten dan kebebasan finansial.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Layanan",
      href: "/layanan",
    },
    {
      label: "Keuntungan",
      href: "/keuntungan",
    },
    {
      label: "Berlangganan",
      href: "/berlangaganan",
    },
    {
      label: "Login",
      href: "/auth/login",
    },
  ],
};
