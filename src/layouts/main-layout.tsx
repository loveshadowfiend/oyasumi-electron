import React from "react";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import SidebarContent from "@/components/sidebar-content";
import { Header } from "@/components/header";

export const MainLayout = ({ children }: React.ComponentProps<"div">) => {
    return (
        <div>
            <Header />
            <div className="pt-[40px] dark">
                {/* TODO: figure out how to make this responsive :/ */}
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel className="fixed h-screen w-[150px] border-r">
                        <SidebarContent />
                    </ResizablePanel>
                    {/* <ResizableHandle /> */}
                    <ResizablePanel className="pl-[150px]">
                        <main className="px-[20px] py-[10px] pb-[40px]">
                            {children}
                        </main>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
};
