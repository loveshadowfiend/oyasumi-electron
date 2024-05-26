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
                <p className="text-sm pl-[4px]">translation:</p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">english</SelectItem>
                        <SelectItem value="ru">russian</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </MainLayout>
    );
};
