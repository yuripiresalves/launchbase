///// Cálculo de IMC

// const nome = "Carlos";
// const peso = 84;
// const altura = 1.88;
// const sexo = 'M';

// const imc = peso / (altura * altura);

// if (imc >= 30) {
//     console.log(`${nome} você está acima do peso`)
// } else {
//     console.log(`${nome} você não está acima do peso`)
// }

///// Cálculo de aposentadoria

const nome = "Yu";
const sexo = "M";
const idade = 30;
const contribuicao = 45;

const regra = idade + contribuicao


if (sexo === 'F' && contribuicao >= 30 && regra >= 85 && idade > contribuicao) {
    console.log(`${nome}, você pode se aposentar! `)
} else if (sexo === 'M' && contribuicao >= 35 && regra >= 95 && idade > contribuicao) {
    console.log(`${nome}, você pode se aposentar! `)
} else {
    console.log(`${nome}, você ainda não pode se aposentar! `)
}