/// <reference types="vite/client" />

type LangType = "ja" | "hi" | "es" | "fr" | "el" | "zh" | "de";

type WordType = {
  word: string;
  meaning: string;
  options: string[];
};

type StateType = {
  loading: boolean;
  result: string[];
  error?: string;
  words: WordType[];
};

type FetchedDataType = {
  translations: {
    text: string;
  }[];
};
