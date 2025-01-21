const Recipe = (props) => {
  return (
    <>
      {props.mealData.id && (
        <div>
          <h2>{props.mealData.name}</h2>
          <p>
            エリア<span>{props.mealData.area}</span>
          </p>
          <p>
            カテゴリー<span>{props.mealData.category}</span>
          </p>
          <img src={props.mealData.img} alt="meal-image" />
          <p>{props.mealData.instructions}</p>
          <p>
            ソース
            <span>
              <a href={props.mealData.source}>{props.mealData.source}</a>
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Recipe;
