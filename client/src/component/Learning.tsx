import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Typography, Stack } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { fetchAudio, fetchWords } from "../utils/feature";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  getWordsFail,
  getWordsRequest,
  getWordsSuccess,
} from "../redux/slices";
import Loader from "./Loader";

const Learning = () => {
  const [count, setCount] = useState<number>(0);
  const [audioSrc, setAudioSrc] = useState<string>("");
  const audioRef = useRef(null);

  const params = useSearchParams()[0].get("language") as LangType;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading, error, words } = useSelector(
    (state: { root: StateType }) => state.root
  );

  const nextHandler = (): void => {
    setCount((prev) => prev + 1);
    setAudioSrc("");
  };

  useEffect(() => {
    dispatch(getWordsRequest());
    fetchWords(params)
      .then((arr) => {
        dispatch(getWordsSuccess(arr));
      })
      .catch((err) => {
        dispatch(getWordsFail(err));
      });

    if (error) {
      // alert(error);
      // console.log(error);
      dispatch(clearState());
    }
  }, [dispatch, error, params]);

  if (loading) return <Loader />;

  const audioHandler = async () => {
    const player: HTMLAudioElement = audioRef.current!;

    if (player) {
      player.play();
    } else {
      const data = await fetchAudio(words[count]?.word, params);

      setAudioSrc(data);
    }
  };

  return (
    <Container maxWidth={"sm"} sx={{ padding: "1rem" }}>
      {audioSrc && <audio src={audioSrc} autoPlay ref={audioRef}></audio>}
      <Button
        onClick={
          count === 0 ? () => navigate("/") : () => setCount((prev) => prev - 1)
        }
      >
        <ArrowBack />
      </Button>

      <Typography m={"2rem 0 "}>Learning made easy</Typography>

      <Stack direction={"row"} spacing={"1rem"}>
        <Typography variant={"h4"}>
          {count + 1} - {words[count]?.word}
        </Typography>
        <Typography color={"blue"} variant="h4">
          : {words[count]?.meaning}
        </Typography>
        <Button sx={{ borderRadius: "50%" }}>
          <VolumeUp onClick={audioHandler} />
        </Button>
      </Stack>

      <Button
        sx={{ margin: "3rem 0" }}
        variant="contained"
        fullWidth
        onClick={count === 7 ? () => navigate("/quiz") : () => nextHandler()}
      >
        {count === words.length - 1 ? "Go to Quiz" : "Next"}
      </Button>
    </Container>
  );
};

export default Learning;
