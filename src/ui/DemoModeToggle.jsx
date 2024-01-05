import { useDemoMode } from "../context/DemoModeContext";

import { useLogout } from "../features/authentication/useLogout";

import Button from "./Button";
import styled from "styled-components";

const StlyedDevButton = styled.div`
  height: 50px;
  width: 200px;
  display: block;
  position: absolute;
  bottom: 0px;
  left: 0px;
  margin: 20px;
  padding: 2px;
  background-color: transparent;
  z-index: 1000;
  opacity: 0.5;
`;
const StyledDemoModeText = styled.p`
  opacity: 0.1;
  font-size: 4rem;
  display: flex;
  position: absolute;
  top: 20px;
  left: 250px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

function DemoModeToggle() {
  const { logout } = useLogout();
  const { isDemoMode, toggleDemoMode } = useDemoMode();
  function logOut() {
    toggleDemoMode();
    if (isDemoMode) logout();
  }
  return (
    <>
      <StlyedDevButton>
        <Button onClick={logOut} size="small">
          Click to toggle Demo Mode
        </Button>
      </StlyedDevButton>
      <StyledDemoModeText>
        {isDemoMode === false ? "" : "This is a Demo build"}
      </StyledDemoModeText>
    </>
  );
}

export default DemoModeToggle;
