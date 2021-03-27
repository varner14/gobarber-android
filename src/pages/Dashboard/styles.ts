import styled from 'styled-components/native';
import {Platform } from 'react-native';
import { Form } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 64px 30px ${Platform.OS ==='android' ? 150 : 40}px;
`;
