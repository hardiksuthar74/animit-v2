import { useQuery } from "@tanstack/react-query";
import {
  fetchAnime,
  fetchAnimes,
  fetchFeaturesAnime,
  fetchFilterdAnime,
  fetchSearchAnimes,
  fetchTopAnimes,
} from "../api";
import { JikanAnimeType, JikanData } from "@/types/jikan";

export function useTrendingAnimes() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["trending-animes"],
    queryFn: fetchTopAnimes,
  });

  const trendingAnimes = data?.data as JikanData;

  return { isLoading, error, trendingAnimes };
}

export function useAnime(id: number) {
  const { isLoading, data, error } = useQuery({
    queryFn: () => fetchAnime(id),
    queryKey: [`animes-${id}`, id],
  });

  const anime = data?.data?.data as JikanAnimeType;
  return { isLoading, error, anime };
}

export function useFeaturesAnime(
  status: string,
  orderBy: string,
  delay: number
) {
  const { isLoading, data, error } = useQuery({
    queryFn: () => fetchFeaturesAnimeWithDelay(status, orderBy, delay),
    queryKey: [`features-animes-status=${status}-order-by=${orderBy}`],
  });

  const anime = data?.data?.data as JikanAnimeType[];
  return { isLoading, error, anime };
}

async function fetchFeaturesAnimeWithDelay(
  status: string,
  orderBy: string,
  delay: number
) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return fetchFeaturesAnime(status, orderBy);
}

export function useFilteredAnime(
  status: string,
  genres: string,
  rating: string,
  score: string,
  type: string
) {
  const { isLoading, data, error } = useQuery({
    queryFn: () => fetchFilterdAnime(status, genres, rating, score, type),
    queryKey: [
      `filtered-anime-${status}-${genres}-${rating}-${score}-${type}`,
      status,
      genres,
      rating,
      score,
      type,
    ],
  });

  const animes = data?.data?.data as JikanAnimeType[];
  return { isLoading, error, animes };
}
export function useAnimes() {
  const { isLoading, data, error } = useQuery({
    queryFn: fetchAnimes,
    queryKey: [`animes`],
  });

  const animes = data?.data?.data as JikanAnimeType[];
  return { isLoading, error, animes };
}
export function useSearchAnimes(anime: string) {
  const { isLoading, data, error } = useQuery({
    queryFn: () => fetchSearchAnimes(anime),
    queryKey: [`animes`, anime],
  });

  const animes = data?.data?.data as JikanAnimeType[];
  return { isLoading, error, animes };
}
