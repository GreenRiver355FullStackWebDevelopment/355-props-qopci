import { restaurants } from "../data/data.js";
import Restaurant from "./Restaurant";

// Functional component that renders a list of Restaurant components
function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {/* Iterating through the Restaraunt data and rendering it */}
      {restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)}
    </div>
  );
}

export default RestaurantsContainer;
