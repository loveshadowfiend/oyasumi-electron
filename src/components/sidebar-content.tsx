import { Home, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

export default function SidebarContent() {
    const iconSize = 20;
    return (
        <div className="flex flex-col gap-1 m-3">
            <SidebarContentRow href="/">
                <Home size={iconSize} /> home
            </SidebarContentRow>
            <SidebarContentRow href="/search">
                <Search size={iconSize} /> search
            </SidebarContentRow>
        </div>
    );
}

export const SidebarContentRow = ({
    children,
    className,
    href,
}: React.ComponentProps<"a">) => {
    if (href === undefined) return;

    return (
        <Link
            href={href}
            className={cn(
                "flex px-3 py-2 rounded-md text-sm items-center hover:bg-border",
                className
            )}
        >
            <div className="flex gap-2">{children}</div>
        </Link>
    );
};
