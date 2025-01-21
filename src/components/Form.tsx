const Form = (props) => {
  return (
    <form onSubmit={props.getMealData}>
      <input
        onChange={(e) => props.setMealName(e.target.value)}
        type="text"
        name="mealName"
        placeholder="料理名を英語で入力"
      />
      <button>検索</button>
    </form>
  );
};
export default Form;
