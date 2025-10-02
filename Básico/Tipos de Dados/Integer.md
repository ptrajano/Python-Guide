Para gerar um número inteiro em `python`, basta escrever o número e não colocar o separador de casas decimais (`.`), que indica um [[Float | float]], além disso para transformar uma [[String | string]] em inteiro, basta usar a função (LINK LINK LINK) `int`.

```python
var = '10'

num_var = int(var)
print(type(num_var))
```

# Operações

As operações que são possíveis usar com números inteiros são as aritméticas, bitwise, e de comparações. As aritméticas e de comparações são as mesmas apresentadas no [[Float | float]]. Dessa forma, vamos apresentar a bitwise apenas.

## Operações Bitwise

Operações bitwise, são operações que são feitas diretamente nos bits. Um fato legal de se comentar é que essas operações são mais rápidas que as aritméticas, pois conversam diretamente com o computador.

### `and`

Essa operação representa o operador lógico "e" que é feito em cada bit.


| $S_0$ | $S_1$ | Output |
| ----- | ----- | ------ |
| 0     | 0     | 0      |
| 0     | 1     | 0      |
| 1     | 0     | 0      |
| 1     | 1     | 1      |

Os bits ($S_0$ e $S_1$), podem apenas ter os estados $0$ e $1$, e eles seguem a lógica de se as duas coisas forem verdades ($1$), então a saída também é verdade, por exemplo, se meu nome for Pedro, e tiver 23 anos, então a frase "Meu nome é Pedro e tenho 23 anos" é verdade (1), mas se eu falar "Meu nome é João e eu tenho 23 anos" a frase é falsa (0), pois meu nome não é João.

Para fazer essa operação utiliza-se o simbolo `&`.

```python
num_01 = 11 # 1011
num_02 = 13 # 1101

print(num_01 & num_02) # 1011 & 1101 = 1001 (9)
```

### `or`

Essa operação representa o operador lógico "ou" que é feito bit a bit

| $S_0$ | $S_1$ | Output |
| ----- | ----- | ------ |
| 0     | 0     | 0      |
| 0     | 1     | 1      |
| 1     | 0     | 1      |
| 1     | 1     | 1      |

Os bits ($S_0$ e $S_1$), podem apenas ter os estados $0$ e $1$, e eles seguem a lógica de se pelo menos uma coisa for verdade ($1$), então a saída também é verdade, por exemplo, se meu nome for Pedro, e tiver 23 anos, então a frase "Meu nome é Pedro ou João" é verdade (1), mas se eu falar "Meu nome é João ou Guilherme" a frase é falsa (0), pois meu nome não é nenhum dos dois.

Para fazer essa operação utiliza-se o simbolo `|`.

```python
num_01 = 11 # 1011
num_02 = 13 # 1101

print(num_01 | num_02) # 1011 & 1101 = 1111 (15)
```

### `XOR`


Essa operação representa o operador lógico "exclusivo ou" que é feito bit a bit

| $S_0$ | $S_1$ | Output |
| ----- | ----- | ------ |
| 0     | 0     | 0      |
| 0     | 1     | 1      |
| 1     | 0     | 1      |
| 1     | 1     | 0      |

Esse operador indica que apenas uma das afirmações é verdades, se as duas foram, então não será verdade.

Para fazer essa operação utiliza-se o simbolo `^`.

```python
num_01 = 11 # 1011
num_02 = 13 # 1101

print(num_01 ^ num_02) # 1011 & 1101 = 0110 (6)
```

### `not`

Essa operação representa o inverso de um bit, ou seja se ele for verdade a saída será falso, e se for falso ela será verdadeira.

| $S_0$ | Output |
| ----- | ------ |
| 0     | 1      |
| 1     | 0      |

Para entender o funcionamento, basta pensar que se meu nome for Pedro, e eu falar "Meu nome não é Pedro", a frase é falsa, mas se eu falar "Meu nome não é João", a frase é verdadeira.

Para fazer essa operação utiliza-se o simbolo `~`

```python
num_01 = 11 # 1011

print(~num_01) # ~01011 = 10100 (-12)
```

