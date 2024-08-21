import {
  Body,
  ButtonContainer,
  ProfileAvatar,
  ProfileBio,
  ProfileContainer,
  ProfileLocation,
  ProfileName,
} from "./App.style";
import avatarJessica from "./assets/images/avatar-jessica.jpeg";
import SocialButton from "./components/SocialButton";

function App() {
  const socialAccounts = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <Body>
      <ProfileContainer>
        <ProfileAvatar src={avatarJessica} alt="Jessica's Avatar" />
        <ProfileName>Jessica Randall</ProfileName>
        <ProfileLocation>London, United Kingdom</ProfileLocation>
        <ProfileBio>"Front-end developer and avid reader."</ProfileBio>
        <ButtonContainer>
          {socialAccounts.map((social) => (
            <SocialButton name={social} />
          ))}
        </ButtonContainer>
      </ProfileContainer>
    </Body>
  );
}

export default App;
