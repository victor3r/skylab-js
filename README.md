<h1 align="center">
<br>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/200px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" width="120">
<br>
<br>
JavaScript
</h1>

---

## O que é

É uma linguagem que permite executar **scripts** interpretado apartir do **cliente** da nossa aplicação (o cliente para aplicações web é o navegador).

As nossas requisições não precisam chegar no servidor (seja, Python, Ruby, Java, etc...) para responder as nossas requisições.

## Aplicações

- Websites
- Jogos
- Aplicações mobile e desktop
- Inteligência artificial, e muito mais...

## Back-end e Front-end

Back-end: Onde roda a nossa aplicação no servidor

Front-end: Tudo o que usuário consigo visualizar

## Conteúdo

- Variáveis
- Funções
- Condicionais
- Estrutura de repetição
- Requisições assíncronas

---

## Variáveis

> Responsável por armazenar algum tipo de dado/valor. As variáveis do JS são sem tipagem estática (não precisa definir o tipo de valor da variável)

São definidas com a palavra **var**

```js
var nome = "Victor";
nome = 2; // com o var podemos repassar um novo
```

Os principais tipos de variáveis são:

- String (conjunto de carácteres):

```js
var nome = "Hello";
```

- Int (valor inteiro):

```js
var idade = 16;
```

- Float (valor decimal):

```js
var peso = 56.6;
```

- Boolean (true/false):

```js
var human = true;
```

- Vectors (variável que armazena mais de um valor):

```js
var alunos = ["Victor", "Bill", "Steve"];
```

- Objects (variável que guarda todos os valores referentes a um objecto):

```js
var aluno = {
  nome: "Diego",
  idade: 23,
  peso: 80.5,
  humano: true,
};

console.log(alunos);
```

onde:

**console.log()** é uma função global que deixa escrever no depurador de desenvolvedor (Console)

---

## Operações Matemáticas

Para poder fazer operações matemáticas tem que estar a trabalhar com número.

- Multiplicação ( \* )

```js
var x = 10,
  y = 5;

var resultado = x * y;

console.log(resultado);
```

- Soma ( \+ )

```js
var x = 10,
  y = 5;

var resultado = x + y;

console.log(resultado);
```

- Divisão ( \/ )

```js
var x = 10,
  y = 5;

var resultado = x / y;

console.log(resultado);
```

- Subtração ( \- )

```js
var x = 10,
  y = 5;

var resultado = x - y;

console.log(resultado);
```

- Module ( \% resto de uma divisão )

```js
var x = 10,
  y = 5;

var resultado = x + y;

console.log(resultado);
```

Calcular algum valor da mesma variável

```js
var x = 0;
x = x + 3;

// Mais fácil
x += 3;
```

---

## Funções

Uma função (function) é um fragmento de código que pode ser invocado por outro código, por si mesmo ou uma variável que se refere à função. Quando uma função é invocada, o argumento é passado para a função como input (entrada) e a função pode opcionalmente retornar um output (saída). Uma função em JavaScript também é um objeto.

O nome da função é um identificador declarado como parte de uma declaração de função ou expressão de função. O nome da função escopo depende se o nome da função é uma declaração ou expressão.

```js
function soma(numero1, numero2) {
  var resultado = numero1 + numero2;

  return resultado;
}

var resultado = soma(1, 2);
console.log(resultado);
```

---

## Condicionais

Uma expressão (premissa) que pode ser avaliada como verdadeira (true) ou falsa (false), veja lógica de programação para entender melhor.

### if

A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else

```js
function retornaSexo(sexo) {
  // M, F
  // Masculino, Feminino

  if (sexo === "M") {
    return "Masculino";
  } else if (sexo === "F") {
    return "Feminino";
  } else {
    return "Outro";
  }
}

var resultado = retornaSexo("M");
console.log(resultado);
```

### Switch

A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case.

```js
function retornaSexo(sexo) {
  switch (sexo) {
    case "M":
      return "Masculino";
    case "F":
      return "Feminino";
    default:
      return "Outro";
  }
}

var resultado = retornaSexo("M");
console.log(resultado);
```

---

## Operadores lógicos

Operadores lógicos são tipicamente usados com valores Booleanos (lógicos). Quando eles o são, retornam um valor booleano. Porém, os operadores && e || de fato retornam o valor de um dos operandos especificos, então se esses operadores são usados com valores não booleanos, eles podem retornar um valor não booleano.

### Logical AND (&&)

ex:

```js
if (expr1 && expr2) {
}
```

> Retorna expr1 se essa pode ser convertido para falso; senão, retorna expr2. Dessa forma, quando usado para valores Booleanos, && retorna verdadeiro se ambos os operandos forem verdadeiro ; senão, retorna falso.

### Logical OR (||)

ex:

```js
if (expr1 || expr2) {
}
```

> Retorna expr1 se essa pode ser convertido para verdadeiro; senão, retorna expr2. Dessa forma, quando usado para valores Booleanos, || retorna verdadeiro se qualquer dos operandos for verdadeiro; se ambos são falso, retorna falso.

### Logical NOT (!)

ex:

```js
if (expr1 !== expr2) {
}
```

> Retorna falso se o seu operando pode ser convertido para verdadeiro; senão, retorna verdadeiro.

```js
// AND, OR, NOT

var sexo = "M",
  idade = 23;

var masculino;

if (sexo !== "M" && idade === 23) {
  masculino = false;
} else {
  masculino = true;
}

console.log(masculino);
```

---

## Condição ternária

```js
var sexo = 'M';

var retorno = (sexo === 'M') ? 'Masculino' : 'Feminino';
console.log(retorno)
```

onde:

**?** - equivale ao **if**
**:** - equivale ao **else**

---

## Laços e iterações

Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.

```js
var passo;
for (passo = 0; passo < 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 0 a 4.
  console.log('Ande um passo para o leste');
}
```

### Declaração for

Um laço for é repetido até que a condição especificada seja falsa. O laço for no JavaScript é similar ao Java e C. Uma declaração for é feita da seguinte maneira:

```
for ([expressaoInicial]; [condicao]; [incremento])
  declaracao
```

### Declaração while

Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira. Segue uma declaração ```while```:

```
while (condicao)
  declaracao
```
### Declaração for...of

 A declaração for...of cria uma laço com objetos interativos ((incluindo, ```Array```, ```Map```, ```Set```, assim por conseguinte ), executando uma iteração para o valor de cada propriedade distinta.
 
 ```
 for (variavel of objeto) {
  declaracoes
}
 ```
 
 ## Promises
 
 Começando com ECMAScript 6, JavaScript ganha suporte para objetos Promise que lhe permite controlar o fluxo de operações diferídas e assíncronas.
 
 Uma Promise assume um destes estados:
 
 * pending: estado inicial, não ```fulfilled```, ou ```rejected```.
 * fulfilled: operação bem sucedida.
 * rejected: operação falha.
 * settled: A Promise é fulfilled ou rejected, mas não pending.
 
 ### Carregando uma imagem com XHR
 
 Um exemplo simples usando Promise e ```XMLHttpRequest para carregar uma imagem disponível no repositório MDN GitHub``` promise-test.
 
```js
function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:' 
                     + request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error('There was a network error.'));
    };
    request.send();
  });
}
```
