import axios, { AxiosInstance } from "axios";
import { Giphy as GifRandom } from "../models/random";
import { GiphyExample } from "../models/GifExample";
import { GifSearch } from "../models/gifSearch";

const baseUrl = "https://api.giphy.com";
const apiKey = "eEZL9zHYXFy7QJYA3FTKqwHy3ENSlQcq";

type Value =
  | "enes"
  | "pt"
  | "id"
  | "fr"
  | "ar"
  | "tr"
  | "th"
  | "vi"
  | "de"
  | "it"
  | "ja"
  | "zh-CN"
  | "zh-TW"
  | "ru"
  | "ko"
  | "pl"
  | "nl"
  | "ro"
  | "hu"
  | "sv"
  | "cs"
  | "hi"
  | "bn"
  | "da"
  | "fa"
  | "tl"
  | "fi"
  | "iw"
  | "ms"
  | "no"
  | "uk"
  | "es";

export interface PropsgetGifSearch {
  text: string;
  limit?: number;
  offset?: string;
  lang?: Value;
}

const giphy: AxiosInstance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
  },
});

export const getGifRandom = () =>
  giphy.get<GifRandom>(`https://api.giphy.com/v1/stickers/random`);

export const getGifExample = () =>
  giphy.get<GiphyExample>(
    `/v1/stickers/search?q=bienvenido&limit=1&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
  );

export const getGifID = (id: string) =>
  giphy.get(
    `https://api.giphy.com/v1/gifs/${id}?api_key=eEZL9zHYXFy7QJYA3FTKqwHy3ENSlQcq&rating=g`
  );

export const getGifSearch = async ({
  text,
  offset,
  limit = 1,
  lang = "es",
}: PropsgetGifSearch): Promise<GifSearch[]> => {
  const { data } = await giphy.get<GifSearch[]>(
    `/v1/stickers/search?q=${text}&limit=${limit}&offset=${offset}&rating=g&lang=${lang}&bundle=messaging_non_clips`
  );
  return data;
};
