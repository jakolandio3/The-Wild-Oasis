import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import { useDemoMode } from "../context/DemoModeContext";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0px;
    overflow: hidden;
  }
`;

function SideBar() {
  const { isDemoMode } = useDemoMode();
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      {isDemoMode && <Uploader />}
    </StyledSidebar>
  );
}

export default SideBar;
