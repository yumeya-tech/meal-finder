import Recipe from "../components/Recipe.tsx";

const Meal = (props) => {
  return (
    <>
      <Recipe mealData={props.mealData} />
    </>
  );
};

export default Meal;
