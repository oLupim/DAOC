document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-link');
    const exercicios = document.querySelectorAll('.exercicio');

    if (exercicios.length > 0) {
        exercicios[0].style.display = 'flex';
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            exercicios.forEach(exercicio => {
                exercicio.style.display = 'none';
            });
            const targetExercicio = document.getElementById(targetId);
            if (targetExercicio) {
                targetExercicio.style.display = 'flex';
            }
        });
    });

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


    const imagemPrincipal = document.getElementById('imagemPrincipal');
    const miniaturasContainer = document.getElementById('miniaturasContainer');

    // Array com URLs de imagens da internet
    const imagens = [
        'https://picsum.photos/id/1018/800/450',
        'https://picsum.photos/id/1015/800/450',
        'https://picsum.photos/id/1025/800/450',
        'https://picsum.photos/id/1040/800/450',
        'https://picsum.photos/id/1080/800/450',
        'https://picsum.photos/id/1060/800/450',
        'https://picsum.photos/id/1074/800/450',
        'https://picsum.photos/id/1084/800/450',
    ];

    function inicializarGaleria() {
        if (!miniaturasContainer) return;

        imagens.forEach((src, index) => {
            const miniatura = document.createElement('img');
            miniatura.src = src;
            miniatura.alt = `Miniatura ${index + 1}`;
            miniatura.dataset.index = index; 
            miniaturasContainer.appendChild(miniatura);
        });

        if (imagens.length > 0) {
            imagemPrincipal.src = imagens[0];
            miniaturasContainer.children[0].classList.add('miniatura-ativa');
        }

        miniaturasContainer.addEventListener('click', (event) => {
            if (event.target.tagName === 'IMG') {
                const imagemClicada = event.target;
                
                for (let i = 0; i < miniaturasContainer.children.length; i++) {
                    miniaturasContainer.children[i].classList.remove('miniatura-ativa');
                }

                imagemClicada.classList.add('miniatura-ativa');
                imagemPrincipal.src = imagemClicada.src;
            }
        });
    }

    inicializarGaleria();
});