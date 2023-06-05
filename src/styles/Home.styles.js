import styled from 'styled-components';

export const Container = styled.main`
  box-sizing: border-box;
  border: 1px solid;
  background: linear-gradient(145deg, #71aca7, #b9c8d4);
  border-radius: 10px;
  box-shadow: 5px 5px 15px #b7d7d8, -5px -5px 15px #92ac93;
  font-weight: 550;
  left: 50%;
  position: fixed;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 50%;
  color: white;
  height: 30rem;
`;

export const HeadTag = styled.h3`
  font-size: 2rem;
`;

export const Footer = styled.footer`
  font-size: 1rem;
  margin-top: 7rem;
`;

export const P = styled.p`
  font-weight: 600;
  margin-top: 15%;
`;
