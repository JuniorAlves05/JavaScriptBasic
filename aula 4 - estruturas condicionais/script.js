var jogador1 = 1;
var jogador2 = 0
var placar = 0

//jogador1≠ -1 &&jogador2 ≠ -1 ? console.log('Os jogadores são válidos') : 
//console.log ('Jogadores Inválidos');



if (jogador1  > 0 && jogador2 ==0) {
    console.log('Jogador 1 marcou ponto');
    placar =jogador1 > jogador2;

}else if ( jogador2 > 0 && jogador1==0 ){
    console.log('Jogador 2 marcou ponto');
    placar= jogador2 > jogador1;

}else {
    console.log('Ninguem marcou ponto');
}

switch ( placar ){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou')
        brake;
    case placar = jogador2 < jogador1:
        console.log('jogador 2 ganhou');
        brake;
        default:
        console.log('Ninguém ganhou');

}
