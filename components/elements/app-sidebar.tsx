"use client"
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from "../ui/sidebar";
import { ModeToggle } from "./themetoggle";
import { GitCommitHorizontalIcon } from "lucide-react";
import { NavMain } from "./nav-main";
import { Avatar, AvatarFallback } from "../ui/avatar";

export default function AppSidebar() {    
      const data = {
        navMain: [
            {
              title: "Pipelines",
              url: "#",
              icon: GitCommitHorizontalIcon,
              isActive: true,
              items: [
                {
                  title: "History",
                  url: "#",
                },
                {
                  title: "Starred",
                  url: "#",
                },
                {
                  title: "Settings",
                  url: "#",
                },
              ],
        
      }
    ]}

    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex flex-row justify-center">
                    <h1 className="text-2xl font-bold">Menu</h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <div className="flex flex-row justify-between dark:bg-[#FFFFFF0F] bg-[#00000009] p-4 rounded-md">
                    <Avatar className="">
                        <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div >
                    <h1>Anesa Salihu</h1>
                    <p className="text-xs">anesasalihu@gmail.com</p>
                    </div>
                    <ModeToggle />
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}