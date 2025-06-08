import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar
      shouldHideOnScroll
      className="bg-gradient-to-r from-black to-#737373 text-white"
      maxWidth="xl"
    >
      <NavbarBrand className="gap-2" as={Link} href="/">
        <Logo />
        <p className="font-bold text-inherit text-white">PCV</p>
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
            as={Link}
            className="bg-white text-black shadow-lg"
            href="/auth/login"
            radius="md"
            variant="flat"
          >
            Member Area
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
