import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import axios from "axios";

interface StoreState {
  curriculums: ICurriculum[];
  isLoading: boolean;

  fetchCurriculums: () => void;
}

export const useCurriculumsStore = create<StoreState>()(
  immer((set, get) => ({
    isLoading: true,
    curriculums: [],

    fetchCurriculums: async () => {
      try {
        const { data } = await axios.get("https://api.moscow.mba/products");

        console.log(data);

        set((state) => {
          state.curriculums = data.slice(0, 6);
          state.isLoading = false;
        });
      } catch (error) {}
    },
  }))
);
