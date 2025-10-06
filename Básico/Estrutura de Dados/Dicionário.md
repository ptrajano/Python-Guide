Um dicionário é uma estrutura de dados mutável, não é ordenada da forma habitual, pois não existe uma ordenação numérica igual uma [[Lista]], mas a partir do [Python3.7](https://mail.python.org/pipermail/python-dev/2017-December/151283.html) os dicionários mantem a ordem de inserção. O dicionário é um conjunto de chaves e valores, aonde os valores são únicas e imutáveis, como por exemplo uma [[Tupla]], e além disso apresenta o mesmo comportamento de um [[Set]] em que é impossível adicionar mais de uma chave iguais. Já os valores podem ser qualquer objeto (LINK LINK LINK).

```python
my_dict = {
	'key_01': 1
	'key_02': [1, 2]
	'key_03': 'a'
}

print(my_dict)
```

Além disso é possível usar a função [[Funções Nativas#dict|dict]] para criar um dicionário. Além disso é possível adicionar um elemento novo no dicionário da seguinte forma

```python
my_dict = {}
my_dict['key_01'] = 1

print(my_dict)
```

# Operações Nativas

## Operações Lógicas

Apenas um operador lógico pode ser usado em dicionário

### Ou

O operador de concatenação de dois dicionários é o mesmo do operador `|`, esse operador tem um trabalho semelhante ao método [[#`update`|update]], ele irá concatenar dois dicionários

```python
my_dict = {1: 2, 3: 4}

my_dict_02 = {5: 6, 7: 8}

print(my_dict | my_dict_02)
```

## Operações de Comparação

### Igualdade

É possível comparar se dois dicionários são idênticos, tanto o conjunto de chaves quanto seus respectivos valores utilizando o símbolo `==`, além disso existe o símbolo `!=` que checa se dois dicionários são diferentes

```python
print({1: 2, 2: 3} == {1: 2, 2: 3})
print({1: 2, 2: 3} != {1: 3, 2: 2})
```

# Métodos Nativos

## `clear`

Esse método remove todo par de chave e valor do dicionário, transformando-o em um dicionário vázio

```python
my_dict = {1: 2, 3: 4}

my_dict.clear()
print(my_dict)
```

## `copy`

Esse método faz uma cópia do dicionário, é importante ler a discussão levantada em [[Lista#`copy`|copy]] da lista, para entender a diferença do `copy` para usar a atribuição (`=`)

```python
my_dict = {1: 2, 3: 4}

my_dict_02 = my_dict.copy()

print(my_dict_02)
```

## `fromkeys`

Gera um dicionário a partir de um conjunto de chaves

```python
keys = [1, 2, 3]

my_dict = dict.fromkeys(keys)

print(my_dict)
```

Perceba que dessa forma todos os valores estão setados ao [[Palavras Restritas#None|None]], é possível usar o parâmetro `value` para setar um valor pré-definido para todos, mas não é possível setar um diferente para cada

```python
keys = [1, 2, 3]

my_dict = dict.fromkeys(keys, value = "NoneValue")

print(my_dict)
```

Por último é importante falar sobre objetos mutáveis passados como argumento de `value`, se eles forem, todos as chaves vão compartilhar o mesmo objeto, ou seja, modificando o objeto modificado de um irá modificar todas os valores

```python
keys = [1, 2, 3]

my_dict = dict.fromkeys(keys, [])

my_dict[1].append(1)

print(my_dict)
```

## `get`

Esse método recupera o valor associado a uma chave, e retorna [[Palavras Restritas#None|None]], caso não exista essa chave, podendo ser modificado usando o parâmetro `default`

```python
my_dict = {1: 2, 3: 4}

print(my_dict.get(1))

print(my_dict.get(2))

print(my_dict.get(2, default = 'NoKeyFound'))
```

## `items`

Este método retorna o par de chave e valor que estão no dicionário, seu retorno é um objeto parecido com uma [[Tupla]], mas não é, ele é da classe (LINK LINK LINK) `dict_items`, porém cada par está dentro do `dict_items` como uma tupla.

```python
my_dict = {1: 2, 3: 4}

print(my_dict.items())
```
## `keys`

Este método retorna as chaves que estão no dicionário, seu retorno é um objeto parecido com uma [[Tupla]], mas não é, ele é da classe (LINK LINK LINK) `dict_keys`.

```python
my_dict = {1: 2, 3: 4}

print(my_dict.keys())
```

## `pop`

Este método retira um par chave e valor do dicionário a partir da chave, e, em seguida, retorna o valor.

```python
my_dict = {1: 2, 3: 4}

print(my_dict.pop(1))

print(my_dict)
```

## `popitem`

Retira um par de chave e valor em formato de [[Tupla]], a partir do `python3.7` esse par é o último par adicionado ao dicionário

```python
my_dict = {1: 2, 3: 4}

print(my_dict.popitem())

print(my_dict)
```

## `setdefault`

Este método adiciona uma chave nova junta com o valor e retorna o valor, se essa chave não estiver no dicionário, mas se estiver retorna o valor que já está associado ao dicionário

```python
my_dict = {1: 2, 3: 4}

print(my_dict.setdefault(1, default_value=4))

print(my_dict.setdefault(4, default_value=4))

print(my_dict)
```

## `update`

Este método é usado para adicionar pares de chave e valor em um dicionário, podendo ser feita de três formas

```python
my_dict = {'Name': 'Pedro', 'Age': 24}

my_dict.update({'Age': 25, 'City': 'Brasilia'})

print(my_dict)

my_dict.update([('Occupation', 'Student')])

my_dict.update(country= 'Brazil', area = 'Engineering')

print(my_dict)
```

## `values`

Este método retorna os valores que estão no dicionário, seu retorno é um objeto parecido com uma [[Tupla]], mas não é, ele é da classe (LINK LINK LINK) `dict_values`.

```python
my_dict = {1: 2, 3: 4}

print(my_dict.values())
```
