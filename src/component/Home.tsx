import React from "react";
import { Container, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const languages = [
  { name: "Japanese", code: "ja" },
  { name: "Hindi", code: "hi" },
  { name: "Spanish", code: "sh" },
  { name: "French", code: "fr" },
];

const Home = () => {
  const navigate = useNavigate();
  const languageHandler = (language: string): void => {
    navigate(`/learn?language=${language}`);
  };

  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h3" p={"2rem"} textAlign={"center"}>
        Welcome, begin your journey of learning.
      </Typography>
      <Stack
        direction={"row"}
        spacing={"2rem"}
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
