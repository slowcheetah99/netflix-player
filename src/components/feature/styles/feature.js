import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  max-width: 640px;
  margin: auto;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.p`
  color: #fff;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
