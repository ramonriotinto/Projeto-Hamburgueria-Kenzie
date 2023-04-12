import { Lista, CaixaImagem } from "./style";

export const Products = ({ produtos, handleClick }) => {
  return (
    <Lista>
      {produtos?.map((elemento) => (
        <li key={elemento.id}>
          <CaixaImagem>
            <img src={elemento.img} alt={elemento.name} />
          </CaixaImagem>
          <div>
            <h3>{elemento.name}</h3>
            <span>{elemento.category}</span>
            <p>R$ {elemento.price.toFixed(2)}</p>
            <button onClick={() => handleClick(elemento)}>Adicionar</button>
          </div>
        </li>
      ))}
    </Lista>
  );
};
