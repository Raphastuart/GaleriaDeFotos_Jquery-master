$(document).ready(function () {

    $('header button').click(function () {
        $('form').slideDown();
    })
    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) { // functiona callback igual ao javascript umas function que passa como paramentro outra function
        e.preventDefault();
        const enderecoDaNovaImagem = $("#endereco-imagem-nova").val(); // val == value
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src='${enderecoDaNovaImagem}' alt="imagem de um gato" />`).appendTo(novoItem); // ele pega o enderecoDaNovaImagem e insere
        // dentro do novoItem no caso ali dentro da <li> </li>
        $(
            `<div class = "overlay-imagem-link">
                <a href = "${enderecoDaNovaImagem}" target = "_blank">
                ver a imagem em tamanho real
                </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $("endereco-imagem-nova").val('');
    })
})
