import { ContainerLista } from "./style";
import { Products } from "../product";

export const ProductsList = ({ produtos, handleClick }) => {
  return (
    <ContainerLista>
      <Products produtos={produtos} handleClick={handleClick}></Products>
    </ContainerLista>
  );
};
