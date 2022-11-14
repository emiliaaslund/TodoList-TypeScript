import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffeba6;
  /* margin: auto; */
  height: 100px;
  min-width: 550px;
  max-width: 750px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  font-family: "FormulaRegular";
  font-size: 1.2rem;
  min-width: 400px;
  margin: 20px;
  height: 50px;
  padding: 15px;
  border: none;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Button = styled.button`
  font-size: 1rem;
  font-family: "FormulaBold";
  text-transform: uppercase;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #32cdbe;
  color: black;
  background: #84e1d8;
  height: 50px;
  width: 170px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  transition: all 0.5s ease-in;
  :hover {
    background-color: #46d2c4;
  }
`;
