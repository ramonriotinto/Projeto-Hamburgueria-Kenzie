import { useEffect, useState } from "react";
import "./App.css";
import { ContainerCabecalho } from "./components/cabecalho";
import { ProductsList } from "./components/productsList";
import { Cart } from "./components/cart";
import api from "./services/api";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [valorInput, setValorInput] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);

  useEffect(() => {
    api
      .get("products")
      .then((res) => {
        setProdutos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function showProducts() {
    let teste = produtos.filter((produto) => {
      let categoriaProduto = produto.category.toLowerCase();
      let nomeProduto = produto.name.toLowerCase();
      let nomeInput = valorInput.toLowerCase();
      let teste1 = produto.name.toLowerCase();
      let teste3 = produto.category.toLowerCase();
      let teste2 = valorInput.toLowerCase();
      let tratarAcento = teste1
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      let tratarAcento2 = teste3
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      let nomeInputTratadoAcento = teste2
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (
        categoriaProduto.includes(nomeInput) ||
        nomeProduto.includes(nomeInput) ||
        tratarAcento.includes(nomeInputTratadoAcento) ||
        tratarAcento2.includes(nomeInputTratadoAcento)
      ) {
        return produto;
      }
    });
    return setFilteredProducts(teste);
  }

  function handleClick(product) {
    const verificar = currentSale.some((Element) => Element === product);
    if (verificar) {
      setCartTotal([...cartTotal, product]);
    } else {
      setCurrentSale([...currentSale, product]);
      setCartTotal([...cartTotal, product]);
    }
  }

  function removerProduto(Produto) {
    const removido = currentSale.filter((lista) => lista !== Produto);

    setCurrentSale(removido);
    setCartTotal(removido);
  }

  function removerTodosProdutos() {
    setCurrentSale([]);
    setCartTotal([]);
  }

  return (
    <div className="App">
      <ContainerCabecalho>
        <input
          type="text"
          value={valorInput}
          placeholder="Digitar Pesquisa"
          onChange={(event) => setValorInput(event.target.value)}
        />
        <button type="submit" onClick={() => showProducts()}>
          Pesquisar
        </button>
      </ContainerCabecalho>
      <main>
        {filteredProducts.length > 0 ? (
          <ProductsList
            produtos={filteredProducts}
            handleClick={handleClick}
          ></ProductsList>
        ) : (
          <ProductsList
            produtos={produtos}
            handleClick={handleClick}
          ></ProductsList>
        )}
        <Cart
          currentSale={currentSale}
          removerProduto={removerProduto}
          removerTodosProdutos={removerTodosProdutos}
          cartTotal={cartTotal}
        ></Cart>
      </main>
    </div>
  );
}

export default App;
