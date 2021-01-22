import Layout from "../components/Layout";
import styled from "styled-components";

const UsersList = styled.div`
  width: 100%;
  height: 100%;
  padding: 65px;
`;

const Users = ({users}) => (
  <Layout title="Users">
    <UsersList className='users-list'>Yoo</UsersList>
  </Layout>
);

// Users.getInitialProps = async (ctx) => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const json = await res.json()
//   console.log('Jsno is',json)
//   // return { users: json.stargazers_count }
// }

export default Users;
