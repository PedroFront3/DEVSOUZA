document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão para verificar o formulário

    if (this.checkValidity()) { // Verifica se todos os campos são válidos
        const alert = document.getElementById('successAlert');
        alert.style.display = 'block'; // Exibe a mensagem de sucesso
        alert.style.opacity = '1'; // Define a opacidade para aparecer

        setTimeout(() => {
            alert.style.opacity = '0'; // Define a opacidade para desaparecer gradualmente
            setTimeout(() => {
                alert.style.display = 'none';
            }, 500); // Oculta o alerta após a transição
        }, 3000); // Duração da exibição do alerta

        this.reset(); // Limpa o formulário
    } else {
        this.reportValidity(); // Exibe mensagens de erro para campos inválidos
    }
});