import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="my-auto">
      <Layout>
        {" "}
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
