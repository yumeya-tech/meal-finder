import "./styles/App.css";
import Header from "./components/Header.tsx";
import Form from "./components/Form.tsx";
import React, { useState } from "react";
import Home from "./pages/Home.tsx";
import Meal from "./pages/Meal.tsx";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const [mealName, setMealName] = useState("");
  const [mealData, setMealData] = useState({
    id: "",
    name: "",
    instructions: "",
    img: "",
    source: "",
    area: "",
    category: "",
  });

  const navigate = useNavigate();

  const getMealData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`,
    );
    const jsonData = await response.json();
    setMealData({
      id: jsonData.meals[0].idMeal,
      name: jsonData.meals[0].strMeal,
      instructions: jsonData.meals[0].strInstructions,
      img: jsonData.meals[0].strMealThumb,
      source: jsonData.meals[0].strYoutube,
      area: jsonData.meals[0].strArea,
      category: jsonData.meals[0].strCategory,
    });

    navigate(`/meal/${jsonData.meals[0].idMeal}`);
  };

  return (
    <div>
      <Header />
      <Form setMealName={setMealName} getMealData={getMealData} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/meal/:id" element={<Meal mealData={mealData} />} />
      </Routes>
    </div>
  );
};

export default App;
