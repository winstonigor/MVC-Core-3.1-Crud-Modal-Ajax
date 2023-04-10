//Create / Enviar
$(function () {
    $('#meuFormulario').submit(function (e) {
        e.preventDefault(); // previne a submissão tradicional do formulário

        var form = $(this); // guarda uma referência ao formulário
        var url = form.attr('action'); // obtém a URL da ação do controlador

        $.ajax({
            type: 'POST',
            url: url,
            data: form.serialize(), // serializa os dados do formulário em formato JSON
            success: function (data) {
                // aqui você pode atualizar a página ou fazer alguma outra ação
                // fecha a modal e limpa os campos do formulário
                $('#modalUsuario').modal('hide');
                form[0].reset();

                // exibe a mensagem de sucesso
                //$('.alert-success').show();

                // exibe o toast de sucesso
                //toastr.success('Formulário enviado com sucesso!', 'Sucesso!', { timeOut: 3000 });
                toastr.success('Formulário enviado com sucesso!');

                // redireciona para a home após alguns segundos
                setTimeout(function () {
                    window.location.href = '/';
                }, 3000); // espera 3 segundos antes de redirecionar

                console.log(data);
            },
            error: function (xhr, status, error) {
                // aqui você trata o erro de validação retornado pela ação do controlador
                var errors = xhr.responseJSON.errors; // obtém os erros de validação em formato JSON

                // remove as mensagens de erro antigas
                $('.text-danger').text('');

                // exibe as mensagens de erro na página
                $.each(errors, function (key, value) {
                    var selector = '[name="' + key + '"]';
                    var validationMsg = value.join('<br>');
                    $(selector).siblings('.text-danger').html(validationMsg);
                });
            }
        });
    });
});

//Editar/Abrir modal carregada
$(document).on("click", ".edit-product", function () {
    var id = $(this).data("id");

    $.get("/Usuarios/Edit/" + id)

        //se a chamada tiver um retorno ok
        .done(function (data) {
            $("#CarregaFormEditUsuario").html(data);
            $("#editUsuarioModal").modal("show");
        })
            //xhr contém a resposta completa do servidor,
            //status contém o código de status HTTP da resposta 
            //e error contém a descrição do erro
        .fail(function (xhr, status, error) {
            console.error(error);
            // Exibe o erro no console do navegador
            // Lógica de tratamento de erro aqui, como exibir uma mensagem de erro ao usuário

            toastr.error('Id não informado!');
        });
});

//Editar Salvar
$(document).on("submit", "#editUsuarioForm", function (e) {
    e.preventDefault();

    var form = $(this); // guarda uma referência ao formulário
    // Serializa os dados do formulário
    var formData = $(this).serialize();
    var url = form.attr('action'); // obtém a URL da ação do controlador

    $.ajax({
        type: "POST",
        url: url,
        data: formData,
        success: function (data) {
            // Lógica de sucesso, se necessário
            $("#editUsuarioModal").modal("hide");
        },
        error: function (xhr, status, error) {
            // aqui você trata o erro de validação retornado pela ação do controlador
            var errors = xhr.responseJSON.errors; // obtém os erros de validação em formato JSON

            // remove as mensagens de erro antigas
            $('.text-danger').text('');

            // exibe as mensagens de erro na página
            $.each(errors, function (key, value) {
                var selector = '[name="' + key + '"]';
                var validationMsg = value.join('<br>');
                $(selector).siblings('.text-danger').html(validationMsg);
            });
        }
    });
});