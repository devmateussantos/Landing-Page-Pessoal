 /*
      FUNCIONALIDADE 1: SCROLL SUAVE
      ------------------------------------------------------------
      Este código faz com que a página deslize suavemente para as seções
      ao clicar nos links de navegação.
    */

// Aguarda o DOM (Document Object Model) ser completamente carregado
// Isso garante que o script só tentará manipular a página depois que todos os elementos HTML estiverem disponíveis.
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os links da navegação que apontam para uma seção da página.
    // O seletor 'a[href^="#"]' encontra todas as tags 'a' cujo atributo 'href' começa com '#'.
    const navLinks = document.querySelectorAll('a[href^="#"]');

    // Itera sobre cada um dos links encontrados
    navLinks.forEach(link => {
        // Adiciona um "ouvinte de evento" de clique para cada link
        link.addEventListener('click', (event) => {
            // Previne o comportamento padrão do clique (que é o pulo abrupto)
            event.preventDefault();

            // Pega o valor do atributo 'href' do link clicado, que é o ID da seção de destino
            const targetId = link.getAttribute('href');
            
            // Encontra o elemento de destino usando o ID
            const targetSection = document.querySelector(targetId);

            // Verifica se a seção de destino existe antes de tentar rolar
            if (targetSection) {
                // Rola a página suavemente até o elemento de destino
                // A propriedade 'behavior: "smooth"' é o que cria a animação de deslize
                window.scrollTo({
                    top: targetSection.offsetTop, // Pega a posição vertical do topo da seção
                    behavior: "smooth"
                });
            }
        });
    });

});

 /*
      FUNCIONALIDADE 2: VALIDAÇÃO DO FORMULÁRIO DE CONTATO
      ------------------------------------------------------------
      Este código verifica os campos de Nome e Email antes de permitir
      o envio do formulário. Ele usa expressões regulares para o email.
    */
    const contactForm = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Seletores para os elementos de erro (que ainda vamos adicionar no HTML)
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');

    // Padrão de validação de e-mail usando uma expressão regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Adiciona um "ouvinte de evento" para o envio do formulário
    contactForm.addEventListener('submit', (event) => {
        // Assume que o formulário é válido inicialmente
        let isValid = true;

        // Resetar as mensagens de erro antes de cada validação
        nameError.textContent = '';
        emailError.textContent = '';
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');

        // VALIDAÇÃO DO NOME
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Por favor, preencha seu nome.';
            nameInput.classList.add('error');
            isValid = false;
        }

        // VALIDAÇÃO DO EMAIL
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Por favor, preencha seu email.';
            emailInput.classList.add('error');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Por favor, insira um email válido.';
            emailInput.classList.add('error');
            isValid = false;
        }

        // Se a validação falhar, previne o envio do formulário
        if (!isValid) {
            event.preventDefault();
        }
    });

