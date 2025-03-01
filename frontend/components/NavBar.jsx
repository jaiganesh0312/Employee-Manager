"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";

import Link from "next/link";
import NavBarAvatar from "./NavBarAvatar";
import { selectIsAuthenticated } from "@/lib/redux/slices/authSlice";
import { useSelector } from "react-redux";
import { Hedvig_Letters_Serif } from "next/font/google";
import { usePathname } from "next/navigation";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const NAVBAR_HEADER = [
  {
    name: "Employees",
    href: "/employees",
  },
  {
    name: "Add Employee",
    href: "/employees/create",
  },
];

export default function NavBar() {
  const pathname = usePathname()
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <Navbar classNames={{ base: "bg-white shadow mt-0" }}>
      <NavbarContent justify="start">
        <NavbarBrand as={Link} href="/" className="flex-grow-0" scroll={false}>
          <AcmeLogo />
          <p className="font-bold text-inherit">Employee Manager</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NAVBAR_HEADER.map(({ name, href }) => (
          <NavbarItem key={href} isActive={pathname === href}>
            <Link color="foreground" href={href}>
              {name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {!isAuthenticated ? (
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="/auth/login" variant="flat">
              Log In
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent as="div" justify="end">
          <NavBarAvatar />
        </NavbarContent>
      )}
    </Navbar>
  );
}
