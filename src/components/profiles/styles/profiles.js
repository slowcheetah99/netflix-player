import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
`;
export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-weight: 500;
  width: 100%;
  font-size: 48px;
`;
export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;
export const User = styled.div``;
export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid #000;
  cursor: pointer;
`;
export const Name = styled.p`
  color: #000;
  text-overflow: ellipsis;
  font-size: 16px;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;
export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover ${Picture} {
    border: 3px solid #fff;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: #fff;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
