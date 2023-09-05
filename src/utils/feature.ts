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
          "X-RapidAPI-Key":
            "c94735635bmshd081d3be10548ffp187d3djsn09b94f09f22b",
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

  console.log(matchingCount);
  return matchingCount;
};
