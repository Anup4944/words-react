import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Learning = () => {
  const [count, setCount] = useState<number>(0);

  const params = useSearchParams()[0].get("language") as LangType;

  const navigate = useNavigate();

  const nextHandler = (): void => {
    setCount((prev) => prev + 1);
  };

  return <div>Learning</div>;
};

export default Learning;
