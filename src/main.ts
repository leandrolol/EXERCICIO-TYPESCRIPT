function multiplicacao(numero1: number = 10, numero2: number = 10): number {
    return numero1 * numero2;
}

function saudacao(nome: string = 'Leandro'): string {
    return `Olá ${nome}`;
}

console.log(multiplicacao());
console.log(saudacao());