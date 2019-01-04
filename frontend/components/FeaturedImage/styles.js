import styled from 'styled-components';

const StyledFeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 4s;
`;

const StyledFeature = styled.div`
  position: relative;
  overflow: hidden;
  grid-column: span 3;
`;

export {StyledFeatureImage, StyledFeature};
