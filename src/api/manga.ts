import { getOneMonthAgo } from "@/utils/get-one-month-ago";

export const fetchMangaByTitle = async (title: string) => {
    const response = await fetch(
        `https://api.mangadex.org/manga?title=${title}&includes[]=cover_art&order[relevance]=desc`
    );

    const data = await response.json();

    return data;
};

export const fetchPopularNewTitles = async () => {
    const response = await fetch(
        `https://api.mangadex.org/manga?order[followedCount]=desc&limit=10&includes[]=cover_art&createdAtSince=${getOneMonthAgo()}`
    );

    const data = await response.json();

    return data;
};

export const fetchRecentlyUpdatedTitles = async () => {
    const response = await fetch(
        `https://api.mangadex.org/manga?order[createdAt]=desc&limit=10&includes[]=cover_art`
    );

    const data = await response.json();

    return data;
};
