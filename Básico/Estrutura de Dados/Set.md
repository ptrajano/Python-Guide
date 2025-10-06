O `set`, é uma estrutura de dados não ordenados e é um objeto mutável, ou seja é preciso modificar seu conteúdo depois de criar o objeto, mas os elementos que são adicionados, não tem como acessar um elemento como [[Lista]], [[Tupla]], [[Dicionário]], mas em compensação é extremamente rápido suas operações, além disso não é possível adicionar elementos duplicados .
Em troca da ordenação e não poder ter elementos duplicados, criar objetos extremamente eficientes e rápidos, e se quiser um objeto mais rápido é possível criar um `set` imutável usando o [[Funções Nativas#frozenset|frozenset]]. 
Podemos pensar no `set` como um conjunto numérico, aonde as operações de conjunto são possíveis ser feitas. Para criar um `set` utiliza um formato parecido com a criação de um [[Dicionário]], mas sem a questão de chave e valor. 

```python
my_set = {1, 2, 3, 4}

print(my_set)
```

É possível criar usando a função [[Funções Nativas#set|set]].

# Operações 

As operações que podem ser feitas com o `set`, são operações de conjunto e de comparação


## Operações de Conjunto
### União

Usando o símbolo `|` gera o mesmo comportamento de [[#`union`|union]]. Aonde ele cria um novo set que terá todos os elementos que estão em ambos os `set`.

```python
my_set_01 = {1, 2, 3, 4}

my_set_02 = {1, 2, 3, 5}

my_set = my_set_01 | my_set_02

print(my_set)
```

### Interseção

Usando o símbolo `&` gera o mesmo comportamento de [[#`intersection`|intersection]]. Aonde ele cria um novo set que terá somente os elementos que estão em ambos os `set`.

```python
my_set_01 = {1, 2, 3, 4}

my_set_02 = {1, 2, 3, 5}

my_set = my_set_01 & my_set_02

print(my_set)
```

### Diferença

Esta operação retorna apenas os elementos que estão somente no primeiro `set` e não estão no segundo.

```python
my_set_01 = {1, 2, 3, 4}

my_set_02 = {1, 2, 3, 5}

my_set = my_set_01 - my_set_02

print(my_set)
```

Perceba que essa operação não é comutativa, ou seja, a ordem da operação importa `my_set_01 - my_set_02 != my_set_02 - my_set_01`. Além disso é idêntico ao método [[#`difference`|difference]].

### Diferença Simétrica

Essa operação são todos os elementos que não estão na interseção dos dois conjuntos.

```python
my_set_01 = {1, 2, 3, 4}

my_set_02 = {1, 2, 3, 5}

my_set = my_set_01 ^ my_set_02

print(my_set)
```

Perceba que essa operação é idêntica de pegar as duas [[#Diferença|diferenças]] dos `set` e em seguida fazer a [[#União]] deles.

```python
my_set_01 = {1, 2, 3, 4}

my_set_02 = {1, 2, 3, 5}

my_set = ((my_set_01 - my_set_02) & (my_set_02 - my_set_01))

print(my_set)
```

Além disso é idêntico ao método [[#`symmetric_difference`|symmetric_difference]].

## Operações de Comparação 

### Igualdade

O símbolo de comparação de igualdade `==` compara se conjuntos contém a mesma quantidade de elementos, e se todos seus elementos são iguais. Além disso, para todo objeto nativo do `python`, o retorno da igualdade entre um `set` e esse é objeto será negativo.
Já o `!=` responde se dois objetos não são iguais.

```python
print({1, 2, 3} == {2, 3, 1}) # True ordem não importa
```

### Desigualdades 

As desigualdades, nesse contexto fazem o papel de subconjunto, ou seja elas comparam dois 
`set` e comparam se um está contido dentro do outro

```python
a = {1, 2, 3}
b = {1, 2}
c = {1, 2, 3, 4}

# Subconjunto próprio
print(b < a)   # True (b é subconjunto próprio de a)
print(b <= a)  # True (b é subconjunto de a)

# Superconjunto próprio
print(c > a)   # True (c é superconjunto próprio de a)
print(c >= a)  # True (c é superconjunto de a)
```
# Métodos Nativos

## `add`

O `add` é semelhante ao [[Lista#`append`|append]] da lista, porém para `set`, ele adiciona um novo elemento a estrutura de dado.

```python
my_set = {1, 2, 3, 4}

my_set.add(3)

print(my_set)
```

## `clear`

O `clear` é parecido com o [[Lista#`clear`|clear]] da lista, mas agora gera um `set` vazio ao invés de uma `list`

```python
my_set = {1, 2, 3, 4}

my_set.clear()

print(my_set)
```

## `copy`

O `copy` é parecido com o [[Lista#`copy`|copy]] da lista, mas agora gera um `set` idêntico ao invés de uma `list` idêntica.

```python
my_set = {1, 2, 3, 4}

my_set_02 = my_set.copy()

print(my_set_02)
```

É importante ler a discussão em [[Lista#`copy`|copy]], para entender o por quê usar isso ao invés de simplesmente `my_set_02 = my_set`.

## `difference`

Idêntico ao [[#Diferença]], mas chamado em método

```python
my_set_01 = {1, 2, 3, 4}

my_set_02 = {1, 2, 3, 5}

my_set = my_set_01.difference(my_set_02)

print(my_set)

```


## `difference_update`

Faz a diferença entre vários `set`, e modifica diretamente o `set` que chamou o método

```python
my_set_01 = {1, 2, 3, 4, 5}

my_set_02 = {4, 5, 6, 7}
my_set_03 = {5, 6, 7, 8}

my_set_01.difference_update(my_set_02, my_set_03)

print(my_set_01)
```

## `discard`

Remove o elemento de dentro do `set` a partir do argumento passado pro método, se o argumento não existir no `set` não acontecerá nada. dará [[Lista de Exceptions#`KeyError`|KeyError]].

```python
my_set = {1, 2, 3, 4, 5}

my_set.discard(2)

print(my_set_01)
```

## `intersection`

Idêntico ao [[#Interseção]], mas chamado em método

```python
my_set_01 = {1, 2, 3, 4}

my_set_02 = {1, 2, 3, 5}

my_set = my_set_01.intersection(my_set_02)

print(my_set)

```


## `intersection_update`

Faz a interseção entre vários `set`, e modifica diretamente o `set` que chamou o método

```python
my_set_01 = {1, 2, 3, 4, 5}

my_set_02 = {4, 5, 6, 7}
my_set_03 = {5, 6, 7, 8}

my_set_01.intersection_update(my_set_02, my_set_03)

print(my_set_01)
```

## `isdisjoint`

Identifica se dois conjuntos são disjuntos ou não, retornando [[Palavras Restritas#True|True]] se não tiverem nenhum elemento em comum e [[Palavras Restritas#False|False]] caso contrário

```python
my_set_01 = {1, 2, 3, 4, 5}

my_set_02 = {4, 5, 6, 7}

print(my_set_01.isdisjoint(my_set_02))
```

## `issubset`

Checa se o `set` que chamou o método é um sub-conjunto do `set` que é passado como argumento no método

```python
my_set_01 = {1, 2, 3, 4, 5}

my_set_02 = {4, 5, 6, 7}

print(my_set_01.issubset(my_set_02))
```

## `issuperset`

Checa se o `set` que chamou o método engloba todos os elementos do `set` que é passado como argumento no método

```python
my_set_01 = {1, 2, 3, 4, 5}

my_set_02 = {4, 5, 6, 7}

print(my_set_01.issuperset(my_set_02))
```

## `pop`

Retira um elemento aleatório do `set` e o retorna

```python
my_set = set(range(6))

print(my_set.pop())

print(my_set)
```

## `remove`

Remove o elemento de dentro do `set` a partir do argumento passado pro método, se o argumento não existir no `set` dará [[Lista de Exceptions#`KeyError`|KeyError]].

```python
my_set = {1, 2, 3, 4, 5}

my_set.remove(2)

print(my_set_01)
```

## `symmetric_difference`

Idêntico ao [[#Diferença Simétrica]], mas chamado em método.

```python
my_set_01 = {1, 2, 3, 4}

my_set_02 = {1, 2, 3, 5}

my_set = my_set_01.symmetric_difference(my_set_02)

print(my_set)

```


## `symmetric_difference_update`

Faz a diferença simétrica entre vários `set`, e modifica diretamente o `set` que chamou o método

```python
my_set_01 = {1, 2, 3, 4, 5}

my_set_02 = {4, 5, 6, 7}
my_set_03 = {5, 6, 7, 8}

my_set_01.symmetric_difference_update(my_set_02, my_set_03)

print(my_set_01)
```


## `union`

Idêntico ao [[#União]], mas chamado em método

```python
my_set_01 = {1, 2, 3, 4}

my_set_02 = {1, 2, 3, 5}

my_set = my_set_01.union(my_set_02)

print(my_set)

```

## `update`

Adiciona diversos elementos de uma vez, no set, recebendo vários argumentos e passando-os para o `set`

```python
my_set = {1, 2, 3}

my_set.update(range(6)) #equiv 0, 1, 2, 3, 4, 5
```
