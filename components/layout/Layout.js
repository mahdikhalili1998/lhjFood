import Link from "next/link";
import Logo from "../icons/Logo";

function Layout({ children }) {
  return (
    <>
      <header className="sticky top-0 z-10 rounded-2xl bg-green-600 p-5">
        <div className="mx-5 flex items-center justify-between">
          <Link className="flex items-center gap-3 " href={"/"}>
            <h1 className="text-2xl font-bold text-white">Lahijan Food</h1>
            <Logo className />
          </Link>
          <div className="space-x-4 text-green-600">
            <Link
              className=" rounded-lg bg-white px-3 py-1 font-semibold"
              href={"/menu"}
            >
              Menu
            </Link>
            <Link
              className=" rounded-lg bg-white px-3 py-1 font-semibold"
              href={"/categories"}
            >
              Categories
            </Link>
          </div>
        </div>
      </header>
      <div>{children}</div>
      <footer className="mb-[3rem] mt-[3rem] rounded-2xl bg-green-600 p-5">
        <h3 className="font-ssmibold text-center text-white">
          This sit developed by{" "}
          <a
            href="https://instagram.com/mahdi-lhj "
            rel="noreferrer"
            target="_blank"
            className=" font-bold"
          >
            Mahdi khalil
          </a>{" "}
        </h3>
      </footer>
    </>
  );
}

export default Layout;
