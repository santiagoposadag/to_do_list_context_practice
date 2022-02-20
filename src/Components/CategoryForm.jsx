import React, { useContext } from "react";
import Category from "./Category";
import { Store } from "./StoreProvider";


const CategoryForm = () => {
  const {dispatch, state} = useContext(Store);
  const categories = state.listOfCategories;
  
  return (
    <div>
      <form id="category__form">
        <input type="text" placeholder="Enter your category" />
        <button for="category__form">Submit</button>
        {categories.map(category => 
          <Category name={category.name} listOfNotes={category.listOfNotes}/>)
        }
      </form>
    </div>
  );
}

export default CategoryForm;