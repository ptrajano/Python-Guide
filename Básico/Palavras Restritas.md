São palavras que não podem ser usadas como nome de variáveis 

# Keywords:
## False

Representa o estado falso em um [[Boolean | booleano]].

```python
False
```

## None

Usado para definir uma variável com valor nulo ou sem valor.

```python
None
```
## True

Representa o estado verdadeiro em um [[Boolean | booleano]].

```python
True
```

## and

Usada para a operação lógica, e 

| $S_0$ | $S_1$ | Output |
| ----- | ----- | ------ |
| 0     | 0     | 0      |
| 0     | 1     | 0      |
| 1     | 0     | 0      |
| 1     | 1     | 1      |

```python
True and False
```

## as

Usado para criar um alias, usada no contexto de [[#import]] e [[#from]]

```python
import math as m
from math import sin as sen
```
## assert

Usada para checar se algo é verdade ou não, se não for será chamado o erro [[Lista de Exceptions#`AssertionError` | AssertionError]].

```python
assert 1 == 2
```

## async
Essa palavra e  [[#await]] são palavras relacionadas a execuções concorrentes de códigos

## await


## break

Usada para sair de um laço de repetição, como [[#for]] e o [[#while]]

```python
for i in range(5):
	if i == 3:
		print("Hello")
		break
	print(f"{i}")
```

## class

Usado na criação de uma [[Classes|classe]]

```python
class MyClass:
	pass
```

## continue

Usada para ir direto para a próxima iteração de um laço de repetição ([[For|for]] e [[While|while]])

```python
for i in range(5):
	if i == 3:
		print("Hello")
		continue
	print(f"{i}")

```

## def

Usado na criação de uma [[Funções|função]]

```python
def hello_world():
	print("Hello World!")

hello_world()
```

## del

Palavra associada a liberação do espaço de memória de alguma variável, ou [[Classes|instância]]

```python
x = 1
del x
print(x)
```

## elif

Palavra associada a uma outra condicional em um bloco de [[If, Elif e Else|if]]

```python
x = "Night"
if x == "Day":
	print("It's Sunny!")
elif x == "Afternoon":
	print("It's almost over!")
elif x == "Night":
	print("Bed Time!")
```

## else

O `else` é associado a uma [[If, Elif e Else|condição de fluxo]]

```python
x = -1
if x >= 0:
	print("Positive")
else:
	print("Negative")
```
## except

Relacionado ao [[Try and Except| manuseio de erros]]

```python
try:
	1/0
except:
	print("Arithmetic Error")
```

## finally

A palavra têm utilidades diferentes dependendo de onde é chamada [[Try and Except]],  [[For|for]]  e [[While|while]] 

## for

Forma padrão de um [[For|laço de repetição]]

## from

Relacionado ao importar componentes específicos de uma [[Criar sua própria "Biblioteca"|biblioteca]]
```python
from math import sen, cos
```

## global

Usada dentro de [[Escopos e Namespaces|escopos]], como [[Funções|funções]]  para indicar que a variável que será acessada e modificada está no escopo global

```python
global_var = 10

def modify():
	global global_var
	global_var += 5
	
def create():
	global new_var
	new_var = 5

print(global_var)	
modify()
print(global_var)

create()
print(new_var)
```
## if

Base para [[If, Elif e Else|condicionais]]

```python
x = 1
if x == 1:
	print("x is 1")
```
## import

Relacionado a importação de uma [[Criar sua própria "Biblioteca"|biblioteca]]
```python
import math
from math import cos, sin
```

## in

Operador que checa se um objeto está dentro de outro, usado em diversas estruturas nativas do `python` como por exemplo [[Lista]], [[Dicionário]], [[Set]], [[String]] e [[Tupla]]

```python
print('a' in 'banana')
print(0 in [1, 2, 3, 4, 5])
```

## is

Operador que checa se um objeto é igual ao outro, perceba que isso não necessariamente quer dizer que o valor de duas variáveis são iguais, por exemplo

```python
x = [1, 2, 3]
y = [1, 2, 3]

print(x is y)
```

Neste caso vemos que mesmo que os valores de suas variáveis são iguais eles são objetos diferentes, o que faz sentido, pois podemos modificar o conteúdo de um deles, e não se deve modificar o outro, pois são diferentes, mas o `python` tem uns comportamentos estranhos, por exemplo

```python
x = 257
y = 257
print(x is y)
```

Neste caso, obviamente as variáveis são diferentes (o que é esperado), mas se `x` e `y` estiverem no intervalo `[-5, 256]`, olha o que acontece

```python
x = 256
y = 256
print(x is y)
```

Neste caso `python` salva as duas variáveis no mesmo local, então elas são "iguais", mas ao fazer isso

```python
x = -5
y = -5
print(x is y)
x += 1
print(y)
```

Mesmo que eles tem o mesmo endereço ao mudar o valor de `x` o de `y` não muda, ou seja, o comportamento do `is` é esquisito se não souber as otimizações internas do `python`, por causa disso é recomendado usar o `is` quando precisa analisar o ponteiro (LINK LINK LINK) de uma classe (LINK LINK LINK).
## lambda

Essa palavra é feita para trabalhar com funções lambda (LINK LINK LINK)

```python
add_one = lambda x: x + 1
print(add_one(5))
```

## nonlocal

Usada em nested functions (LINK LINK LINK), aonde a função interna precisa acessar o escopo e uma variável do escopo da função externa

```python
def foo():
	x = 0
	def nested_foo():
		nonlocal x
		x = 5
	nested_foo()
	return x
	
print(foo())

```

## not

Operação que checa se uma variável [[Boolean | booleana]] é [[#False]], ou se uma [[String]] é vazia, ou se uma [[Lista]] não tem elemento, ou se uma variável é [[#None]], além de outras funcionalidades

```python
print(not True)
print(not None)
print(not [1, 2, 3])
print(not {1: 2})
print(not set())
```
## or

Operação [[Boolean | booleana]] que checa se uma das variáveis é [[#True]]

| $S_0$ | $S_1$ | Output |
| ----- | ----- | ------ |
| 0     | 0     | 0      |
| 0     | 1     | 1      |
| 1     | 0     | 1      |
| 1     | 1     | 1      |

```python
True or False
```
## pass

Palavra reservada que não faz nada, mas ajuda em códigos que ou precisa implementar mais funcionalidade ou classes (LINK LINK LINK), ou partes do código que não teriam funcionalidade, mas se não tiver texto o código quebra

```python
try:
	1/0
except:
	pass # Não faz nada

```

## raise

Usada para chamar uma [[Lista de Exceptions | Exception]]

```python
raise ValueError
```

## return

Usada para retornar um valor em uma função ou método (LINK LINK LINK)

```python
def add_one(x):
	return x + 1

add_one(5)
```
## try

Palavra base junto com o [[#except]] para o manuseio de [[Try and Except | erros]]

```python
try:
	print("Hello ")
	1/0
	print("World")
except:
	print("Fail")

```
## while

Laço de repetição (LINK LINK LINK)
```python
i = 0
while i < 5:
	print(i)
	i+=1
```

## with

Gerenciador de contexto (LINK LINK LINK)

## yield

Palavra para geradores e iteradores (LINK LINK LINK)

# Soft Keywords:

Essas são palavras bases que tem funcionalidades no `python` mas que podem ser usadas como nome de variáveis ou outros contextos, mas não é recomendado pois trará comportamentos não desejados
## _

O underscore aparece em vários contextos, mas de forma implícita, como por exemplo ao fazer operações sem setar a uma variável

```python
1 + 1
print(_)
```

É possível setar uma variável com esse nome e usa-la de forma direta, como por exemplo

```python
_ = 2
print(_)

_ + 2

print(_)
```

Ou para outros conceitos como

```python
def _():
	return 2
	
_()

2 + 1

print(_)
```

Perceba que perdeu a funcionalidade padrão do undrscore, dessa forma não é recomendado usar isso, além disso o underscore aparece no match case (LINK LINK LINK) como saída caso não haja a opção desejada

```python
x = 3
match x:
	case 1:
		print("One")
	case 2:
		print("Two")
	case _:
		print("Don't Know")
```

## case

Palavra reservada para o match case (LINK LINK LINK)

```python
x = 2
match x:
	case 1:
		print("One")
	case 2:
		print("Two")
```

## match
Palavra reservada para o match case (LINK LINK LINK)

```python
x = 2
match x:
	case 1:
		print("One")
	case 2:
		print("Two")
```
## type

O `type`, tem uma funcionalidade muito importante, que é identificar o tipo da variável, como por exemplo

```python
type(5)
type(5.0)
type(5 + 0j)
type("A")

def foo():
	pass

type(foo)

type(type)

type(match)
``` 
