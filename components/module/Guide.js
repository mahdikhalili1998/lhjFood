import Link from "next/link";

function Guide() {
  return (
    <div className="justify-center gap-10 flex mt-[2rem] mb-[4rem]">
      <Link className="bg-green-600 text-white font-bold px-2 py-1 rounded-lg " href="/menu">Menu</Link>
      <Link className="bg-green-600 text-white font-bold px-2 py-1 rounded-lg " href="/categories">Categories</Link>
      <Link className="bg-green-600 text-white font-bold px-2 py-1 rounded-lg " href="/">Discount</Link>
    </div>
  );
}

export default Guide;
