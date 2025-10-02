
Uma lista é uma estrutura de dados, que representa algo parecido com um [vetor](https://pt.wikipedia.org/wiki/Vetor_(matem%C3%A1tica)), ela é uma estrutura de dados que recebe qualquer objeto (LINK LINK LINK) do `python` e o salva em uma lista, conseguindo colocar vários items em uma mesma variável. Além disso uma lista é um objeto que é mutável, ou seja, o objeto pode variar ao passar do tempo. Isso é importante para objetos como o [[Dicionário|dict]], que sua chave precisa ser um objeto imutável. 
Para criar uma lista, existe três formas, a primeira é a padrão que é usada normalmente

```python
my_list = [1, 'a', abs, True, 1.2, 2+3j, [2, 3, 4], ...]
```

Neste caso, foi colocado vários objetos diferentes, para mostrar que ela recebe qualquer objeto, mas o intuito é colocar dados que têm uma certa relação, e merecem estar em uma mesma variável. A segunda forma é usando a função [[Funções Nativas#list|list]], e a terceira é criar uma lista vazia e usar o método [[#`append`|append]].

Além disso para acessar um elemento da lista, basta usar seu índice, o seu índice começa no $0$

```python
my_list = list(range(5))

print(my_list)
print(my_list[0])
print(my_list[3])
print(my_list[-1])
```

Por último é legal ressaltar que é possível acessar a lista usando números negativos, aonde o $-1$ retorna o último elemento da lista, o $-2$ retorna o penúltimo e assim sucessivamente.

# Operações nativas

# Métodos Nativos

## `append`

Esse é um dos métodos mais importantes, ele cria uma nova posição na última posição da lista e adiciona o valor passado como argumento desse método

```python
my_list = list(range(5))

my_list.append(5)
print(my_list)
```

## `clear`

Transforma a lista em uma lista vazia

```python
my_list = list(range(5))

my_list.clear()
print(my_list)
```

## `copy`

Faz uma cópia da lista, e você consegue salvar em outra variável

```python
my_list = list(range(5))

my_list_02 = my_list.copy()
print(my_list_02)
```

É importante, ressaltar que ao tentar "copiar" o valor de uma lista para a segunda usando somente o `=`, o que acontece é que as duas listas vão estar apontando para o mesmo objeto, ou seja, ao modificar a primeira lista, a segunda lista também será modificada

```python
my_list = list(range(5))

my_list_02 = my_list

my_list.append(5)

print(my_list)
print(my_list_02)
```

## `count`

Conta a quantidade de elementos iguais ao argumento passado para o método

```python
my_list = [1, 2, 3, 1, 1, 2]

print(my_list.count(1))
```

## `extend`

Esse método adiciona uma outra lista ou [[Tupla]], para o final o final da lista que está chamando o método

```python
my_list = [1, 2, 3]
my_list_02 = [ 1, 1, 2]

my_lst.extend(my_list_02)

print(my_list)
```

## `index`

Esse método retorna o índice, do primeiro elemento igual ao argumento do método

```python
my_list = [1, 2, 3, 3]
print(my_list.index(3))
```

## `insert`

Esse método adiciona um elemento na posição indicada, recebendo em primeiro lugar o índice seguido pelo valor que deve ser adicionado

```python
my_list = list(range(5))

my_list.insert(3, -1)

print(my_list)
```

## `pop`

Retira um elemento na posição indicada, além disso, se ela não receber nenhum parâmetro ele retirará o último termo. Esse método retorna o valor que foi retirado

```python
my_list = list(range(5))

print(my_list.pop())

print(my_list)
```

## `remove`

Retira o primeiro elemento igual ao argumento passado

```python
my_list = ["apple", "banana", "cherry", "banana"]
my_list.remove("banana")
print(my_list)
```

## `reverse`

Método que inverte a lista, o último elemento vira o primeiro, o penúltimo o segundo e assim sucessivamente

```python
my_list = ["apple", "banana", "cherry", "banana"]
my_list.reverse()
print(my_list)
```

## `sort`


# Slicing
