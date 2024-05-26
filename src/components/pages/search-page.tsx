import { MainLayout } from "@/layouts/main-layout";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMangaByTitle } from "@/api/manga";
import { Link } from "wouter";

export const SearchPage = () => {
    const [input, setInput] = useState<string>("");
    const [fetchInput, setFetchInput] = useState<string>("");

    const { data, isLoading } = useQuery({
        enabled: !!fetchInput,
        queryKey: ["searchInput", fetchInput],
        queryFn: () => fetchMangaByTitle(fetchInput),
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        setTimeout(() => {
            setFetchInput(input);
        }, 500);
    }, [input]);

    return (
        <MainLayout>
            <Input
                placeholder="type manga title here"
                onChange={(e) => setInput(e.target.value)}
            />

            {data !== undefined &&
                data.data.map((manga: any, index: number) => {
                    const mangaId = manga.id;
                    const mangaTitle =
                        manga.attributes.title.en ??
                        manga.attributes.title["ja-ro"] ??
                        manga.attributes.title.ja;
                    const coverFileName = manga.relationships.filter(
                        (rel: { type: string }) => {
                            return rel.type == "cover_art";
                        }
                    )[0].attributes?.fileName;
                    const coverUrl = `https://uploads.mangadex.org/covers/${mangaId}/${coverFileName}.512.jpg`;

                    return (
                        <Link
                            key={index}
                            href={`/manga/${mangaId}`}
                            className="flex p-3 gap-5"
                        >
                            {/* <Card>
                                    <CardContent className="flex p-3 gap-5"> */}
                            <img
                                className="object-cover rounded-md w-[200px] h-[300px]"
                                src={coverUrl}
                                alt={`${mangaTitle} cover`}
                                width={256}
                                height={360}
                            />
                            <div className="flex flex-1 flex-col gap-3">
                                <h3 className="text-2xl font-semibold">
                                    {mangaTitle}
                                </h3>
                                <p className="text-justify">
                                    {manga.attributes.description.en}
                                </p>
                            </div>
                        </Link>
                    );
                })}
        </MainLayout>
    );
};
