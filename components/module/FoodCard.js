import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import Link from "next/link";

function FoodCard(props) {
  const { id, name, price, discount, introduction, details } = props;

  return (
    <div className="relative justify-self-center overflow-hidden rounded-xl p-5 shadow-lg shadow-green-800">
      <img
        className={`mb-4 w-[20rem] rounded-xl `}
        src={`/images/${id}.jpeg`}
        alt="foof pic"
      />

      <div className="mb-4 flex items-center justify-between">
        <span className="font-bold">{name}</span>
        <span className="flex items-center justify-between gap-1">
          <Location />
          {details[0].Cuisine}
        </span>
      </div>
      <div className="mb-4 flex items-center gap-1">
        <Dollar />
        {discount ? (
          <span className="font-bold text-red-500">
            {(price * (100 - discount)) / 100} $ | {discount}% Off
          </span>
        ) : (
          <span>{price} $</span>
        )}
        {discount ? (
          <div className="absolute -left-[3.75rem] top-[1rem] -rotate-45   rounded-lg bg-red-500 px-[5rem] py-1 font-bold text-white">
            {discount} %
          </div>
        ) : null}
      </div>
      <Link href={`/menu/${id}`}>
        <div className="rounded-xl bg-green-600 py-1  text-center font-bold text-white ">
          {" "}
          See Details
        </div>
      </Link>
    </div>
  );
}

export default FoodCard;
