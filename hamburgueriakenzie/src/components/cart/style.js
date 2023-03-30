import styled from "styled-components";

export const CarrinhoDeCompras = styled.section`
  max-width: 90%;
  height: 223px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 0px;

  background-color: #f5f5f5;

  @media screen and (min-width: 1024px) {
    width: 30%;

    margin-top: 15px;
  }
`;

export const DivTitulo = styled.div`
  background-color: #27ae60;

  width: 100%;
  height: 65px;

  text-align: center;

  border-radius: 8px 8px 0px 0px;

  p {
    color: white;
    font-weight: 500;
  }
`;

export const DivVazia = styled.div`
  width: 100%;
  height: 158px;

  background-color: #f5f5f5;

  text-align: center;
  font-weight: 500;

  padding-bottom: 15px;
  span {
    color: #828282;
  }
`;

export const ListaCarrinho = styled.ul`
  max-width: 100%;
  max-height: 585px;

  display: flex;
  flex-direction: column;

  background-color: #f5f5f5;

  padding-bottom: 15px;
  padding-left: 0;

  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    width: 100%;
    height: 100px;

    background-color: #f5f5f5;

    img {
      width: 70px;
      height: 70px;

      border: none;
      border-radius: 8px;

      background-color: #e0e0e0;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 100px;

      p {
        font-weight: 600;
        margin: 2px 0px;
      }
      span {
        color: #828282;
      }
    }

    button {
      cursor: pointer;
      color: #bdbdbd;
      background-color: transparent;

      border: none;

      font-weight: 600;
    }
  }
`;

export const DivTotal = styled.div`
  width: 100%;
  height: 145px;

  display: flex;
  flex-direction: column;

  background-color: #f5f5f5;

  padding-bottom: 15px;

  border-top: 2px solid #e0e0e0;

  div {
    width: 90%;

    display: flex;
    justify-content: space-between;

    margin: 0 auto;

    font-weight: 500;
  }
  button {
    margin: 0 auto;
    width: 90%;
    height: 60px;

    background-color: #e0e0e0;
    color: #828282;

    border: none;
    border-radius: 8px;

    cursor: pointer;
  }
`;
