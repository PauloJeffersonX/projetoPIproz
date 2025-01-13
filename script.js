// Rolagem suave para âncoras de navegação
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');

        // Verifica se o href é um link interno (começa com '#')
        if (href.startsWith('#')) {
            const targetId = href.substring(1);

            // Verificação se o elemento alvo existe antes de tentar scrollIntoView
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else {
            // Se não é um link interno, redireciona para a URL especificada no href
            window.location.href = href;
        }
    });
});

// Animação de entrada para elementos
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Para de observar o elemento após a animação
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// Função para exibir mensagem de feedback na seção de contato
function showFeedback(message, type) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = type === 'success' ? 'feedback success' : 'feedback error';
    feedbackDiv.innerText = message;
    document.querySelector('.contact-section').appendChild(feedbackDiv);
    setTimeout(() => feedbackDiv.remove(), 3000);
}

// Validação simplificada com feedback visual
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    const inputs = this.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '2px solid red';
            valid = false;
        } else {
            input.style.border = '1px solid #ddd';
        }
    });
    if (valid) {
        showFeedback('Sua mensagem foi enviada com sucesso!', 'success');
        this.reset();
    } else {
        showFeedback('Por favor, preencha todos os campos obrigatórios.', 'error');
    }
});
