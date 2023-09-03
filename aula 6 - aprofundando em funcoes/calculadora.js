function calculadora() {
    const operacao = Number(prompt("Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtracao (-)\n 3 - Multiplicacao (*)\n 4 - Divisao Real (/) \n 5 - Divisao Inteira(%)\n 6 - Potenciacao (**)"));
    console.log(operacao);

    if (!operacao || operacao >= 7){
        alert ('Erro - Operacao Invalida');
        calculadora;
    } else{}

    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    if(!n1 || n2 ){
        alert ('Erro - parametros invalidos ')    
        calculadora();

    }else {

    function soma(n1, n2) {
        const resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
    }

    function subtracao(n1, n2) {
        const resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
    }

    function multiplicacao(n1, n2) {
        const resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
    }

    function divisaoReal(n1, n2) {
        const resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
    }

    function divisaoInteira(n1, n2) {
        const resultado = n1 % n2;
        alert(`O Resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
    }

    function potenciacao(n1, n2) {
        const resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operacao ? \n 1-Sim \n 2-Nao');

        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2) {
            alert('Até mais');
        } else {
            alert('Digite uma opcao válida !');
            novaOperacao();
        }
    }
}

    if (operacao == 1) {
        soma(n1, n2);
    } else if (operacao == 2) {
        subtracao(n1, n2);
    } else if (operacao == 3) {
        multiplicacao(n1, n2);
    } else if (operacao == 4) {
        divisaoReal(n1, n2);
    } else if (operacao == 5) {
        divisaoInteira(n1, n2);
    } else if (operacao == 6) {
        potenciacao(n1, n2);
    }
}

calculadora();
