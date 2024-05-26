import { MainLayout } from "@/layouts/main-layout";
import { RecentlyUpdatedTitles } from "@/components/recently-updated-titles";

export const HomePage = () => {
    return (
        <MainLayout>
            <RecentlyUpdatedTitles />
        </MainLayout>
    );
};
