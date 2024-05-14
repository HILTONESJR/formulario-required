export default function ehumCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");

    if (validaNumeroRepetidos(cpf) || verificaPrimeiroDigito(cpf) || verificaSegundoDigito(cpf)) {
     campo.setCustomValidity ('Esse CPF não Existe!');
}
}

function validaNumeroRepetidos(cpf) {
    const numerosRepetidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ];
    return numerosRepetidos.includes(cpf);
}

function verificaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    return soma != cpf[9];
}

function verificaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    return soma != cpf[10];
}
