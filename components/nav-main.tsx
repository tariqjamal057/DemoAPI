"use client";

import { type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    name: string;
    href: string;
    icon?: LucideIcon;
  }[];
}) {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  const handleLinkClick = () => {
    setOpenMobile(false);
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <SidebarMenuItem key={item.name}>
              <Link href={item.href} onClick={handleLinkClick}>
                <SidebarMenuButton
                  tooltip={item.name}
                  className={`text-white font-medium ${
                    isActive
                      ? "bg-blue-200 text-blue-600"
                      : "hover:bg-blue-300 text"
                  }`}
                >
                  {item.icon && <item.icon />}
                  <span className="">{item.name}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
