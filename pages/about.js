import Layout from "../components/Layout";
import { useEffect } from "react";
// import axios from "axios"

const About = () => {
  // useEffect(() => {
  //   window && window.alert('Youuu')
  //   axios.get('https://jsonplaceholder.typicode.com/users').then(res => console.log(res))
  // }, [])

  return (
    <Layout title="About">
      <h1>About</h1>
    </Layout>
  );
};

export default About;
