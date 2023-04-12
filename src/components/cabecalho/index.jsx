import { Cabecalho, DivCabecalho, DivPesquisa, DivContainer } from "./style";

export function ContainerCabecalho({ children }) {
  return (
    <Cabecalho>
      <DivContainer>
        <DivCabecalho>
          <h1>Burger</h1>
          <h3>Kenzie</h3>
        </DivCabecalho>
        <DivPesquisa>{children}</DivPesquisa>
      </DivContainer>
    </Cabecalho>
  );
}
