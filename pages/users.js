import Layout from "../components/Layout";
import styled from "styled-components";
import axios from "axios";
import Link from "next/link";
import { BreadcrumbJsonLd } from "next-seo";

const UsersContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 40px;
  & ul {
    list-style-type: none;
    padding: 0;
    & li {
      padding: 8px 12px;
      margin: 8px 0;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
      border-radius: 6px;
      transition: all 300ms;
      &:hover {
        transform: scale(1.04);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        padding: 12px 12px;
        margin: 16px 0;
      }
      & .user-name {
        font-size: 1.4rem;
        line-height: 0;
      }
      & img {
        border-radius: 50%;
        width: 80px;
        margin-right: 12px;
      }
      & a {
        display: flex;
        align-items: center;
        color: black;
        text-decoration: none;
      }
    }
  }
  @media (max-width: 368px) {
    padding: 32px 20px;
  }
`;

const User = ({ id, first_name, last_name, email, avatar }) => (
  <li>
    <Link href={`/users/${id}`}>
      <a>
        <div>
          <img src={avatar} alt={`${first_name} ${last_name}`} />
        </div>
        <div>
          <p className="user-name">
            {first_name} {last_name}
          </p>
          <p>E-mail: {email}</p>
        </div>
      </a>
    </Link>
  </li>
);

const Users = ({ users }) => (
  <>
    <BreadcrumbJsonLd
      itemListElements={users.map(({ id, first_name, last_name }, i) => {
        return {
          position: i + 1,
          name: `${first_name} ${last_name}`,
          item: `https://nextjs-netlify.vercel.app/users/${id}`,
        };
      })}
    />
    <Layout
      title="Users"
      description="A list of users from reqres.in to test the data fetching before website has builded."
    >
      <UsersContainer className="users-list">
        <ul>
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </UsersContainer>
    </Layout>
  </>
);

export async function getStaticProps() {
  let users = [];
  await axios
    .get("https://reqres.in/api/users?page=1")
    .then(({ data }) => (users = data.data))
    .catch((e) => console.log("ERROR WHILE FETCHING USERS!", e));
  return {
    props: { users },
  };
}

export default Users;
