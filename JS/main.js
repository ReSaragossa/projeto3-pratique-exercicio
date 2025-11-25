$(document).ready(function(){                                                                                            //aqui estamos chamando a classe que foi criada na DIV do menu acima - linha 45
    $('#carousel-imagens').slick({                                                                                       //nessa linha adicionamos funções ao carrossel, como remover setas, ou ligar o autoplay           
        autoplay: true,              
    })

    $('.menu-hamburguer').click(function() {                                                                              //essa função faz com que o menu apareça ao CLICK - foi colocado display: none; - no CSS na seção de NAV
        $('nav').slideToggle(); 
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(  )      -    '
    });

    $('form').validate ({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Insira seu nome aqui'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})    