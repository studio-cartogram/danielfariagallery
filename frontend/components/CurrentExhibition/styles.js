import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyledImageContainer = styled.div`
  display: flex;
  height: 640px;
  object-fit: cover;
  justify-content: space-around;
`;

export { StyledImage, StyledImageContainer };
