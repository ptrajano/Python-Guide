- [[Classes]]
- [[Variáveis Privadas]]
- [[Herança e Composição]]
- [[Dunder]] 
- [[MetaClasse]]
- [[Python e Objetos]]
## Exercícios Básicos (tirados de [beecrowd](https://judge.beecrowd.com))

### Exercício 01
  
Pedrinho está organizando um evento em sua Universidade. O evento deverá ser no mês de Abril, iniciando e terminando dentro do mês. O problema é que Pedrinho quer calcular o tempo que o evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento.

Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.

#### Entrada

Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar. Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato **hh : mm : ss**. Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.

#### Saída

Na saída, deve ser apresentada a duração do evento, no seguinte formato:  
  
W dia(s)  
X hora(s)  
Y minuto(s)  
Z segundo(s)

| Exemplo de Entrada                                   | Exemplo de Saída                                            |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| Dia 5  <br>08 : 12 : 23  <br>Dia 9  <br>06 : 13 : 23 | 3 dia(s)  <br>22 hora(s)  <br>1 minuto(s)  <br>0 segundo(s) |

## Exercício 02

Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:

![](https://resources.beecrowd.com/gallery/images/problems/UOJ_1050.png)

Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:  
DDD nao cadastrado

#### Entrada

A entrada consiste de um único valor inteiro.

#### Saída

Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima _DDD nao cadastrado_ caso não existir DDD correspondente ao número digitado.

|Exemplo de Entrada|Exemplo de Saída|
|---|---|
|11|Sao Paulo|

## Exercício 03

Leia 2 valores inteiros **X** e **Y**. A seguir, calcule e mostre a soma dos números impares entre eles.

## Entrada

O arquivo de entrada contém dois valores inteiros.

## Saída

O programa deve imprimir um valor inteiro. Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.

| Exemplo de Entrada | Exemplo de Saída |
| ------------------ | ---------------- |
| 6  <br>-5          | 5                |
| 15 <br>12          | 13               |
| 12 <br>12          | 0                |

## Exercício 04

Escreva um programa que leia um valor inteiro N (1 < N < 1000). Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

#### Entrada

O arquivo de entrada contém um número inteiro positivo N.

#### Saída

Imprima a saída conforme o exemplo fornecido.

|Exemplo de Entrada|Exemplo de Saída|
|---|---|
|5|1 1 1  <br>2 4 8  <br>3 9 27  <br>4 16 64  <br>5 25 125|

## Exercício 05

Escreva um algoritmo que leia um inteiro N (0 ≤ N ≤ 100), correspondente a ordem de uma matriz M de inteiros, e construa a matriz de acordo com o exemplo abaixo.

#### Entrada

A entrada consiste de vários inteiros, um valor por linha, correspondentes as ordens das matrizes a serem construídas. O final da entrada é marcado por um valor de ordem igual a zero (0).

#### Saída

Para cada inteiro da entrada imprima a matriz correspondente, de acordo com o exemplo. (os valores das matrizes devem ser formatados em um campo de tamanho 3 justificados à direita e separados por espaço. Após o último caractere de cada linha da matriz não deve haver espaços em branco. Após a impressão de cada matriz deve ser deixada uma linha em branco.

|Exemplo de Entrada|Exemplo de Saída|
|---|---|
|1  <br>2  <br>3  <br>4  <br>5  <br>0|1  <br>  <br>  1   2  <br>  2   1  <br>  <br>  1   2   3  <br>  2   1   2  <br>  3   2   1  <br>  <br>  1   2   3   4  <br>  2   1   2   3  <br>  3   2   1   2  <br>  4   3   2   1  <br>  <br>  1   2   3   4   5  <br>  2   1   2   3   4  <br>  3   2   1   2   3  <br>  4   3   2   1   2  <br>  5   4   3   2   1|

## Exercícios Avançados

#### Exercício 01

Crie uma classe que implemente os números complexos e suas operações básicas (`+`, `-`, `*`, `/`) e seu conjugado.

#### Exercício 02

Implemente uma classe que representa os números racionais (`p/q`), seus parâmetros de entrada  são o `p` e o `q`, implemente as operações (sem usar de operações de `float`), trabalhando apenas com números inteiros, além disso essa fração sempre tem que ser representada como sua fração irredutível (`1/2` ao invés de `2/4`).

#### Exercício 03

Implemente um sistema hierárquico de gerenciamento de funcionários com os seguintes níveis de permissão:

### Funcionários
- **Todos os funcionários** podem:
    - Adicionar tarefas à sua lista pessoal
    - Remover tarefas da sua lista pessoal
- Funcionários tem:
	- Nome
	- Idade
	- Salário
### Gerentes

- **Gerentes** podem:
    - Adicionar funcionários à sua equipe
    - Remover funcionários da sua equipe
    - Checar os funcionários da empresa

### Diretor

- **Diretor** (só pode ter um) pode:
    - Contratar funcionários (todos)
    - Demitir funcionários (todos)

### Empresa
- **Empresa** (Única) conterá:
	- Lista de todos os funcionários 

### Pontos a Considerar
- Hierarquia deve respeitar que cargos superiores devem herdar as permissões dos cargos inferiores
- Pense em como demitir funcionários afeta em equipes (funcionários simples e gerentes)
- Como fazer ter apenas um diretor