import styled from "styled-components";

export const ProfileButton = styled.button`
  width: 100%;
  background-color: hsl(0, 0%, 20%);
  color: hsl(0, 0%, 100%);
  font-weight: 600;
  font-size: 1rem;
  padding: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: hsl(75, 94%, 57%);
    color: hsl(0, 0%, 12%);
  }
`;
