import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormControl,
  Typography,
  FormLabel,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { saveResult } from "../redux/slices";

const Quiz = () => {
  const [result, setResult] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { words } = useSelector((state: { root: StateType }) => state.root);

  const nextHandler = (): void => {
    setResult((prev) => [...prev, answer]);
    setCount((prev) => prev + 1);
    setAnswer("");
  };

  useEffect(() => {
    if (count + 1 > words.length) navigate("/result");
    dispatch(saveResult(result));
  }, [result]);

  return (
    <Container maxWidth="sm" sx={{ padding: "1rem" }}>
      <Typography m={"2rem 0 "}>Quiz</Typography>
      <Typography variant={"h3"}>
        {count + 1} - {words[count]?.word}
      </Typography>

      <FormControl>
        <FormLabel sx={{ mt: "2rem", mb: "1rem" }}>Meaning</FormLabel>
        <RadioGroup value={answer} onChange={(e) => setAnswer(e.target.value)}>
          {words[count]?.options.map((i) => (
            <FormControlLabel value={i} control={<Radio />} label={i} key={i} />
          ))}
        </RadioGroup>
      </FormControl>

      <Button
        sx={{ margin: "3rem 0 " }}
        variant="contained"
        fullWidth
        onClick={nextHandler}
        disabled={answer === ""}
      >
        {count === words.length - 1 ? "View Result" : "Submit"}
      </Button>
    </Container>
  );
};

export default Quiz;
