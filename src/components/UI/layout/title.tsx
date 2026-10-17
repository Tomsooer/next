"use client"

import {useAuthStore} from "@/schema/store/auth.store";
import {usePathname} from "next/navigation";
import {siteConfig} from "@/config/site.config";

const Title = () => {
    const pathname = usePathname()

    const currentNavItem = siteConfig.navItems.find(
        (item) => item.href === pathname
    );

    const pageTitle = currentNavItem ? currentNavItem.label : siteConfig.title

    return (
        <div className="w-full flex justify-center my-6">
            <h1 className="text-3xl font-bolt">{pageTitle}</h1>
        </div>
    );
}

export default Title;
