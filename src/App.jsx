import { Link } from "react-router-dom";
import Pages from "./pages/Pages";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <div>
      <div className="flex justify-start items-center p-5">
        <GiKnifeFork className="text-2xl" />
        <Link to={"/"} className="text-xl font-medium">Recipe app</Link>
      </div>
      {!import.meta.env.VITE_API_KEY ? (
        <p>
          Please get the API key from{" "}
          <strong>
            <a href="https://spoonacular.com/food-api/">Spoonacular Food Api</a>
          </strong>
          <br />
          <br />
          and add it in your env file with{" "}
          <strong>"REACT_APP_FOOD_API_KEY"</strong> name and restart the app
        </p>
      ) : (
        <>
          <Pages />
        </>
      )}
    </div>
  );
};


export default App;
