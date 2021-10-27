(function($){
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend( {
            mensagem: 'Em Breve!',
            horario: '23:59:59'
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora, minutoDezena, minutoUnidade, separadorMinuto, segundoDezena, segundoUnidade, mensagem )

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        //console.log(horarioAlvo)

        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setHours(horarioAlvo[2])
            alvo.setHours(horarioAlvo[3])

            const diferencaemMili = alvo.getTime() - agora.getTime()
            if (diferencaemMili >= 0) {
                const diferenca = regex.exec(new Date(diferencaemMili).toISOString())

                horaDezena.html(diferenca[1] [0])
                horaUnidade.html(diferenca[1] [1])
                minutoDezena.html(diferenca[2] [0])
                minutoUnidade.html(diferenca [2] [1])
                segundoDezena.html(diferenca [3] [0])
                segundoUnidade.html(diferenca [3] [1])
            } else {
                clearInterval(temporizador)
            }
        }, 1000)


        return this

    }
})(jQuery)