"use client"
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, useSidebar } from "../ui/sidebar";
import { ModeToggle } from "./themetoggle";
import { useState } from "react";

export default function AppSidebar() {
    const [isPinned, setIsPinned] = useState(true);
    const {
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
      } = useSidebar()
    
    return (
        <Sidebar variant={isPinned ? "sidebar" : "floating"}>
            <SidebarHeader>
            <button onClick={() => {
                    setIsPinned(!isPinned);
                    toggleSidebar()
                }}>
                    <HamburgerMenuIcon className="h-6 w-6" />
                </button>
                <div className="flex flex-row justify-center">
                    <h1 className="text-2xl font-bold">Menu</h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </SidebarContent>
            <SidebarFooter>
                <div className="flex flex-row justify-between bg-background p-4 rounded-md">
                    <p>Dark Mode</p>
                    <ModeToggle />
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}