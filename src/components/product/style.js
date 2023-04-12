import styled from "styled-components";

export const Lista = styled.ul`
  display: flex;
  gap: 20px;

  max-width: 90%;

  overflow-x: auto;

  padding-bottom: 10px;
  margin-left: -22px;

  li {
    border: solid 2px #e0e0e0;
    border-radius: 8px;

    height: 365px;
    min-width: 250px;

    display: flex;
    flex-direction: column;

    padding-bottom: 10px;

    div {
      text-align: start;

      width: 90%;
      h3 {
        margin-left: 21px;
      }
      span {
        color: #828282;
        margin-left: 21px;
      }
      p {
        color: #27ae60;
        margin-left: 21px;
      }
      button {
        margin-left: 21px;

        background-color: #27ae60;
        color: white;

        width: 106px;
        height: 40px;

        border: none;
        border-radius: 8px;

        cursor: pointer;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    flex-wrap: wrap;

    margin-left: 0;
    padding-left: 0;

    max-width: 100%;
  }
`;
export const CaixaImagem = styled.div`
  height: 365px;
  min-width: 250px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;

  img {
    width: 177px;
    height: 177px;
  }
`;
