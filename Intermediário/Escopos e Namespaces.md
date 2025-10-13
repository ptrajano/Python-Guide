
Esses [dois conceitos](- [https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces](https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces)) falam sobre como e onde variáveis e seus nomes são acessíveis dentro de um programa

# Namespaces

Um [namespace](https://docs.python.org/3/reference/executionmodel.html#naming-and-binding) é a forma que o `python` encontrou para mapear os nomes (identificadores), com os seus objetos (LINK LINK LINK), ele é parecido com um [[Dicionário|dicionário]], onde as chaves são os nomes das variáveis e os seus valores são os objetos

```python
x = 10 # global namespace

def foo():
	y = 20 # local namespace
	print(x, y) 

foo() 
```

Os namespaces podem ser criados em momentos diferentes (como o da função), eles tem tempo de vida diferente, como quando a função parar de ser executada o namespace da função será apagado, são hierárquicos entre si e são isolados entre si.

## Built-in Namespace

Contém todos os nomes [built-in](- [https://docs.python.org/3/library/builtins.html](https://docs.python.org/3/library/builtins.html)) do `python`, como as [[Funções Nativas]], os [[Lista de Exceptions|Tipos de Exceptions]], etc. É criado quando o interpretador do `python` inicia e não é deletado enquanto o programa estiver executando.

```python
print(len)
print(print)
print(ValueError)

import builtins

print(dir(builtins))
```

## Global Namespace

Criado quando um módulo é importado e dura até que o interpretador termine.

```python
GLOBAL_VAR = "HI!!"

def foo():
	...

class A:
	...
	
print(globals().keys())
```

## Local Namespace

Criado quando uma [[Funções|função]] ou classe (LINK LINK LINK) é chamada e deletado quando ela não é mais executada ou deixa de existir, além disso, se estiver fora de uma função, o [[Funções Nativas#globals|globals]] será o próprio [[Funções Nativas#locals|locals]].

```python
def foo():
	a = 10
	print(locals())

a = 15
foo()
print(locals())
```

```python
class A:
	def __init__(self, value):
		self.value = value
	
	def get_locals(self):
		return locals()
	
var = A(10)

print(var.get_locals())

var.b = 15

print(var.get_locals())

del var # del class and it's namespace
```

## Hierarquia de Namespaces

`Python` segue uma **ordem específica** quando procura por nomes, conhecida como **[LEGB Rule](https://realpython.com/python-scope-legb-rule/)**
1. **L** - Local (dentro da função atual)
2. **E** - Enclosing (funções externas)
3. **G** - Global (módulo)
4. **B** - Built-in (Python built-ins)

# Escopos

**Escopo** define a **região do programa** onde um [[#Namespaces|namespace]] é acessível. É a **visibilidade** dos nomes em diferentes partes do código.

## Escopo Local

Variáveis definidas dentro de uma [[Funções|função]] ou classe (LINK LINK LINK)

```python
def foo():
	# local scope
	a = 10
	return a + 1
```

## Escopo Enclosing

Variáveis em funções externas

```python
def foo():
	# enclosing scope
	a = 10
	def internal_foo():
		# local scope
		return a + 1
	
	return internal_foo()
		
```

## Escopo Global

Variáveis definidas no nível do módulo.

```python
# global scope
STATE = 'debugging'
```

## Escopo Built-in

Nomes pré-definidos pelo `Python`.

```python
len([1, 2, 3]) # len is in built-in scope
```

## Controle de variáveis em outro escopos

A palavra [[Palavras Restritas#global|global]] permite modificar variáveis no escopo global, enquanto a [[Palavras Restritas#nonlocal|nonlocal]] permite modificar no escopo enclosing.

# Casos Especiais

## Compressão de Lista e seu Escopo

Ao usar uma [[List Comprehension|list comprehension]], o escopo local vira o que está sendo executado dentro da compressão, ou seja ao criar um nome de variável dentro dela, mesmo que exista no escopo não-local essa variável externa não será modificada. Mas nas versões do `python 2.x-` não se criava esse novo escopo local.

```python
x = 10

my_list = [x for x in range(10)]

print(f"{my_list=}")
print(f"{x=}")
```

## Variáveis livres ([[Lista de Exceptions#`UnboundLocalError`|UnboundLocalError]])

```python
x = 10
def foo():
	print(x)
	x = 5
	
foo()
```

## Escopo da Classe (LINK LINK LINK)

```python
x = 'global'

class MyClass:
	x = 'class'
	
	def method(self):
		x = 'local'
		print(f"Local: {x}")
		print(f"Class: {MyClass.x}") # or self.x
		print(f"Global: {globals()['x']")

MyClass().method()
```

## [Closures e Variáveis Livres](https://peps.python.org/pep-0227/)

```python
def create_foo() -> list:
	foo_list = []
	
	for i in range(3):
		def foo():
			return i
		
		foo_list.append(foo)
		
	return foo_list
	
foo_list = create_foo()

print([f() for f in foo_list]) # output is [2, 2, 2] instead of [0, 1, 2]
```

```python
def create_foo() -> list:
	foo_list = []
	
	for i in range(3):
		def foo(value = i):
			return value
		
		foo_list.append(foo)
		
	return foo_list
	
foo_list = create_foo()

print([f() for f in foo_list]) # [0, 1, 2]
```


## Importância

Esses conceitos são importantes não só para o entendimento geral da linguagem, mas também em [questão de performance](https://dev.to/alwarg/how-variable-scoping-affects-the-performance-4eg2), pois acessar namespaces de escopos internos tende a ser mais custoso. E não só isso, não traz comportamentos de difícil entendimento, nem erros, além disso é uma ótima prática trabalhar somente dentro do próprio namespace, trazendo as variáveis dos escopos externos através dos argumentos das funções ou dos métodos, e no caso da classe, o intuito é não precisar sair do namespace da classe, que é o que é feito ao passar o `self` como parâmetro.