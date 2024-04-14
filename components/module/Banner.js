import Link from "next/link";

function Banner() {
  return (
    <div className="mt-[4rem] flex items-center justify-center ">
      <div className="flex  flex-col gap-4">
        <h2 className="font-bold border-b-4 pb-1  border-green-600 w-max">Lahij Food</h2>
        <p>Food Delivery and Takeout!</p>
        <span className="w-[30rem]">
          Lahij Food is an online food ordering and delivery platform launched
          by Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link
          className="w-max rounded-lg bg-green-600  px-3 font-medium text-green-50"
          href="/menu"
        >
          See All
        </Link>
      </div>
      <div className="">
        <img className="w-[28rem]" src="/images/banner.png" alt="Food image" />
      </div>
    </div>
  );
}

export default Banner;
