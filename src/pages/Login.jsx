import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useDemoMode } from "../context/DemoModeContext";
import DemoModeToggle from "../ui/DemoModeToggle";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media screen and (max-width: 600px) {
    grid-template-columns: 80%;
    overflow: hidden;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <DemoModeToggle />
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
