import { ProfileButton } from "./SocialButton.style";

const SocialButton = ({ name }) => (
  <ProfileButton type="button" value={name}>
    {name}
  </ProfileButton>
);
export default SocialButton;
