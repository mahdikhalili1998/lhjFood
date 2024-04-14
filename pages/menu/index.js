import React from "react";
import MenuPage from "../../components/template/MenuPage";

function MenuRoute({ data }) {
  return (
    <>
      <MenuPage data={data} />
    </>
  );
}

export default MenuRoute;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  return {
    props: { data },
    revalidate: 10,
  };
}
