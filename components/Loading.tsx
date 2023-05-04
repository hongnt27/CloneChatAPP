import { StyledImageWrapper } from "@/pages/login";
import Image from "next/image";
import styled from "styled-components";
import WhatsAppLogo from "../assets/whatsapplogo.png";
import CircularProgress from "@mui/material/CircularProgress";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Loading = () => {
  return (
    <StyledContainer>
      <StyledImageWrapper>
        <Image
          height={200}
          width={200}
          src={WhatsAppLogo}
          alt="whatsapp Logo"
        />
      </StyledImageWrapper>
      <CircularProgress />
    </StyledContainer>
  );
};

export default Loading;
