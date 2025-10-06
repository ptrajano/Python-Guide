
Compressão de lista é uma forma concisa e mais eficiente de se criar as estruturas padrões do `python` ([[Lista|list]], [[Dicionário|dict]], [[Tupla|tuple]], [[Set|set]]). Ela gera uma forma mais compacta de se trabalhar com geração de estruturas de dados, e de certa forma, mais legível.

```python
def square_numbers():
	my_list = []
	for num in range(10):
		my_list.append(num)
	return my_list

squared_nums = [num ** 2 for num in range(10)]

print(squared_nums) # list comprehension
print(square_numbers()) # Function
```

Neste caso é possível entender a importância desse conceito, é muito maior e menos conciso a definição da [[Funções|função]] `square_numbers` ao invés da compressão de lista. Além disso aqui está como se usa para outras estruturas de dados

Dicionário

```python
squared_nums = {num ** 2 for num in range(10)}

print(squared_nums)
```

Ou uma tupla

```python
squared_nums = (num ** 2 for num in range(10))

print(squared_nums)
```

Ou um dicionário

```python
squared_nums = {num: num ** 2 for num in range(10)}

print(squared_nums)
```

## Condicionais

É possível usar [[If, Elif e Else|if]] de duas formas, como sua forma em uma linha

```python
my_nums = [num ** 2 if num % 2 == 0 else num for num in range(10)]

print(my_nums)
```

Neste caso se o número for par então ele estará ao quadrado e se ele for ímpar será somente o número.

Ou usar o `if` como condição de adição da lista

```python
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]  
  
fruits_with_a = [x for x in fruits if "a" in x]  
  
print(fruits_with_a)
```
[exemplo list comprehension](https://www.w3schools.com/python/python_lists_comprehension.asp)

Neste caso ele só escolhe frutas que tenham a letra `a` no nome.

## Transposição de Matriz

Este caso é legal de se mostrar, pois mostra como é útil a compressão del lista

```python
my_matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

transposed_matrix = [collumn for collumn in zip(*my_matrix)]

print(transposed_matrix)
```

Para entender este caso é importante saber a função [[Funções Nativas#zip|zip]] e [[Unpacking Iterables|operador de desempacotamento]], mas o que está acontecendo é que ao desempacotar a matriz, ficará somente os vetores, e o `zip` irá pegar todos os primeiros elementos de todos os vetores (colunas), dessa forma é fácil transpor a matriz com isso.