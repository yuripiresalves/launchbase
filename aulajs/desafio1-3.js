//----------------------------------------------- LINK DO DESAFIO NO GITHUB --------------------------------------------------//
// https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-3-funcoes-e-estruturas-de-repeticao.md
//------------------------------------------------------------------------------------------------------------------------------//

// const usuarios = [
//     { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//     { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//     { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ];

// for (let i = 0; i < usuarios.length; i++) {
//     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}`)
// }

//-------------------------------------------------------------------------------------//

// const usuarios = [
//     { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//     { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//     { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ];


// function checaSeUsuarioUsaCSS(usuario) {
//     // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
//     for (let i = 0; i < usuario.tecnologias.length; i++) {
//         // SE encontrar, retorne true da função, caso contrário retorne false
//         if (usuario.tecnologias[i] === "CSS") return true
//     }
// }

// for (let i = 0; i < usuarios.length; i++) {
//     const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

//     if (usuarioTrabalhaComCSS) {
//       console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
//     }
//   }

//-------------------------------------------------------------------------------------------//

const usuarios = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

function calculaSaldo(receitas, despesas) {
    const somaR = somaNumeros(receitas)
    const somaD = somaNumeros(despesas)

    return somaR - somaD
}

function somaNumeros(numeros) {
    // Soma todos números dentro do array "numeros"
    let soma = 0
    for (numero of numeros) {
        soma += numero
    }
    return soma
}

for (usuario of usuarios) {
    let saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo >= 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}