import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styled from "styled-components";
// import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const ProfileContainer = styled.div`
padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  & h1 {
    margin-bottom: 0;
  }
  & p {
    font-size: 1.2rem;
  }
  height: 80vh;
`;

const ALink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-variant: petite-caps;
  padding: 12px 20px;
  border-radius: 4px;
  background: linear-gradient(45deg, purple, red);
  cursor: pointer;
  transition: all 200ms;
  &:hover {
    transform: scale(1.15);
    background: linear-gradient(135deg, purple, red);
  }
`;

const Avatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
  & img {
    border-radius: 50%;
    z-index: 1;
    position: absolute;
  }
`;

const ImageBg = styled.div`
  width: 208px;
  height: 208px;
  border-radius: 50%;
  position: absolute;
  background: linear-gradient(135deg, purple, red);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
`;

const GoBackButton = () => (
  <Link href="/users">
    <ALink>Go Back</ALink>
  </Link>
);

const UserProfile = ({ user }) => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <Layout title={`${user.first_name} ${user.last_name}`}>
      <ProfileContainer>
        <Avatar>
          <ImageBg />
          <img src={(user && user.avatar) || "/"} width={200} height={200} />
        </Avatar>
        <h1>Profile of the user {`${user.first_name} ${user.last_name}`}</h1>
        <p>E-mail: {user.email}</p>
        <GoBackButton />
      </ProfileContainer>
    </Layout>
  );
};

UserProfile.getInitialProps = async ({ query }) => {
  let user = "";
  await axios
    .get(`https://reqres.in/api/users/${query.id}`)
    .then(({ data }) => (user = data.data))
    .catch((e) => console.log("ERROR WHILE FETCHING USERS!", e));
  return { user };
};

export default UserProfile;
