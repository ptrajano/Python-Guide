
Uma lista é uma estrutura de dados, que representa algo parecido com um [vetor](https://pt.wikipedia.org/wiki/Vetor_(matem%C3%A1tica)), ela é uma estrutura de dados que recebe qualquer [[Classes|objeto]] do `python` e o salva em uma lista, conseguindo colocar vários items em uma mesma variável. Além disso uma lista é um objeto que é mutável, ou seja, o objeto pode variar ao passar do tempo. Isso é importante para objetos como o [[Dicionário|dict]], que sua chave precisa ser um objeto imutável. 
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

# Operações

## Operadores Aritméticos
### Soma

É possível somar duas listas, o que esse processo faz é a concatenação, ou seja, semelhante ao [[#`extend`|extend]], porém não funciona com tupla.

```python
my_list = [1, 2, 3]

print(my_list + [4, 5, 6])
```

### Multiplicação

O símbolo de multiplicação, equivale a fazer várias [[#Soma|somas]] no mesmo objeto, ou seja ele vai fazer uma concatenação com ele mesmo a quantidade de vezes que se foi multiplicado

```python
my_list = [1, 2, 3]

print(my_list * 3)
```

## Operadores de Comparação

### Igualdade

O símbolo de comparação de igualdade `==` compara se listas contém a mesma quantidade de elementos, e se todos seus elementos são iguais. Além disso, para todo objeto nativo do `python`, o retorno da igualdade entre uma lista e esse é objeto será negativo.
Já o `!=` responde se dois objetos não são iguais.

```python
print([1, 2, 3] == [1, 2])
print([1, 2, 3] != [1, 2, 4])
print([1, 2, 3] == [1, 2, 3])
```

### Desigualdades

As comparações feitas em listas são confusas, em primeiro lugar elas só funcionam se os dois objetos forem listas, além disso a forma de sua funcionamento é checar elemento em elemento até encontrar algum termo que é diferente para poder fazer a comparação

```python
print([1, 2, 3] < [1, 2, 4]) # 3 < 4 (TRUE)
```

Esse comportamento ocorre se as duas listas tiverem o mesmo tamanho, se elas não tiverem, então irá comparar o tamanho delas

```python
print([1, 2, 3] < [1, 2, 3, 4]) # len([1, 2, 3]) < len([1, 2, 3, 4])
```

Além disso é importante ressaltar que, se uma lista ou [[Tupla|tupla]], ou um [[Set|set]], ou qualquer outro objeto que consiga trabalhar com operadores de desigualdade forem elementos de uma lista, então irá encadear para os elementos o comportamento de comparação

```python
print([1, 2, [1, 2, 3]] < [1, 2, [1, 2, 4]]) # [1, 2, 3] < [1, 2, 4] (3 < 4) (TRUE)
```

E por último é importante ressaltar que se algum elemento da lista for fazer comparação com outro elemento da lista, e esse outro elemento da lista não puder fazer a comparação então, dará [[Lista de Exceptions#`TypeError`|TypeError]].


```python
print([1, 2, 'a'] < [1, 2, 3])
```

## Slicing

Slicing (Fatiamento) é uma forma de trabalhar com lista e [[Tupla|tupla]] para obter uma sublista que está dentro da lista original. Se por exemplo, quisermos pegar o quarto termo para frente

```python
my_list = list(range(10))

print(my_list[3:])
```

O `[3:]` simboliza que a partir do terceiro termo eu vou pegar todos os termos, mas já

```python
my_list = list(range(10))

print(my_list[:3])
```

Pega os 3 primeiros termos, além disso é possível pegar intervalos específicos

```python
my_list = list(range(10))

print(my_list[3: 6])
```

Aqui ele pegou uma lista entre o quarto e o sexto elemento. E por último é possível indicar o passo que será feito, ou seja, é possível pegar só os termos que tem índices pares, da seguinte forma

```python
my_list = list(range(10))

print(my_list[::2])
```

Ou os ímpares

```python
my_list = list(range(10))

print(my_list[1::2])
```

E é possível também inverter uma lista usando isso

```python
my_list = list(range(10))

print(my_list[::-1])
```

Dessa forma percebemos que a primeira posição indcopy. ica aonde que vai começar o fatiamento, se estiver vazio começa no 0, a segunda posição indica aonde que para, se estiver vazio para no final da lista, e o último termo indica qual será o passo feito. É possível também fazer uma [[#`copy`|cópia]] da lista com o slicing, da seguinte forma

```python
my_list = list(range(10))

print(my_list[:])
```

Esse slicing irá pegar a lista inteira, porém essa cópia não compartilha o endereço de memória da original. Por último é possível usar a [[Classes|classe]] `slice` para gerar um objeto slicer

```python
slicer = slice(start = 5, stop = 1, step = -1)

my_list = list(range(10))

print(my_list[slicer])
```

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

Esse método ordena uma lista, e modifica ela. 

```python
my_list = [6, 5, 4, 3, 2, 1, 0]

my_list.sort()

print(my_list)
```

Além disso ela pode receber dois parâmetros, que são `reverse`, que indica se ordena na ordem contrária
```python
my_list = [0, 1, 2, 3, 4, 5, 6]

my_list.sort(reverse=True)

print(my_list)
```

E `key` que recebe uma [[Funções|função]] que será a forma que o `sort` vai trabalhar, indica como comparar os objetos, então por exemplo

```python
my_list = ["Python", "Swift","Java", "C++", "Go", "Rust"]

programming_languages.sort(key=len, reverse=True)

print(programming_languages)
```
[exemplo](https://www.freecodecamp.org/news/python-sort-how-to-sort-a-list-in-python/)

É possível criar sua própria função que será parâmetro de `key`, neste [site](https://www.freecodecamp.org/news/python-sort-how-to-sort-a-list-in-python/) tem uma explicação mais a fundo.