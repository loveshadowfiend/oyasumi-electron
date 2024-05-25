import { Home, Library, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarContentProps {
    isCollapsed: boolean;
}

export default function SidebarContent(props: SidebarContentProps) {
    const iconSize = 20;
    return (
        <div className="flex flex-col gap-1 m-3">
            <SidebarContentRow className="bg-border">
                <Home size={iconSize} /> Home
            </SidebarContentRow>
            <SidebarContentRow>
                <Library size={iconSize} /> Library
            </SidebarContentRow>
            <SidebarContentRow>
                <Search size={iconSize} /> Search
            </SidebarContentRow>
        </div>
    );
}

export const SidebarContentRow = ({
    children,
    className,
    href,
}: React.ComponentProps<"a">) => {
    return (
        <div
            className={cn(
                "flex px-3 py-2 rounded-md text-sm items-center font-semibold hover:bg-border",
                className
            )}
        >
            <a href={href} className="flex gap-2">
                {children}
            </a>
        </div>
    );
};
