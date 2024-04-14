import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";

function Attributes() {
  return (
    <div className="mb-[4rem]  mt-[4rem] text-center ">
      <h3 className="mb-[4rem] text-2xl font-bold  text-green-600">Why us?</h3>
      <div className="flex items-start justify-around ">
        <div className="rounded-lg p-6 shadow-lg shadow-green-200">
          <Fast />
          <p>Fast</p>
        </div>
        <div className="rounded-lg p-6 shadow-lg shadow-green-200">
          <Food />
          <p>Best Restaurants</p>
        </div>
        <div className="rounded-lg p-6 shadow-lg shadow-green-200">
          <Choice />
          <p>Your Choice</p>
        </div>
        <div className="rounded-lg p-6 shadow-lg shadow-green-200">
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
