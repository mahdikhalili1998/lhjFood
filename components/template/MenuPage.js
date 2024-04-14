import React from "react";
import FoodCard from "../module/FoodCard";

function MenuPage({ data }) {
  return (
    <div className="mt-[4rem]">
      <h1 className="mb-[4rem] text-3xl font-black text-green-600">
        List of Lahijan Food
      </h1>
      <div className="grid grid-cols-3 gap-y-20 gap-x-10 ">
        {data?.map((food) => (
          // console.log(food)
          <FoodCard key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
