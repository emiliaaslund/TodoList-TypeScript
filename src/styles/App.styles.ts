import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  background-color: #ffeba6;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Title = styled.h2`
  margin-top: 90px;
  margin-bottom: 60px;
  font-size: 2.5rem;
  text-align: center;
  color: #e60000;
  background-color: #ffeba6;
  max-width: 600px;
  text-transform: uppercase;
  border-top: 10px solid #e60000;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-right: 10px solid #e60000;
  border-bottom-right-radius: 20px;
  padding: 30px;
  font-family: "FormulaRegular";
`;
