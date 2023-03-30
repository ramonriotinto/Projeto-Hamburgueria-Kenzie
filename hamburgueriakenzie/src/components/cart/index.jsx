import {
  CarrinhoDeCompras,
  DivTitulo,
  DivVazia,
  ListaCarrinho,
  DivTotal,
} from "./style";

export const Cart = ({
  currentSale,
  removerProduto,
  removerTodosProdutos,
  cartTotal,
}) => {
  return (
    <CarrinhoDeCompras>
      <DivTitulo>
        <p>Carrinho de compras</p>
      </DivTitulo>
      {currentSale.length > 0 ? (
        <ListaCarrinho>
          {currentSale.map((produto) => (
            <li key={produto.id}>
              <img src={produto.img} alt={produto.name} />
              <div>
                <p>{produto.name}</p>
                <span>{produto.category}</span>
              </div>
              <button onClick={() => removerProduto(produto)}>Remover</button>
            </li>
          ))}
        </ListaCarrinho>
      ) : (
        <DivVazia>
          <p>Sua sacola está vazia</p>
          <span>Adicione Itens</span>
        </DivVazia>
      )}

      <DivTotal>
        <div>
          <p>Total</p>
          <p>Quant: {cartTotal.length}</p>
          <p>
            R$ {cartTotal.reduce((acc, vAt) => acc + vAt.price, 0).toFixed(2)}
          </p>
        </div>
        <button onClick={() => removerTodosProdutos()}>Remover Todos</button>
      </DivTotal>
    </CarrinhoDeCompras>
  );
};
