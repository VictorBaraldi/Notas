// Durante a desestruturação de objetos, podemos indicar o tipo de dado com a sintaxe: { key1, key2 }: { key1: type1; key2: type2; }
const { body }: { body: HTMLElement } = document;

interface Produto {
  nome: string;
  preco?: number;
}

function handleData({ nome, preco }: Produto) {
  console.log(nome);
  console.log(preco);
}

handleData({
  nome: 'notebook',
  preco: 2000,
});

// Conhecer dados - durante a desestruturação é necessário indicar o tipo exato do dado esperado pelo TS, ex currentTarget pode ser eventTarget | null
function handleCLick1({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  if (currentTarget instanceof HTMLElement) {
    console.log(currentTarget.innerHTML);
  }
  console.log(pageX);
}

function handleCLick({ currentTarget, pageX }: MouseEvent) {
  //pode declarar o grupo, apesar que se for evento de outro tipo da erro
  if (currentTarget instanceof HTMLElement) {
    console.log(currentTarget.innerHTML);
  }
  console.log(pageX);
}

document.documentElement.addEventListener('click', handleCLick);

//...rest - O operador ...rest retorna uma Array.
function comparar(tipo: string, ...numeros: number[]) {
  if (tipo === 'maior') {
    return Math.max(...numeros);
  }
  if (tipo === 'menor') {
    return Math.min(...numeros);
  }
}

console.log(comparar('maior', 3, 2, 4, 30, 5, 6, 20));
