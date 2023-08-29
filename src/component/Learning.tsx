import React, { useState } from "react";
import { Container, Button, Typography, Stack } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowBack, VolumeUp } from "@mui/icons-material";

const Learning = () => {
  const [count, setCount] = useState<number>(0);

  const params = useSearchParams()[0].get("language") as LangType;

  const navigate = useNavigate();

  const nextHandler = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <Container maxWidth={"sm"} sx={{ padding: "1rem" }}>
      {params}
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
          {count + 1} - {"Sample"}
        </Typography>
        <Typography color={"blue"} variant="h4">
          : LOL
        </Typography>
        <Button sx={{ borderRadius: "50%" }}>
          <VolumeUp />
        </Button>
      </Stack>

      <Button
        sx={{ margin: "3rem 0" }}
        variant="contained"
        fullWidth
        onClick={count === 7 ? () => navigate("/quiz") : () => nextHandler()}
      >
        {count === 7 ? "Go to Quiz" : "Next"}
      </Button>
    </Container>
  );
};

export default Learning;
