import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 100px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #e50914;
  color: #fff;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  cursor: pointer;
  border: none;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 10px;
    margin-top: 20px;
    font-weight: 700;
  }
`;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: none;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;
export const Text = styled.p`
  font-size: 19px;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    lien-height: 22px;
  }
`;
