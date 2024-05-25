import React from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import SidebarContent from "@/components/sidebar-content";

export const MainLayout = ({ children }: React.ComponentProps<"div">) => {
    return (
        <div className="mt-[30px] overflow-auto border-t-[0.5px] dark">
            <aside className="">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="min-h-screen"
                >
                    <ResizablePanel minSize={20} maxSize={20}>
                        <SidebarContent />
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel className="px-[100px] py-[20px]">
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </aside>
        </div>
    );
};
