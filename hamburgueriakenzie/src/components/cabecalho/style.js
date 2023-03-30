import styled from "styled-components";

export const Cabecalho = styled.header`
  width: 100%;

  padding-bottom: 14px;

  background-color: #f5f5f5;

  display: flex;
  justify-content: center;
`;
export const DivContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export const DivCabecalho = styled.div`
  width: 80%;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  h3 {
    color: red;
    margin-top: 27px;
  }

  @media screen and (min-width: 1024px) {
    justify-content: unset;
  }
`;

export const DivPesquisa = styled.div`
  width: 100%;
  height: 60px;

  border-radius: 8px;
  border: solid 3px #e0e0e0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;

  input {
    background-color: white;
    height: 98%;
    border: none;
  }
  button {
    background-color: #27ae60;
    color: white;

    border: none;
    border-radius: 8px;

    margin-right: 5px;

    width: 107px;
    height: 40px;

    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    width: 400px;

    input {
      width: 201px;
    }
  }
`;
