// resources/index.js
import yaml from 'https://cdn.skypack.dev/js-yaml';

async function initApp() {
  try {
    // 1. Busca o arquivo de configuração
    const response = await fetch('./config.yml');
    const yamlText = await response.text();
    
    // 2. Converte YAML para Objeto
    const config = yaml.load(yamlText);

    // 3. Renderiza no HTML
    const app = document.getElementById('app-mount');
app.innerHTML = `
  <h1 class="titulo">${config.titulo_site}</h1>
  <p class="subtitulo">${config.descricao}</p>
  
  <div class="container-cards">
    ${config.menu.map(item => `
      <a href="${item.link}" class="card">
        <div class="card-content">
          <strong>${item.nome}</strong>
          <span>Acesse agora →</span>
        </div>
      </a>
    `).join('')}
  </div>
`;



  } catch (e) {
    console.error("Erro ao carregar configurações:", e);
  }
}

initApp();
