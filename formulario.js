function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
$(function()
{
    $("#datepicker").datepicker();
});

$("#btRegistrar").mouseover(function () {
    $("#btRegistrar").css("background-color", "blue");
});
$("#btRegistrar").mouseleave(function () {
    $("#btRegistrar").css("background-color", "green");
});
$("#btRegistrar").mousedown(function () {
    $("#btRegistrar").css("background-color", "green");
});
$("#btRegistrar").mouseup(function () {
    $("#btRegistrar").css("background-color", "blue");
});
$("#btRegistrar").click(function () {
    var MensagemErro = "";
    var CampoFaltando = "";
    if ($("#Senha").val() == "") {
        CampoFaltando += "A Senha está faltando. \n";
    }
    if ($("#ConfirmeSenha").val() == "") {
        CampoFaltando += "A confirmação da Senha está faltando. \n";
    }

    if (validateEmail($("#Email").val()) == false) {
        MensagemErro += "O endereço de email não é valido! \n";
    }
    if ($.isNumeric($("#Telefone").val()) == false) {
        MensagemErro += "O telefone não é Válido! \n";
    }
    if ($("#Senha").val() != $("#ConfirmeSenha").val() && $("#Senha").val() != "" && $("#ConfirmeSenha").val() != "") {
        MensagemErro += "As senhas são diferentes \n";
    }
    if (MensagemErro != "" || CampoFaltando != "") {
        alert(MensagemErro + CampoFaltando);
    } else {
        alert("Registrado com sucesso para receber 1000 imagens contragedoras \n" +
              "de pessoas aleatórias! ");
    }
});
