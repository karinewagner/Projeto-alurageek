import { lista } from './fakeAPI/script.js'
import { nav, footer } from '../components/navHeader/script.js'
import { slider } from '../components/slider/script.js'

export function updateList() {
  const novos = JSON.parse(localStorage.getItem('lista'));

  if (novos) {
    novos.forEach((item) => {
      let encontrado = false;

      lista.forEach((el) => {
        if (el.titulo.toLowerCase() === item.titulo.toLowerCase()) {
          const produtoExistente = el.produtos.find(
            (produto) => produto.id === item.produtos[0].id
          );
          if (!produtoExistente) {
            el.produtos.push(item.produtos[0]);
          }
          encontrado = true;
        }
      });

      if (!encontrado) {
        lista.push(item);
      }
    });
  }
}

function createCards(data) {
  let cardHTML = '';
  const { product, url, index } = data;

  product.produtos.map((element) => {
    cardHTML += `
      <div class="content_card">
        <a href="${url}?listIndex=${index}&id=${element.infos.id}">
          <img src="${element.infos.img}" alt="${element.infos.alt}">
        </a>
        <div class="card_infocard_info">
          <p class="content_card_title">${element.infos.nome}</p>
          <p class="content_card_price">R$ ${element.infos.preco}</p>
          <a href="${url}?listIndex=${index}&id=${element.infos.id}">Ver produto</a>
        </div>
      </div>
    `;
  });

  return cardHTML;
}

function HTML(data) {
  const { title, path, cards } = data;

  return `
    <div class="content_container">
      <div class="content_title">
        <h2 data_title>${title}</h2>
        <div>
          <a href="${path.allProducts}">Ver tudo <img src="${path.imgSeta}" alt="seta apontando para a direita"/></a>
        </div>
      </div>
      <div class="card_container">
        <span class="span voltar"><img src="${path.imgSlider}" alt="" class="img"></span>
        <div class="cards">
          ${cards}
        </div>
        <span class="span avancar"><img src="${path.imgSlider}" alt=""></span>
      </div>
    </div>
  `;
}

export function containerCards(paths) {
  const cardSection = document.querySelector(".content")
  cardSection.innerHTML = ''

  if (paths.productAmount > 1) {
    paths.productList.forEach((item, index) => {
      let data = { product: item, index: index, url: paths.url }
      let cardContainer = createCards(data)      
      let info = { title: item.titulo, cards: cardContainer, path: paths }
      cardSection.innerHTML += HTML(info);
      cardContainer = ''
    })
    slider();

    return
  }
  let data = { product: paths.productList, index: paths.listIndex, url: paths.url }
  let cardContainer = createCards(data)
  let info = { title: paths.productList.titulo, cards: cardContainer, path: paths }
  cardSection.innerHTML += HTML(info);
  cardContainer = ''
  slider();
}

window.onload = () => {

  updateList();

  const paths = {
    controle: "src/style/img/controle.png",
    alura: "src/style/img/alura.png",
    geek: "src/style/img/geek.png",
    lupa: "src/style/img/lupa.png",
    home: "#",
    imgSeta: "src/style/img/seta.png",
    imgSlider: "src/style/img/setaSlider.png",
    allProducts: "src/pages/allproducts/index.html",
    productList: lista,
    productAmount: lista.length,
    listIndex: '',
    url: "./src/pages/product/index.html",
    login: "src/pages/login/index.html",
    inputShow: true,
  }

  nav(paths);
  containerCards(paths);
  footer(paths);
}
