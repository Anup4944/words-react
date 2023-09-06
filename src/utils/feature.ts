import axios from "axios";
import { generate } from "random-words";
import _ from "lodash";

const generateMcq = (meaning: { Text: string }[], idx: number): string[] => {
  const correctAns: string = meaning[idx].Text;

  // An array with all words except for correct one
  const allIncorrect = meaning.filter((i) => i.Text !== correctAns);

  // Randomly generating 3 words from allIncorrect
  const incorrrectOption: string[] = _.sampleSize(allIncorrect, 3).map(
    (i) => i.Text
  );

  const mcqOptions = _.shuffle([...incorrrectOption, correctAns]);

  return mcqOptions;
};

export const fetchWords = async (params: LangType): Promise<WordType[]> => {
  try {
    const rapidKey = import.meta.env.VITE_MS_API;

    const words = generate(8).map((i) => ({
      Text: i,
    }));

    const response = await axios.post(
      "https://microsoft-translator-text.p.rapidapi.com/translate",
      words,
      {
        params: {
          "to[0]": params,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": rapidKey,
          "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        },
      }
    );

    const received: FetchedDataType[] = response.data;

    const arr: WordType[] = received.map((i, idx) => {
      const options: string[] = generateMcq(words, idx);
      return {
        word: i.translations[0].text,
        meaning: words[idx].Text,
        options,
      };
    });

    return arr;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong.");
  }
};

export const countMatchingElements = (
  arr1: string[],
  arr2: string[]
): number => {
  console.log("FROM MATCHING", arr1, arr2);
  if (arr1.length !== arr2.length) throw new Error("Invalid result");

  let matchingCount = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) matchingCount++;
  }

  return matchingCount;
};

export const fetchAudio = async (
  text: string,
  language: LangType
): Promise<string> => {
  const key = import.meta.env.VITE_TEXT_TO_SPEECH_API;
  const rapidKey = import.meta.env.VITE_RAPID_API;

  const encodedParams = new URLSearchParams({
    src: text,
    r: "0",
    c: "mp3",
    f: "8khz_8bit_mono",
    b64: "true",
  });

  if (language === "ja") encodedParams.set("hl", "ja-jp");
  else if (language === "es") encodedParams.set("hl", "es-es");
  else if (language === "fr") encodedParams.set("hl", "fr-fr");
  else if (language === "el") encodedParams.set("hl", "el-gr");
  else if (language === "zh") encodedParams.set("hl", "zh-cn");
  else if (language === "de") encodedParams.set("hl", "de-de");
  else encodedParams.set("hl", "hi-in");

  const { data }: { data: string } = await axios.post(
    "https://voicerss-text-to-speech.p.rapidapi.com/",
    encodedParams,
    {
      params: { key },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": rapidKey,
        "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
      },
    }
  );

  return data;
};
