
    document.addEventListener("DOMContentLoaded", function () {
        const faqButtons = document.querySelectorAll(".faq-question");

        faqButtons.forEach(button => {
            button.addEventListener("click", function () {
                const answer = this.nextElementSibling;

                if (answer.style.display === "block") {
                    answer.style.display = "none";
                } else {
                    answer.style.display = "block";
                }
            });
        });
    });




// Script JavaScript 

const icons = [
    
    { src: '/assets/processador.png', alt: 'Computação', label: 'Computação' },
    { src: '/assets/hd.png', alt: 'Armazenamento', label: 'Armazenamento' },
    { src: '/assets/novo-banco-de-dados.png', alt: 'Banco de Dados', label: 'Banco de Dados' },
    { src: '/assets/rede-de-entrega-de-conteudo.png', alt: 'Redes e entrega', label: 'Redes e entrega' },
    { src: '/assets/analise.png', alt: 'Análises', label: 'Análises' },
    { src: '/assets/machine-learning (1).png', alt: 'Machine learning', label: 'Machine learning' },
    { src: '/assets/protecao.png', alt: '>Segurança', label: 'Segurança' }
];

const container = document.querySelector('.icon-container');

icons.forEach(icon => {
    const div = document.createElement('div');
    div.classList.add('icon-item');
    div.innerHTML = `<img src="${icon.src}" alt="${icon.alt}"><p>${icon.label}</p>`;
    
    div.addEventListener('mouseenter', () => div.classList.add('hovered'));
    div.addEventListener('mouseleave', () => div.classList.remove('hovered'));
    
    
    container.appendChild(div);

    
});





