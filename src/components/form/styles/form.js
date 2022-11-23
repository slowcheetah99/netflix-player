import styled from "styled-components";
import { Link as TOSLink } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.65);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.small`
    margin-top: 10px;
    font-size: 13px;
    line-heightL normal;
    color: #8c8c8c;
`;

export const Link = styled(TOSLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  color: #fff;
  font-weight: 700;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  background-color: #333;
  border-radius: 4px;
  border: none;
  color: #fff;
  height: 50px;
  line-height: 52px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const ErrorMsg = styled.p`
  background-color: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: #fff;
  padding: 15px 20px;
`;

export const Submit = styled.button`
  background-color: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 12px;
  padding: 16px;
  border: none;
  color: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
