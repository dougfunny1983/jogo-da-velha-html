const x = "<img src='/imagem/xis.PNG' alt='X' />";
const bola = "<img src='/imagem/bola.PNG' alt='O' />";
const jogador = document.querySelector('.jogador');
let contador = 0;
const jogadasFeitas = ['', '', '', '', '', '', '', '', ''];
const quemJoga = (number) => {
  if (contador % 2 == 0) {
    jogadasFeitas[number] = x;
  } else {
    jogadasFeitas[number] = bola;
  }
};

function jogar(number) {
  contador += 1;
  const cases = {
    1: quemJoga(number),
    2: quemJoga(number),
    3: quemJoga(number),
    4: quemJoga(number),
    5: quemJoga(number),
    6: quemJoga(number),
    7: quemJoga(number),
    8: quemJoga(number),
    9: quemJoga(number),
  };

  return cases[number];
}