Essa precisa de um pouco mais de cuidado para entender, o que acontece, é que pelo o inteiro ter sinal, a sua forma de representação é diferente, isso foge um pouco do escopo, mas é importante dar uma lida em [representação de inteiros com sinais](https://en.wikipedia.org/wiki/Signed_number_representations). Mas resumindo, o primeiro bit de um número simboliza o sinal, mas como existe o 0, e o $-0$ tem o mesmo valor que o $0$, então para não perder um espaço de memória para dois números iguais, subtrai um se o número for negativo. Isso acontece em todas as operações bitwise.

### `Shift's`

Essa operação modifica a posição de todos os bits na quantidade de casa que foi indicada, podendo ser para a direita (`>>`), ou para a esquerda (`<<`). Essa operação tem dois parâmetros, $x << y$, o $x$ é o número que vai receber o shift, já o $y$ é a quantidade de casas que vai se movimentar

```python
num_01 = 15 # 0001111
print(num_01 >> 2) # 0000011 (3)
print(num_01 << 3) # 1111000 (120)   
```

Se estiver sendo feito o shift para  a direita (`>>`) assume que todo bit que não está aparecendo é um zero. É importante comentar que essa operação nos inteiros, funciona como um dividir e multiplicar por $2$, só que a divisão é uma divisão por inteiro (LINK LINK LINK), e como as operações são bitwise elas são mais rápidas, então, se for pensar em tempo de código, é melhor usar operadores bit a bit do que usar a multiplicação e a divisão por inteiro.  

# Métodos Nativos

Os métodos nativos são chamados a partir do próprio objeto a explicação mais a fundo disso é apresentada em classe (LINK LINK LINK), e mais especificamente em objetos (LINK LINK LINK)

## `as_integer_ratio`

Esse método é feita para que [[Float#`as_integer_ratio`|floats]] e os inteiros tenham métodos semelhantes, o intuito dele é gerar a fração mínima que representa o número. Como estamos trabalhando com inteiro, o seu output será uma [[Tupla]], e será o número seguido por $1$

```python
num = 10
print(num.as_integer_ratio())
```

## `bit_count`

Esse método retorna a quantidade de bits que são iguais a $1$, sem contar o bit do sinal

```python
num = 10
print(num.bit_count())
```

## `bit_length`

Esse método retorna a quantidade de bits mínima necessárias para representar o número

```python
num = 100
print(num.bit_length())
```
## `conjugate`

Esse método é feito para que [[Complex#`conjugate`|complexos]] e [[Float#`conjugate`|float]], tenham os mesmos métodos, ele retorna o conjugado do número complexo, portanto, neste caso retorna $0$

```python
num = 10
print(num.conjugate())
```


## `denominator`

Este método, novamente é feito para retornar o denominador da fração que menor representa o número, dessa forma ela sempre vai retornar 1

```python
num = 10
print(num.denominator)
```

Além disso, isso não é chamável, ele é como se fosse um atributo (LINK LINK LINK), mas na prática é um [descriptor](https://docs.python.org/3/howto/descriptor.html) . Minha opinião é que ou esse descriptor deveria existir em [[Float|float]] e [[Complex|comples]], ou não deveria existir, pois não faz sentido o jeito que ta implementado.
## `from_bytes`

Transforma objetos de [[Bytes]] para inteiros, é importante ressaltar que muito provavelmente isso daqui deveria ser uma função ao invés de um método, pois o método retorna o valor, portanto conseguimos usar de duas formas

```python
	print(int.from_bytes(b'\x14'))
	
	num = 10
	print(num.from_bytes(b'\x14'))
	print(num)
```


## `imag`

Esse método é criado para ter o mesmo comportamento do [[Complex#`imag`|complexo]], mas aqui seu atributo sempre será $0$

```python
num = 10
print(num.imag)
```

## `is_integer`

Este método é criado para ter o mesmo comportamento do [[Float#`is_integer`|float]], aqui ele sempre retorna [[Palavras Restritas#True|True]].

```python
num = 10
print(num.is_integer())
```

## `numerator`

Parecido com o [[#`denominator`|denominator]], mas aqui é o numerador, então sempre será o próprio número


```python
num = 10
print(num.numerator)
```

## `real`

Esse método existe para ter o mesmo comportamento do [[Complex#`real`|complexo]], aqui, novamente, seu comportamento é o próprio número

```python
num = 10
print(num.real)
```

## `to_bytes`

Transforma um número em um objeto [[Bytes|byte]].

```python
num = 10
print(num.to_bytes())
```
