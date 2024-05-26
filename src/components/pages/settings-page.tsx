import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MainLayout } from "@/layouts/main-layout";

export const SettingsPage = () => {
    return (
        <MainLayout>
            <div className="flex flex-col gap-1">
                <p className="text-sm pl-[4px]">Translation:</p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="ru">Russian</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </MainLayout>
    );
};
