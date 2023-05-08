import { lista } from '../../components/fakeAPI/script.js';
import { containerCards, updateList } from '../../components/index.js';
import { footer, nav } from '../../components/navHeader/script.js';

const renderProductInfo = (produto)=>{
  const productInfos = document.querySelector('[data_product]')
  
  const html = `
  <div class="product_img" id="teste" style="background-image: url('${produto.img}');background-size: contain ;"></div>
  <div class="product_infos">
    <h2>${produto.nome}</h2>
    <p>R$ ${produto.preco}</p>
    <p>${produto.descricao}</p>
  </div>
  `
  productInfos.innerHTML = html;
}

function adicionarBotaoVoltar() {
  const btnVoltar = document.getElementById('btnVoltar');
  btnVoltar.addEventListener('click', () => {
    history.back();
  });

  const divBotoes = document.querySelector('.botoes');
  divBotoes.appendChild(btnVoltar);
}

export const initializePage = () => {
  const url = new URL(window.location)
  const listIndex = url.searchParams.get('listIndex')
  const productId  = url.searchParams.get('id')
  const productList = lista[listIndex];
  const product = productList.produtos[productId - 1].infos;
   
  const paths = {
    controle: "../../style/img/controle.png",
    alura: "../../style/img/alura.png",
    geek: "../../style/img/geek.png",
    lupa: "../../style/img/lupa.png",
    home: "../../../index.html",
    imgSeta: "../../style/img/seta.png",
    imgSlider: "../../style/img/setaSlider.png",
    allProducts: "../../pages/allproducts/index.html",
    productList,
    productAmount: lista.length,
    productAmount: '',
    listIndex,
    url: "",
    login: "../../pages/login/index.html",
    inputShow: true,
  } 
  
  nav(paths);
  adicionarBotaoVoltar();
  renderProductInfo(product);
  updateList();
  containerCards(paths);
  footer(paths);
  document.querySelector('[data_title]').innerHTML = "Produtos similares";

}

window.onload = initializePage;