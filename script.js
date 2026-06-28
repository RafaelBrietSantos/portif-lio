// aluno: Rafael Briet dos Santos - ru: 5479450

// escuta quando a pagina carrega pra poder mexer no form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContato');

    if (form) {
        form.addEventListener('submit', function(event) {
            // nao deixa a pagina dar refresh qnd clica no botao
            event.preventDefault();

            // pegando os textos q o usuario digitou e tirando os espacos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // teste basico pra ver se ta vazio
            if (nome === '' || email === '' || mensagem === '') {
                alert('preenche todos os campos ai');
                return;
            }

            // mostra q enviou
            alert(`valeu ${nome}! mensagem enviada com sucesso.`);
            
            // limpa os campos dps de enviar
            form.reset();
        });
    }
});