import {
  Body,
  ButtonContainer,
  ProfileAvatar,
  ProfileBio,
  ProfileBioContainer,
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
        <ProfileBioContainer>
          <ProfileAvatar src={avatarJessica} alt="Jessica's Avatar" />
          <ProfileName>Jessica Randall</ProfileName>
          <ProfileLocation>London, United Kingdom</ProfileLocation>
          <ProfileBio>"Front-end developer and avid reader."</ProfileBio>
        </ProfileBioContainer>
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
