"use client";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {siteConfig} from "@/config/site.config";
import {layoutConfig} from "@/config/layout.config";
import RegistrationModal from "@/components/UI/modals/registration.modal";
import {useState} from "react";
import LoginModal from "@/components/UI/modals/login.modal";

export const Logo = () => {
    return (
        <Image
            src="/Снимок_экрана_2026-06-23_193856-removebg-preview.png"
            alt={siteConfig.title}
            width={75}
            height={30}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
        />
    );
};

export default function Header() {
    const pathname = usePathname();

    const [isRegistrationOpen, setIsRestrationOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const getNavItems = () => {
        return siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href
            return (
                <NavbarItem key={item.href}>
                    <Link
                        color="foreground"
                        href={item.href}
                        className={`px-3 py-1
                            ${isActive ? "text-blue-500" : "text-foreground"}
                            hover:text-blue-300 hover:border
                            hover;border-blue-300 hover:rounded-md
                            transition-colors
                            transition-border
                            duration-200`}
                    >
                        {item.label}
                    </Link>
                </NavbarItem>
            );
        })
    }

    return (
        <Navbar style={{height: layoutConfig.headerHeight}}>
            <NavbarBrand>
                <Link href="/public" className="flex gap-1 items-center">
                    <Logo/>
                    <p className="font-bold text-inherit">{siteConfig.title}</p>
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {getNavItems()}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button
                        as={Link}
                        color="primary"
                        href="#"
                        variant="flat"
                        onPress={() => setIsLoginOpen(true)}
                        >
                        Login
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        color="primary"
                        href="#"
                        variant="flat"
                        onPress={() => setIsRestrationOpen(true)}
                        >
                        Sign Up
                    </Button>

                </NavbarItem>
            </NavbarContent>

            <RegistrationModal
                isOpen={isRegistrationOpen}
                onClose={() => setIsRestrationOpen(false)}
            />
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsRestrationOpen(false)}></LoginModal>
        </Navbar>
    );
}
