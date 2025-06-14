import React from 'react';
import { styled } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => (
  <Wrapper>
    {children}
  </Wrapper>
);

const Wrapper = styled('div')({
  width: '1440px',
  maxWidth: '90%',
  margin: '0 auto',
  zIndex: 9999,
});

export default Container;