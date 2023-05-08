const generateLogoHTML = (paths) => {
  const logoHTML = `
    <a href="${paths.home}">
      <img src="${paths.controle}" alt="imagem de um controle de videogame">
      <img src="${paths.alura}" alt="alura">
      <img src="${paths.geek}" alt="geek">
    </a>
  `
  return logoHTML;
}

const generateSearchBarHTML = (paths) => {
  return `
    <div class="nav_header_search">
      <input type="text" class="nav_header_search_input" placeholder="O que deseja encontrar?"/>
      <img src="${paths.lupa}" alt="imagem de uma lupa, para pesquisa" class="nav_header_search_img">
    </div>
  `;
}

const generateLoginButtonHTML = (paths) => {
  const loginButtonHTML = paths.login ? `
    <div class="nav_header_login">
      <a href="${paths.login}" class="btn_login">Login</a>
      <img class="lupa_hidden" src="${paths.lupa}" alt="imagem de uma lupa" data_input/>
    </div>
    <input type="text" class="lupa_hidden_input" placeholder="O que deseja encontrar?"/>
  ` : '';

  return loginButtonHTML;
}

export const nav = (paths) => {
  const navHeader = document.querySelector('[data_nav]');
  const logoHTML = generateLogoHTML(paths);
  const searchBarHTML = generateSearchBarHTML(paths);
  const loginButtonHTML = generateLoginButtonHTML(paths);

  const html = `
    <div class="nav_header_left">
      <div class="logo">
        ${logoHTML}
      </div>
      ${searchBarHTML}
    </div>
    ${loginButtonHTML}
  `;

  navHeader.innerHTML = html;

  if(paths.inputShow){
    inputShow();
  }
}

export const inputShow = () => {
  const img = document.querySelector('[data_input]')
  const lupaHiddenInput = document.querySelector('.lupa_hidden_input');

  img.addEventListener('click', () => {
    lupaHiddenInput.classList.toggle('show');
    lupaHiddenInput.focus();
  });

  lupaHiddenInput.addEventListener('blur', () => {
    lupaHiddenInput.classList.toggle('show');
  });
}

function createFooterHTML(paths) {
  const logoLink = generateLogoHTML(paths);

  const linksHTML = `
    <a href="#">Quem somos nós</a href="">
    <a href="#">Política de privacidade</a href="">
    <a href="#">Programa fidelidade</a href="">
    <a href="#">Nossas lojas</a href="">
    <a href="#">Quero ser franqueado</a href="">
    <a href="#">Anuncie aqui</a href="">
  `;

  const formHTML = `
    <form class="footer_forms">
      <p>Fale conosco</p>
      <input type="text" placeholder="Digite seu nome" required/>
      <textarea placeholder="Escreva sua mensagem" required></textarea>
      <input type="submit" value="Enviar mensagem" class="btn_submit" data_submit />
    </form>
  `;

  const developerHTML = `
    <div class="footer_dev">
      <p>Desenvolvido por <a href="https://github.com/karinewagner">Karine Wagner</a></p>
    </div>
  `;

  return `
    <section class="footer">
      <div class="container">
        <div class="logo">
          ${logoLink}
        </div>
        <div class="footer_text">
          ${linksHTML}
        </div>
      </div>
      ${formHTML}
    </section>
    ${developerHTML}
  `;
}

export function footer(paths) {
  const footerElement = document.querySelector('[data_footer]');
  const footerHTML = createFooterHTML(paths);

  footerElement.innerHTML = footerHTML;
}
