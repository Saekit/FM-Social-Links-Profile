import styled from "styled-components";

export const Body = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: hsl(0, 0%, 8%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  text-align: center;
`;

export const ProfileContainer = styled.div`
  background-color: hsl(0, 0%, 12%);
  border-radius: 15px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const ProfileBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileAvatar = styled.img`
  width: 30%;
  border-radius: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;
`;

export const ProfileName = styled.h1`
  color: white;
  margin-bottom: 6px;
  font-weight: 400;
`;

export const ProfileLocation = styled.h2`
  color: hsl(75, 94%, 57%);
  font-size: 1rem;
  margin-top: 0px;
`;

export const ProfileBio = styled.p`
  color: white;
  font-weight: 300;
`;
