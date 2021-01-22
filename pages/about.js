import Layout from "../components/Layout";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window && window.alert('Youuu')
  }, [])

  return (
    <Layout title="About">
      <h1>About</h1>
    </Layout>
  );
};

export default About;
