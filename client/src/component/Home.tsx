import React from "react";
import { Container, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const languages = [
  { name: "Japanese", code: "ja" },
  { name: "Hindi", code: "hi" },
  { name: "Spanish", code: "es" },
  { name: "French", code: "fr" },
  { name: "Greek", code: "el" },
  { name: "Chinese", code: "zh" },
  { name: "German", code: "de" },
];

const Home = () => {
  const navigate = useNavigate();

  const isAuth = false;
  const languageHandler = (language: string): void => {
    isAuth ? navigate(`/learn?language=${language}`) : navigate(`/login`);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" style={{ padding: "2rem" }} align="center">
        Welcome, begin your journey of learning.
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={"1rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {languages.map((l) => (
          <Button onClick={() => languageHandler(l.code)} key={l.code}>
            {l.name}
          </Button>
        ))}
      </Stack>
      <Typography variant="h3" p={"2rem"} textAlign={"center"}>
        Choose one language from above
      </Typography>
    </Container>
  );
};

export default Home;
