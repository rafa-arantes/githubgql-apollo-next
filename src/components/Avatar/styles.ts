import styled from "styled-components";
import Image from "next/image";

export const StyledAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled(Image)`
  margin-right: 16px;
  height: 27px;
  border-radius: 14px;
  width: 27px;
`;
