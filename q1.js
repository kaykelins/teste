const readline = require('readline');


//interação com o usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//processmaneto de entrada
rl.question('Insira um valor: ', (valor) => {

//validação de entrada
const validade =  valor < 100000000 ? (entrada = digitos(valor)) : (entrada = digitos(0), console.log('valor invalido'));

//função de conversão do valor de entrada de um inteiro para array
function digitos(n) {
  return Array.from(String(n), Number);
}

//função para adicionar membro a familia de acordo com a permuta dos valores que fazem parte da entrada
//heap's method
function permuta(familia) {
    const tamanho = familia.length;
    const membro = [familia.slice()];
    const c = new Array(tamanho).fill(0);
    var i = 1, k, p;
  
    while (i < tamanho) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = familia[i];
        familia[i] = familia[k];
        familia[k] = p;
        ++c[i];
        i = 1;
        membro.push(familia.slice());
      } else {
        c[i] = 0;
        ++i;
      }
    }
    return membro;
  }

//ordenar a familia
const ordem = permuta(entrada).sort();

//definição do maior valor possivel na familia
const maior = permuta(entrada).length - 1;

//conversões para inteiros
const resultado = ordem[maior].join("");
const conversao= parseInt(resultado, 10); 

//composiçãi de resposta da cl
const inicio =  'valor fornecido:' + valor;
const msg = 'naior valor possivel: ' + conversao;

console.log(inicio);

saida = conversao == 0 ? console.log('saida: -1'): console.log(msg);

  rl.close();
});