Esse é a condicional padrão para repetição sobre as mesmas linhas de códigos, ela tem um comportamento muito parecido com o [[While]], porém o `while`, é de certa forma, uma estrutura mais genéricas. O `for`, receberá algo parecido com uma [[Lista|lista]] de valores e irá rodar o mesmo código para todos os valores da lista de forma ordenada (O objeto que o `for` recebe é um [[Iteradores e Geradores|Gerador]]). 

```python
sum_nums = 0
for num in range(10): # 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
	sum_nums += num
	
print(sum_nums)
```

Neste caso aqui, estamos somando todos os números entre `0` e `10`, tirando o `10`, usando a função [[Funções Nativas#range|range]]. Além disso é possível iterar por todos os elementos de uma [[Lista]] de duas formas

```python
my_list = [1, 2, 3, 4, 5]

sum_nums = 0
for num in range(len(my_list)):
	sum_nums += num
	
print(sum_nums)
```

Mas este, não é a forma mais `pythonica` de se trabalhar, o `python` consegue trabalhar de forma direta com as estruturas de dados

```python
my_list = [1, 2, 3, 4, 5]

sum_nums = 0
for num in my_list:
	sum_nums += num
	
print(sum_nums)
```

É possível usar mais de uma estrutura de controle de fluxo dentro da outra, então é possível usar [[If, Elif e Else]], ou [[While]] ou [[Match case]], ou qualquer outra, como o [[Try and Except]], basta controlar a quantidade de identação.

```python
my_matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

sum_nums = 0
for vector in my_matrix:
	for num in vector:
		sum_nums += num
		
print(sum_nums)
```

Ou por exemplo

```python
for i in range(100):
	if i % 2 == 0:
		print("Even")
	else:
		print("Odd")
```

Além disso uma [[String|string]] pode ser tratada como uma "lista" e pode ser iterada em cima de forma direta

```python
my_str = "Hello World!"

for char in my_str:
	print(char)
```

Existem três palavras chaves que estão relacionadas ao [[While]] e o `for`, essas palavras são

## `break`

O `break` sai de um laço instantaneamente, mesmo que ainda tenha objetos para iterar

```python
num = 25

prime = True
for i in range(2, num):
	if num % i == 0:
		prime = False
		break

print(f"Is {'' if prime else 'not'} a prime")
```

## `continue`

O `continue` pula as instruções que ainda faltam dentro do laço e vão para a próxima iteração do laço

```python
for num in range(10):
	if num % 2 == 0:
		continue
	print(f"ODD NUMBER: {num}")
```

## `else`

O `else` no `for` e no [[While|while]] e no [[Try and Except|try and except]] são implementadas, mas devem ser evitadas, pois o seu comportamento não é claro, ou seja, se alguém que não conhece muito de `python` ver um laço com um `else` em seguida a pessoa não vai conseguir entender de forma direta o que está acontecendo, e isso é contra o próprio ZEN do `python` (LINK LINK LINK).
Mas o seu funcionamento é fácil de entender e existem soluções melhores para se usar.
O `else` será executado quando um `break` não for acionado dentro do laço, ou seja, todas as repetições que precisavam ser feitas foram feitas até o final.

```python
for num in range(10):
	print(num)
else:
	print("No Break")
```

```python
for num in range(10):
	if i == 5:
		break
	print(num)
else:
	print("No break")
```