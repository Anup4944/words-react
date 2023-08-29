import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Loader from "./component/Loader";

const Home = lazy(() => import("./component/Home"));
const Learning = lazy(() => import("./component/Learning"));
const Quiz = lazy(() => import("./component/Quiz"));
const Result = lazy(() => import("./component/Result"));
const Login = lazy(() => import("./component/Login"));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/learn" element={<Learning />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
