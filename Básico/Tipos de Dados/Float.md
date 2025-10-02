O `float` é a representação de um número real em `python`, não vamos entrar no assunto, mas é importante entender como que o número é salvo na memória, pois os números reais, em todas as linguagens de programação estão associadas a um erro de precisão, então a maior parte dos números vão ser um pouco diferente do número de verdade ([Representação dos números reais](https://en.wikipedia.org/wiki/IEEE_754)).  Para transformar uma [[String|string]] ou [[Integer|int]] para um número `float`.

```python
print(float(10))
print(float('10.52'))
```

# Operações

As operações que são possíveis usar com `floats` são as aritméticas e de comparações

## Operações Aritméticas

Como essas operações são iguais tanto para [[Integer|inteiros]] quanto para `floats`, aparecerá os dois, mas se form pensar de uma forma mais puritana, basta substituir o número inteiro por sua representação em `float`, por exemplo `10 = 10.0`. Além disso as operações aritméticas básicas ([[#Adição]], [[#Subtração]], [[#Multiplicação]], [[#Divisão]], [[#Exponenciação]]) não vão ser explicadas, pois são óbvias.

### Adição

```python
print(10.2 + 5.7)
```

### Subtração

```python
print(10.2 - 5.7)
```

### Multiplicação

```python
print(10.2 - 5.7)
```

### Divisão

```python
print(10.2 / 5.7)
```

### Exponenciação

```python
print(10.2 ** 5.7)
print(10 ** 2)
```

### Divisão Inteira 

Essa operação é representada por `\\`, ela pode ser pensada de duas formas, em primeiro lugar, pode ser pensada como o [chão](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions) de uma divisão, ou seja o maior inteiro menor que a divisão dos números, ou pode ser pensando de uma forma mais computacional que é, em linguagens mais [low level](https://en.wikipedia.org/wiki/Low-level_programming_language), se comparar com o `python` que é uma linguagem muito [high level](https://en.wikipedia.org/wiki/High-level_programming_language)o resultado de operações básicas normalmente retornam objetos do mesmo tipo, ou seja, uma divisão entre dois inteiros retornará um inteiro, mesmo que o resultado da sua divisão não é inteira, portanto fazendo a divisão bit a bit de um número inteiro, irá retornar o mesmo resultado da função chão.

```python
print(10.2//2.3)
```

### Módulo (Resto)

Essa operação é o resto da divisão por inteira, se os números forem inteiros, ou seja

```python
print(11 % 3) # 3 + 2/3 ou seja (10 % 3 = 2)
```

Para definir o resto para `floats` de uma forma relativamente simples é pensar que ao somar a divisão por inteiro dos números somado pelo resto e dividido pelo quociente da divisão por inteira tem que dar o resultado da divisão de verdade, acredito que isso fica claro vendo o seguinte

```python
num = 11
quo = 3

print(num / quo)

print(num // quo)

print(num % quo)

# num / quo = (num // quo) + (num % quo)/quo
```

## Operações de Comparação

Essas operações tem o intuito de falar se uma comparação é verdadeira ou falsa, ou seja ela sempre retornará um [[Boolean|booleano]].

### Igual que

```python
num_01 = 10
num_02 = 15

print(num_01 == num_02) # 10 não é igual a 15
```

### Diferente de

```python
num_01 = 10
num_02 = 15

print(num_01 != num_02) # 10 é diferente de 15
```

### Menor que

```python
num_01 = 10
num_02 = 15

print(num_01 < num_02) # 10 é menor que 15
```

### Maior que

```python
num_01 = 10
num_02 = 15

print(num_01 > num_02) # 10 não é maior que 15
```

### Menor ou igual que

```python
num_01 = 10
num_02 = 15

print(num_01 <= num_02) # 10 é menor ou igual que 15
```

### Maior que

```python
num_01 = 10
num_02 = 15

print(num_01 >= num_02) # 10 não é maior ou igual que 15
```

# Métodos Nativos

## `as_integer_ratio`

Esse método gera a fração mínima que representa o número, ou seja, ele gera a fração mínima, representada por [[Tupla]].

```python
num = 10.5
print(num.as_integer_ratio()) # 21/2
```

## `conjugate`

Esse método é feito para que [[Complex#`conjugate`|complexos]] e [[Integer#`conjugate`|inteiros]], tenham os mesmos métodos, ele retorna o conjugado do número complexo, portanto, neste caso retorna $0$

```python
num = 10
print(num.conjugate())
```

## `fromhex`

Em primeiro lugar é explicar como um número [hexadecimal](https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_hexadecimal) é representado em `python`, ele pode ser representado por uma [[String|string]], da seguinte forma

```python
hex_value = '0xa0'
print(hex(160))
```

Além disso é possível gerar um `float` pela string da seguinte forma

```python
hex_value = '0xa0.2'
print(float.fromhex(hex_value)) # 160.125
```

Porém ao tentar converter utilizando a função [[Funções Nativas#hex|hex]], não funciona

```python
hex_value = '0xa0.2'
print(hex(hex_value))
```

Além disso é possível representar um [[Integer|inteiro]], usando a noção de hexadecimal

```python
num = 0xa0
print(num)
```

Mas o mesmo não pode ser feito para `float`

```python
num = 0xa0.2
```

Então assim, o comportamento do `hex`, principalmente se relacionado ao `float`, porém a partir disso é possível entender o comportamento do `fromhex`, ele transforma um hexadecimal [[String|string]] em um valor [[Integer|inteiro]] ou `float`. Por último é importante ler a discussão sobre  esse [[Integer#`from_bytes`|método]] do `int`, pois a questão de se deveria ser método ou não é idêntica. 

## `hex`

Essa função transforma um `float` na sua representação hexadecimal [[String|string]].

```python
num = 10.0
print(num.hex())
```

É importante ressaltar, de novo, que todo `float` é uma aproximação dos números reais, isso fico explicito nesse método. Além disso é recomendado utilizar a função [[Funções Nativas#hex|hex]], ao invés disso.
## `imag`

Esse método é criado para ter o mesmo comportamento do [[Complex#`imag`|complexo]], mas aqui seu atributo sempre será $0$

```python
num = 10.0
print(num.imag)
```

## `is_integer`

Este método é criado para identificar se o número é um inteiro ou não.

```python
num = 10.0
print(num.is_integer())

num = 10.2
print(num.is_integer())
```
## `real`

Esse método existe para ter o mesmo comportamento do [[Complex#`real`|complexo]], aqui ele irá retornar o próprio número.

```python
num = 10
print(num.real)
```
