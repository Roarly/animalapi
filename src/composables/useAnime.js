import { ref } from "vue";
import axios from "axios";


const animes = ref([]);

const api = axios.create({
    baseURL: "https://animechan.vercel.app/api/random",
});


const getRandomAnime = async () => {
    const response = await api.get();
    if (response.status === 200) {
      animes.value = [response.data];
    }
  };
  export const useAnime = () => {
    getRandomAnime();
    const search = async (searchItem) => {
      const response = await api.get(`https://animechan.vercel.app/api/quotes/anime?title=${searchItem}`);
  
      if (response.status === 200) {
        animes.value = response.data;
      }
    };
    return { animes, search };
  };