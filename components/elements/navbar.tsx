"use client"
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "../ui/menubar";
import { X, Minus } from "lucide-react";
import { useSidebar } from "../ui/sidebar";

function closeWindow() {
    if(typeof window !== 'undefined' && typeof window.__TAURI__ !== 'undefined') {
        window.__TAURI__.core.invoke('close');    
    }
}

function minimizeWindow() {
    if(typeof window !== 'undefined' && typeof window.__TAURI__ !== 'undefined') {
        window.__TAURI__.core.invoke('minimize');    
    }
}

export default function Navbar() {
    const {toggleSidebar} = useSidebar();

    return (
        <Menubar className="m-2 w-[98%] fixed navbar" tauri-data-drag-region>
            <div className="flex justify-between items-center w-full">
            <div className="flex flex-row gap-2">
                <button onClick={toggleSidebar}><HamburgerMenuIcon width={18} height={18} /></button>
              <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Pipeline <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
            </div>

            <div className="gap-2 flex items-center">
                <button className="hover:bg-white/30 transition-colors duration-200 rounded-md" onClick={() => minimizeWindow}><Minus width={24} height={24}/></button>
                <button className="hover:bg-red-500 transition-colors duration-200 rounded-md"  onClick={() => closeWindow}><X width={24} height={24}/></button>
            </div>

            </div>
              </Menubar>
    );
}