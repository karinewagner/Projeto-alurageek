import { lista } from '../../components/fakeAPI/script.js';
import { containerCards, updateList } from '../../components/index.js';
import { footer, nav } from '../../components/navHeader/script.js';

const paths = { 
  controle: "../../style/img/controle.png",
  alura: "../../style/img/alura.png",
  geek: "../../style/img/geek.png",
  lupa: "../../style/img/lupa.png",
  home: "../../../index.html",
  imgSeta: "../../style/img/seta.png",
  imgSlider: "../../style/img/setaSlider.png",
  allProducts: "../../pages/allproducts/index.html",
  productList: lista,
  productAmount: lista.length,
  listIndex: '',
  url: "../../pages/product/index.html",
  login: "../../pages/login/index.html",
  inputShow: true
} 

 const addProduct = () => {
  
  updateList();
  nav(paths);
  containerCards(paths);
  footer(paths);  

  const titulos = document.querySelectorAll('.content_title')

  titulos.forEach((item,index)=>{
    if(index != 0){
      item.remove();
    }
  })
  titulos[0].innerHTML = `
    <h2 data_title>Todos</h2>
    <a href="../addProduct/index.html" class="btn_submit">Adicionar produto</a>
  `
}

window.onload = addProduct()

