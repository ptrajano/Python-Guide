Um [iterador](https://www.geeksforgeeks.org/python/difference-between-iterator-vs-generator/) é um objeto que contêm um número contável de valores e é usado para iterar sobre valores como [[Lista]], [[Dicionário]], [[Set]], [[String]], [[Tupla]], entre outros. Iteradores são implementados usando classes (LINK LINK LINK).  Iteradores usam de [avaliações preguiçosas](https://realpython.com/python-lazy-evaluation/),  que basicamente checam se a expressão é valida até precisar dela, isso ajuda na alocação da memória, e diminui o desperdício de memória.

```python
iter_list = iter([1, 2, 3, 4, 5])
print(next(iter_list))
print(next(iter_list))
print(next(iter_list))
```

Se tentar chamar uma quantidade maior de valores que o que têm na lista será chamada uma exception [[Lista de Exceptions#`StopIteration`|StopIteration]], que indica a finalização do iterador, perceba que é possível criar um iterador infinito contável.

Já geradores são um jeito de criar um iterador aonde usa-se a palavra [[Palavras Restritas#yield|yield]], são criados usando funções ou métodos de uma classe 

```python
def square_nums(n: int):
	for i in range(n):
		yield i**2
		
gen = square_nums(10)
print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))
```

É possível usar o dunder [[Dunder#`__iter__`|__iter__]] criar um iterador de uma classe, por exemplo:

```python
class Vector:
	def __init__(self, vector: list):
		self.vector = vector
		
	def __iter__(self):
		for element in self.vector:
			yield element
			
vect = Vector([1, 2, 3, 4])
for element in vect:
	print(element)
```

Além disso é importante ressaltar que é possível criar um gerador infinito 

```python
def circle_gen(n: int):
	base_list = list(range(n))
	i = 0
	while True:
		yield base_list[i]
		i+=1
		if i >= len(base_list):
			i = 0

circle_list = circle_gen(10)
	
for i in range(100):
	print(next(circle_list))
```