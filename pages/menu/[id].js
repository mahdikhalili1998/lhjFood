import { useRouter } from "next/router";

function FoodDetails({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>wating ...</h2>;
  }
  return <div>FoodDetail</div>;
}

export default FoodDetails;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/data");
  const json = await res.json();
  const data = json.slice(0, 10);
  const paths = data.map((food) => ({
    params: { id: food.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const res = await fetch(`http://localhost:4000/data/${id}`);
  const data = await res.json();
  console.log(id);
  //   console.log(data);
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
    revalidate: 10,
  };
}
