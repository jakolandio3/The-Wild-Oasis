import { Outlet } from "react-router-dom";
import SideBar from "./SideBar.jsx";
import Header from "./Header";
import styled from "styled-components";
import DemoModeToggle from "./DemoModeToggle.jsx";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
  @media screen and (max-width: 600px) {
    grid-template-columns: 0.9fr 2fr;
    overflow: hidden;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  @media screen and (max-width: 600px) {
    padding: 2px;
    width: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media screen and (max-width: 600px) {
    max-width: 100vw;
    width: 100%;
    margin: 4px;
    gap: 1px;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <DemoModeToggle />
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
