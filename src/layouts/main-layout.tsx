import React, { useState } from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import SidebarContent from "@/components/sidebar-content";
import { cn } from "@/lib/utils";

export const MainLayout = ({ children }: React.ComponentProps<"div">) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="mt-[30px] overflow-auto border-t-[0.5px] dark">
            <aside className="">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="min-h-screen"
                >
                    <ResizablePanel minSize={20} maxSize={20}>
                        <SidebarContent isCollapsed={isCollapsed} />
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel className="px-[100px]">
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </aside>
        </div>
    );
};
