import React from "react";
import "./App.css";
import Dishes from "./components/Dishes.jsx";
import styled from "styled-components";
 
const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
 gap: 20px;
  align-items: center;
  `
function App() {
  return (
    <Box style={{ backgroundColor: "rgb(225, 208, 166)" }}>
      <Dishes
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1M-K5CHNidZV9DF7t9zwaIAjyIVIN4UeFg&s"
        dishes="Smoked salmon burger"
        time="20"
        serving="6"
        cal="210"
        difficulty={0}
      ></Dishes>
      <Dishes
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbior8damh5OrkSj9qsqE0da5IucAx7n0Sqw&s"
        dishes="Tomatoes with creamy feta"
        time="15"
        serving="3"
        cal="600"
        difficulty={0}
      ></Dishes>
      <Dishes
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzHSj3twgxrg4JkFuZX4pJxYHvDioe6c_fg&s"
        dishes="Spicy potato salad"
        time="30"
        serving="2"
        cal="320"
        difficulty={1}
      ></Dishes>
      <Dishes
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkFl4-e90gihmLEM7TZZ-LTbwkWQ47VaLMQ&s"
        dishes="Chicken biryani"
        time="40"
        serving="4"
        cal="700"
        difficulty={2}
      ></Dishes>
    </Box>
  );
}

export default App;
