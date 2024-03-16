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

  const isAuth = true;
  const languageHandler = (language: string): void => {
    isAuth ? navigate(`/learn?language=${language}`) : navigate(`/login`);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" style={{ padding: "2.5rem" }} align="center">
        Welcome, begin your journey of learning.
      </Typography>
      <Typography variant="h3" p={"1.5rem"} textAlign={"center"}>
        Choose one language from below
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
    </Container>
  );
};

export default Home;
