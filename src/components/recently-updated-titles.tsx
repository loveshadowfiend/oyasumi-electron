/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchRecentlyUpdatedTitles } from "@/api/manga";
import { useQuery } from "@tanstack/react-query";

export const RecentlyUpdatedTitles = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["recentlyUpdated"],
        queryFn: () => fetchRecentlyUpdatedTitles(),
    });

    if (isLoading) return;

    return (
        <div>
            <h3 className="font-semibold text-lg pb-3">
                Recently Updated Titles
            </h3>
            <div className="grid grid-cols-2 w-full gap-3 gap-y-[50px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {data.data.map((manga: any, index: number) => {
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
                        <a key={index} href={`manga/${mangaId}`}>
                            <div className="grid grid-cols-1 h-full w-full">
                                <div>
                                    <img
                                        className="object-cover rounded-md w-full h-full pb-1"
                                        src={coverUrl}
                                        alt={`${mangaTitle} cover`}
                                        width={200}
                                        height={255}
                                    />
                                    <p className="text-[14px] font-medium">
                                        {`${mangaTitle.substr(0, 40)}` +
                                            (mangaTitle.length > 40
                                                ? "..."
                                                : "")}
                                    </p>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
