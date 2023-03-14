// // let array = [1, 2, 3];

// // console.log(array.includes(1));
// // console.log(array.includes(4));
// // console.log(array.includes(2,3));


// // const categorias = ["eletrônicos", "livros", "vestuário", "alimentos"];

// // const produtoDoCliente = "livros";

// // if (categorias.includes(produtoDoCliente)) {
// //   console.log("Produto está disponível para venda.");
// // } else {
// //   console.log("Produto não está disponível para venda.");
// // }

// // const array1 = [1, 2, 3];

// // console.log(array1.includes(2));
// // // Retorno esperado = true

// // const pets = ['cat', 'dog', 'bat'];

// // console.log(pets.includes('cat'));
// // // Retorno esperado = true

// // console.log(pets.includes('at'));
// // Retorno esperado = false

// const frase = 'O JavaScript é uma linguagem de programação incrível!';

// console.log(frase.includes('JavaScript')); // retorna true
// console.log(frase.includes('Python')); // retorna false

const senhaInput = document.getElementById('senha');
const verificarBtn = document.getElementById('verificar');
const resultado = document.getElementById('resultado');

function verificarSenha() {
  event.preventDefault();

  const senha = senhaInput.value;
  
  if (senha.length < 8) {
    resultado.innerHTML = 'A senha deve ter pelo menos 8 caracteres.';
  } else if (!senha.includes('@') && !senha.includes('#') && !senha.includes('$') && !senha.includes('%')) {
    resultado.innerHTML = 'A senha deve conter pelo menos um dos seguintes caracteres especiais: @, #, $, %.';
  } else {
    resultado.innerHTML = 'A senha atende aos critérios de segurança.';
  }
}

verificarBtn.addEventListener('click', verificarSenha);


