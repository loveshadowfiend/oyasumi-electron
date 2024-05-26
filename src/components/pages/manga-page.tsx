import { MainLayout } from "@/layouts/main-layout";
import { useParams } from "wouter";

export const MangaPage = () => {
    const params = useParams();

    return <MainLayout>{params.id}</MainLayout>;
};
