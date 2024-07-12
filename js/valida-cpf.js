export default function ehUmCpf(campo){
    const cpf = campo.value.replace("");
    validaNumerosRepitidos(cpf);
    validaPrimeiroDigito(cpf);
}

function validaNumerosRepitidos(cpf){
    const numerosRepitidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepitidos.includes(cpf);
}

function validaPrimeiroDigito(cpf){
    let soma = 0;
    let multiplicador = 10;

    for(let i =0;i<9;i++){
        soma+= cpf[i] * multiplicador;
        multiplicador--;
    }

    if(soma * 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[9];
}