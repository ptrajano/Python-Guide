
Uma [função](https://pythoniluminado.netlify.app/funcoes) é um bloco de código organizado e reutilizável que é capaz de realizar uma determinada ação. O intuito principal de uma função é ajudar na organização do código ajudando a entender estruturas mais complexas com nomes de funções intuitivas e ao mesmo tempo modularizar trechos de códigos que são repetidas

```python
my_list = [1, 5, 4, 10, 15]

num = my_list[0]
even = False
if num % 2 == 0:
	even = True
		
print(f'Is {num} even?: {even}')

num = my_list[1]
even = False
if num % 2 == 0:
	even = True
		
print(f'Is {num} even?: {even}')

num = my_list[2]
even = False
if num % 2 == 0:
	even = True
		
print(f'Is {num} even?: {even}')

num = my_list[3]
even = False
if num % 2 == 0:
	even = True
		
print(f'Is {num} even?: {even}')

num = my_list[4]
even = False
if num % 2 == 0:
	even = True
		
print(f'Is {num} even?: {even}')
```

Este código já consegue ser simplificado usando o [[For|for]]

```python
my_list = [1, 5, 4, 10, 15]

for num in my_list:
	even = False
	if num % 2 == 0:
		even = True
	print(f'Is {num} even?: {even}')
```

Mas é possível simplificar ainda mais usando uma função

```python
def is_even(num):
	if num % 2 == 0
		return True
	return False

my_list = [1, 5, 4, 10, 15]

for num in my_list:
	even = is_even(num)
	print(f'Is {num} even?: {even}')
```

Perceba que dessa forma é possível ler o laço de repetição sem se importar com a implementação da função `is_even`, pois é possível entender que ela checa se um número é par ou ímpar de uma forma mais alto nível. Além disso é possível perceber que modulariza o código.

Para fazer uma função utiliza-se a palavra [[Palavras Restritas#def|def]], para definir uma função, seguida pelo nome da função, e entre os parâmetros (LINK LINK LINK) será os parâmetros que serão recebidos e nas linhas identadas seguintes estará o comportamento da função, que utilizará os parâmetros.

## Funções Internas

É possível criar funções dentro de funções em `python`, isso é útil para conceitos mais avançados como [[Decorators|decorators]], que é uma forma de adicionar novos comportamentos em funções já existentes, além disso se uma função quiser gerar outra função é possível usar isso também

```python
def add_num(num):
	def adder(value):
		return num + value
	return adder
	
add_two = add_num(2)

print(add_two(5))
```

Neste caso a função `add_num` recebe um parâmetro que indicará o quanto que será somado, então ao gerar `add_num(2)`, a sua saída será uma função que somará dois a todo valor que é passado para a nova função `add_two`.