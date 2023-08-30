import { create } from "zustand";

interface GifState {
  Types: string[];
  GifsData: string[];
  CopyGifs: string[];
  AddGif: (by: string) => void;
}

export const useStoreGifs = create<GifState>((set) => ({
  Types: ["gif"],
  CopyGifs: ["Bienvenido"],
  GifsData: [""],
  AddGif: (by) => {
    set((state) => ({
      CopyGifs: [...state.CopyGifs, by],
    }));
  },
}));
