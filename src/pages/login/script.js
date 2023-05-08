import { footer, nav } from '../../components/navHeader/script.js'

window.addEventListener('load', () => {
  const paths = {
    controle: '../../style/img/controle.png',
    alura: '../../style/img/alura.png',
    geek: '../../style/img/geek.png',
    lupa: '../../style/img/lupa.png',
    home: '../../../index.html',
    url: '../../pages/product/index.html',
    login: '',
    inputShow: false
  };
  
  nav(paths);
  adicionarBotaoVoltar();
  footer(paths);

});

function adicionarBotaoVoltar() {
  const btnVoltar = document.getElementById('btnVoltar');
  btnVoltar.addEventListener('click', () => {
    history.back();
  });

  const divBotoes = document.querySelector('.botoes');
  divBotoes.appendChild(btnVoltar);
}
