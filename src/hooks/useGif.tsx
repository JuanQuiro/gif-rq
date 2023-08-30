import { useQuery, useMutation } from "@tanstack/react-query";
import { getGifExample, getGifSearch } from "../services/giphy.services";

export function useFetchData() {
  return useQuery({
    queryKey: ["GifExample"],
    queryFn: getGifExample,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}

export function useGetGif() {
  return useMutation({
    mutationKey: ["Gifs"],
    mutationFn: getGifSearch,
    cacheTime: Infinity,
  });
}
