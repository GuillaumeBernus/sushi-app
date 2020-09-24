import styled from "styled-components";

export const Logo = styled.img`
  width: 140px;
  height: 140 px;
`;
const headerHeight = 160;
export const Title = styled.h1`
  display: inline-block;
  margin: 50px 0 0 20px;
  vertical-align: top;
`;

export const Wrapper = styled.header`
  height: ${headerHeight}px;
  border-bottom: 1px solid grey;
`;

export const Badge = styled.span`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  right: 0;
  background-color: red;
  text-align: center;
  font-size: 20px;
  color: white;
`;
