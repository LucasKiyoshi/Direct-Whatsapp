function redirectToWhatsApp() {
    // @ts-ignore
    var celular = document.getElementById('number').value;
    // @ts-ignore
    var mensagem = document.getElementById('message').value;

    // @ts-ignore
    if (celular !== '' && mensagem !== '') {
        mensagem = mensagem.replace(/(\r\n|\n|\r)/g, '%0A');
        mensagem = mensagem.replace(/\s/g, '%20');
        var url = 'https://api.whatsapp.com/send?phone=' + celular + '&text=' + mensagem;
        window.open(url);
    } else {
        alert('Por favor, preencha o número de telefone e a mensagem corretamente.');
    }
}