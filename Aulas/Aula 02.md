## Estrutura de Dados

- [[Lista]]
- [[Tupla]]
- [[Dicionário]]
- [[Set]]
- [[List Comprehension]] (Dependendo do tempo)

## Funções
- [[Funções]]
- [[Recursão]]
- [[Argumentos de uma Função]]
- [[Funções Lambda]]
## Exercícios 
- Faça uma função que some todos os elementos (floats) de um vetor

```python
def sum_list(my_list):
	pass
	
# Exemplos de uso
"""
sum_list([1, 2, 3, 4]) -> 10
sum_list([0.5, 2, 5, 27]) -> 34.5
"""
```

- Faça uma função que faça a multiplicação de duas matriz 3x3 usando o for

```python
def mul_matrix(matrix_01, matrix_02):
	pass
	
"""
mul_matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]) -> [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
"""
```

- Faça duas funções que calcule o fibonacci de um número n, sendo uma delas recursiva e a outra não

```python
def fibonacci(num):
	pass

def recursive_fibonacci(num):
	pass
	
"""
A saída do fibonacci e recursive_fibonacci são iguais

fibonacci(0) -> 1
fibonacci(1) -> 1
fibonacci(2) -> 2
fibonacci(3) -> 3
fibonacci(4) -> 5
fibonacci(5) -> 8
fibonacci(6) -> 13
"""
```

- Faça uma função que receba um dicionário e retorne uma lista com cada elemento sendo uma tupla com dois elementos (chave e valor)

```python
def convert_dict_to_list(my_dict):
	pass
	
"""
convert_dict_to_list({'name': 'Pedro', 'age': 24}) -> [('name', 'Pedro'), ('age', 24)]
convert_dict_to_list({0: 1, 1: 1, 2: 2, 3: 3, 4: 5, 5: 8, 6: 13}) -> [(0, 1), (1, 1), (2, 2), (3, 3), (4, 5), (5, 8), (6, 13)]
"""
```