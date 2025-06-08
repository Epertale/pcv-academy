import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { Logo } from "@/components/icons";
import { useRouter } from 'next/router';

export const NavbarDashboard = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
    });
    router.push('/auth/login');
  };

  return (
    <HeroUINavbar
      shouldHideOnScroll
      className="bg-gradient-to-r from-black to-#737373 text-white"
      maxWidth="xl"
    >
      <NavbarBrand className="gap-2">
        <Logo />
        <p className="font-bold text-inherit">PCV</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Beranda
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/berlangganan">
            Berlangganan
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about-us">
            Tentang Kami
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            onPress={handleLogout}
            className="bg-white text-black shadow-lg"
            radius="md"
            variant="flat"
          >
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
