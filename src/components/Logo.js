import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
`;

export default ({ src, alt }) => <StyledImg src={src} alt={alt} />;
