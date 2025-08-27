document.addEventListener('DOMContentLoaded', () => {

  // ---------------------------
  // Navegação SPA (navbar)
  // ---------------------------
  const navLinks = document.querySelectorAll('.nav-link');
  const exercicios = document.querySelectorAll('.exercicio');

  function mostrar(secId) {
    exercicios.forEach(ex => ex.style.display = 'none');
    const alvo = document.getElementById(secId);
    if (alvo) alvo.style.display = 'flex';
  }

  // mostra a primeira seção por padrão
  if (exercicios.length > 0) {
    exercicios[0].style.display = 'flex';
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      mostrar(targetId);
    });
  });

  // ---------------------------
  // Tema claro/escuro
  // ---------------------------
  const btnTemaClaro = document.getElementById('btnTemaClaro');
  const btnTemaEscuro = document.getElementById('btnTemaEscuro');
  const body = document.body;

  btnTemaClaro.addEventListener('click', () => {
    body.classList.remove('tema-escuro');
    body.classList.add('tema-claro');
  });

  btnTemaEscuro.addEventListener('click', () => {
    body.classList.remove('tema-claro');
    body.classList.add('tema-escuro');
  });

  // ---------------------------
  // Contador (refatorado)
  // ---------------------------
  const valorContadorDisplay = document.getElementById('valorContador');
  const passoInput = document.getElementById('passoInput');
  const btnIncrementar = document.getElementById('btnIncrementar');
  const btnDecrementar = document.getElementById('btnDecrementar');

  let valorAtualContador = 0;

  function getPasso() {
    const passo = parseInt(passoInput.value, 10);
    return isNaN(passo) || passo <= 0 ? 1 : passo;
  }
  function atualizarDisplayContador() {
    valorContadorDisplay.textContent = valorAtualContador;
  }

  btnIncrementar.addEventListener('click', () => {
    valorAtualContador += getPasso();
    atualizarDisplayContador();
  });

  btnDecrementar.addEventListener('click', () => {
    valorAtualContador -= getPasso();
    atualizarDisplayContador();
  });

  // ---------------------------
  // Galeria (objetos literais + render dinâmico)
  // ---------------------------
  const imagemPrincipal = document.getElementById('imagemPrincipal');
  const miniaturasContainer = document.getElementById('miniaturasContainer');
  const STORAGE_KEY = 'tde03_galeria';

  // Carrega lista do localStorage (se houver) ou usa defaults
  function carregarImagens() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    // defaults (objetos literais)
    return [
      { nome: 'Rio e montanhas', src: 'https://picsum.photos/id/1018/800/450' },
      { nome: 'Montanhas ao pôr do sol', src: 'https://picsum.photos/id/1015/800/450' },
      { nome: 'Cachorro curioso', src: 'https://picsum.photos/id/1025/800/450' },
      { nome: 'Floresta', src: 'https://picsum.photos/id/1040/800/450' },
      { nome: 'Cidade 1', src: 'https://picsum.photos/id/1080/800/450' },
      { nome: 'Cidade 2', src: 'https://picsum.photos/id/1060/800/450' },
      { nome: 'Neve', src: 'https://picsum.photos/id/1074/800/450' },
      { nome: 'Mar', src: 'https://picsum.photos/id/1084/800/450' }
    ];
  }
  function salvarImagens() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(imagens));
  }

  let imagens = carregarImagens();

  function renderGaleria() {
    if (!miniaturasContainer || !imagemPrincipal) return;

    // limpa tudo
    miniaturasContainer.innerHTML = '';

    if (imagens.length === 0) {
      imagemPrincipal.src = '';
      imagemPrincipal.alt = 'Sem imagem';
      return;
    }

    // coloca a primeira no destaque
    imagemPrincipal.src = imagens[0].src;
    imagemPrincipal.alt = imagens[0].nome || 'Imagem em destaque';

    // cria thumbs
    imagens.forEach((obj, index) => {
      const miniatura = document.createElement('img');
      miniatura.src = obj.src;
      miniatura.alt = obj.nome ? `Miniatura: ${obj.nome}` : `Miniatura ${index + 1}`;
      miniatura.dataset.index = index;
      if (index === 0) miniatura.classList.add('miniatura-ativa');
      miniaturasContainer.appendChild(miniatura);
    });
  }

  // click nas miniaturas
  miniaturasContainer?.addEventListener('click', (event) => {
    if (event.target.tagName !== 'IMG') return;
    const i = Number(event.target.dataset.index);
    if (!Number.isFinite(i)) return;

    // atualiza destaque
    imagemPrincipal.src = imagens[i].src;
    imagemPrincipal.alt = imagens[i].nome || 'Imagem em destaque';

    // atualiza estado visual das thumbs
    Array.from(miniaturasContainer.children).forEach(el => el.classList.remove('miniatura-ativa'));
    event.target.classList.add('miniatura-ativa');
  });

  // primeira renderização
  renderGaleria();

  // ---------------------------
  // Cadastro (exercício 3)
  // ---------------------------
  const formAdicionar = document.getElementById('formAdicionarImagem');
  const nomeImagem = document.getElementById('nomeImagem');
  const urlImagem  = document.getElementById('urlImagem');

  formAdicionar?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = (nomeImagem?.value || '').trim();
    const url  = (urlImagem?.value  || '').trim();

    if (!nome || !url) {
      alert('Preencha NOME e URL da imagem.');
      return;
    }
    // valida URL básica
    try { new URL(url); } catch {
      alert('Informe uma URL válida (https://...)');
      return;
    }

    // Objeto literal da imagem
    const novaImagem = { nome, src: url };
    // Adiciona na lista e persiste
    imagens.push(novaImagem);
    salvarImagens();

    // Re-renderiza a galeria
    renderGaleria();

    // Feedback + ir para a Galeria
    alert('Imagem adicionada com sucesso!');
    formAdicionar.reset();
    mostrar('exercicio2');
  });

});
