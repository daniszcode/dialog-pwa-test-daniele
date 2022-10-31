import styled from "styled-components";
export const CardUser = styled.div`
  display: flex;
  flex-direction: column;
  background: #6ad65e;
  width: 250px;
  height: 400px;
  border-radius: 6%;
  margin: 20px;
  margin-right: 15px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
  box-sizing: border-box;
`;

export const CardImage = styled.img`
  width: 170px;
  height: 190px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 80px;
`;

export const Title = styled.h1`
  font-family: sans-serif;
`;

export const Table = styled.ul`
  list-style-type: none;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: start;
  align-items: center;
  gap: 50px;
`;

export const Input = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 50px;
`;
