As `exceptions` do `python` são construídas como classes, e todas elas derivam da classe `Exception` que contêm a estrutura base de todas, ou seja, se quiser criar uma nova exceção é possível herdando da classe base [Python Exceptions](https://docs.python.org/3/library/exceptions.html).

```python
class NewException(Exception):
	pass
	
raise NewException("This is a new exception example")
```


## Hierarquia de Exceções

[[#BaseException]]
 ├── BaseExceptionGroup
 ├── [[#GeneratorExit]]
 ├── [[#KeyboardInterrupt]]
 ├── [[#SystemExit]]
 └── [[#Exception]]
      ├── [[#ArithmeticError]]
      │    ├── [[#FloatingPointError]]
      │    ├── [[#OverflowError]]
      │    └── [[#ZeroDivisionError]]
      ├── [[#AssertionError]]
      ├── [[#AttributeError]]
      ├── [[#BufferError]]
      ├── [[#EOFError]]
      ├── [[#EnvironmentError]]
	  ├── ExceptionGroup [BaseExceptionGroup]
      ├── [[#ImportError]]
      │    └── [[#ModuleNotFoundError]]
      ├── [[#LookupError]]
      │    ├── [[#IndexError]]
      │    └── [[#KeyError]]
      ├── [[#MemoryError]]
      ├── [[#NameError]]
      │    └── [[#UnboundLocalError]]
      ├── [[#OSError]]
      │    ├── BlockingIOError
      │    ├── ChildProcessError
      │    ├── ConnectionError
      │    │    ├── BrokenPipeError
      │    │    ├── ConnectionAbortedError
      │    │    ├── ConnectionRefusedError
      │    │    └── ConnectionResetError
      │    ├── FileExistsError
      │    ├── FileNotFoundError
      │    ├── InterruptedError
      │    ├── IsADirectoryError
      │    ├── NotADirectoryError
      │    ├── PermissionError
      │    ├── ProcessLookupError
      │    └── TimeoutError
      ├── [[#ReferenceError]]
      ├── [[#RuntimeError]]
      │    ├── [[#NotImplementedError]]
      │    ├── [[#PythonFinalizationError]]
      │    └── [[#RecursionError]]
      ├── [[#StopAsyncIteration]]
      ├── [[#StopIteration]]
      ├── [[#SyntaxError]]
      │    └── [[#IndentationError]]
      │         └── [[#TabError]]
      ├── [[#SystemError]]
      ├── [[#TypeError]]
      ├── [[#ValueError]]
      │    └── [[#UnicodeError]]
      │         ├── [[#UnicodeDecodeError]]
      │         ├── [[#UnicodeEncodeError]]
      │         └── [[#UnicodeTranslateError]]
      └── [[#Warning]]
           ├── [[#BytesWarning]]
           ├── [[#DeprecationWarning]]
           ├── [[#EncodingWarning]]
           ├── [[#FutureWarning]]
           ├── [[#ImportWarning]]
           ├── [[#PendingDeprecationWarning]]
           ├── [[#ResourceWarning]]
           ├── [[#RuntimeWarning]]
           ├── [[#SyntaxWarning]]
           ├── [[#UnicodeWarning]]
           └── [[#UserWarning]]

Tiradas de [Python Exceptions](https://docs.python.org/3/library/exceptions.html).

## Classes bases
### `BaseException`

A classe base para todas as `Exceptions`, porém não deve ser herdada diretamente para definições de exceções de usuários, pois existem diferentes tipos de `Exceptions` que trabalham com diferentes parâmetros, até por isso é perigoso misturar diferentes tipos de `Exceptions` no [[Try and Except]], pois a `Exception` pode funcionar de forma diferente

```python
try:
	...
except (ZeroDivisionError, BlockingIOError) as e:
	print(e.errno)
```

O atributo `errno` existe no `BlockingIOError` mas não no `ZeroDivisionError`, então esse código teria comportamento inesperado.

### `Exception`

Todas as exceções que não são saídas de sistemas são derivadas dessa classe, e as criadas por usuários também devem

### `ArithmeticError`

Usada para erros aritméticos

### `BufferError`

Usada para erros de operações de Buffer

### `LookupError`

A classe base para erros de checagem de memória, como [[#IndexError]] ou [[#KeyError]] que acontecem quando tentam acessar um elemento que não existe de um vetor, por exemplo.

## Exceções 
Essas são as exceções que se usam com o `raise` normalmente

### `AssertionError`

Exceção chamada quando acontece uma declaração de assertion falha

```python
assert(1 == 0)
```

### `AttributeError`

Ocorre quando ocorre um erro relacionado a um atributo 

```python
x = 10
x.append(1)
```

### `EOFError`

Chamada por input quado uma `EOF` (End of File) é chamada, o `EOF` é diferente do `Enter`, ele é chamada através do `ctrlD` no linux ou `ctrlZ` no windows que são as [EOF](https://pt.stackoverflow.com/questions/312242/tratamento-de-exce%C3%A7%C3%A3o-do-tipo-eoferror).

```python
input() # Press Ctrl + D or Ctrl + Z depending on the system
```

## EnvironmentError



### `FloatingPointError`

Não está implementada em nenhuma função nativa do `python` 

### `GeneratorExit`
Chamada quando um `generator` ou co-rotina é fechada, neste [exemplo](https://realpython.com/ref/builtin-exceptions/generatorexit/) conseguimos ver aonde que ele é chamado

```python
def count_up(max_value):
	try:
		count = 1
		while count <= max_value:
			yield count
			count+=1
	except GeneratorExit:
		print("Generator is closing...")
		
counter = count_up(5)
print(next(counter))

counter.close()
```

Perceba que se tirarmos o [[Try and Except]]

```python
def count_up(max_value):
	count = 1
	while count <= max_value:
		yield count
		count+=1
		
counter = count_up(5)
print(next(counter))

counter.close()
```

Não tem o `raise`, pois ela é tratada como somente uma saída, mas a exceção é chamada.

### `ImportError`
É chamado quando o `python` tem dificuldade de carregar um módulo, esse é um `exception` extremamente problemático se acontecer, pois ela é bastante importante para o funcionamento do sistema. É importante ressaltar que se um módulo não é encontrado é chamado o erro [[#ModuleNotFoundError]]

### `ModuleNotFoundError`

É chamado quando um módulo ou uma biblioteca não é encontrada no sistema

```python
import error_test
```

### `IndexError`

Chamada quando tenta acessar uma posição invalida de uma sequência 
```python
x = [1, 2, 3]
print(x[3])
```

### `KeyError`

Chamada quando uma chave de dicionário não é encontrada 

```python
x = {0: 'a', 1: 'b'}
print(x[2])
```

### `KeyboardInterrupt`

Chamada quando teclas de interrupção são chamadas, normalmente `ctrlC`

```python
input() #press ctrl + c
```

### `MemoryError`

Chamada quando uma operação acaba com a memória 

```python
['a'] * int(1e10)
```

### `NameError`

Chamada quando um nome não é encontrada em nenhum escopo

```python
print(y)
```

### `NotImplementedError`

Um erro criado para quando uma parte do sistema não foi implementada ainda, ela é feita para programadores que estão fazendo projetos grandes

```python
class A:
	def test(self):
		raise NotImplementedError
		
A().test()
```

### `OSError`

Chamada quando uma função do sistema retorna um [erro de sistema](https://docs.python.org/3/library/exceptions.html#os-exceptions), incluindo erros de I/O como um arquivo não encontrado ou disco cheio.

### `OverflowError`

Chamada quando uma operação aritmética é muito grande para ser representada, ele não é chamado para operações de inteiros, pela forma que o `python` implementa, ele chama o [[#MemoryError]]

```python
def pi(): 
    pi = 0 
    for k in range(350): 
        pi += (4./(8.*k+1.) - 2./(8.*k+4.) - 1./(8.*k+5.) - 1./(8.*k+6.)) / 16.**k 
    return pi
    
print(pi()) 
```
[Exemplo](https://stackoverflow.com/questions/20201706/why-do-i-get-overflowerror-34-result-too-large-or-overflowerror-34)

### `PythonFinalizationError`

É chamada quando uma operação é bloqueada durante o [desligamento do interpretador](https://docs.python.org/3/glossary.html#term-interpreter-shutdown).

### `RecursionError`

Erro que ocorre quando chega no número máximo de recursões possíveis

```python
def fib(n: int) -> int:
	return fib(n - 1) + fib(n - 2)
	
fib(0)
```

Neste caso a falta de uma condição de parada de recursão acaba gerando um erro de recursão, mas é possível obter esse erro mesmo com condição de parada certa

```python
def fib(n: int) -> int:
	if n <= 1:
		return 1
	return fib(n - 1) + fib(n - 2)
	
fib(1000)
```

### `ReferenceError`

Chamada quando ocorre uma [weak reaference proxy](https://docs.python.org/3/library/weakref.html) .

### `RuntimeError`

Erro de [Runtime](https://discuss.python.org/t/meaning-of-runtimeerror/56206/2) é um erro que acontece durante a execução do código, mas que não cai em uma das categorias que é definida, ele é diferente de [erros de sintaxe](#SyntaxError) que não deixariam o código começar ou erros de lógica que gerariam erros nos resultados mas não no programa. [Posso usar RuntimeError para erros em geral?](https://stackoverflow.com/questions/31035769/python-is-runtimeerror-acceptable-for-general-use)

```python
raise RuntimeError('config file is missing host address')
```

```python
def apply_opt(self, opt, val):
	 ''' Apply command line option. ''' 
	 options = self.options 
	 if opt == '-o': 
		 options.ontology_path = val 
	 elif opt == '-P': 
		 options.physical = True
	else: 
		raise RuntimeError("unhandled option")
```
[Significado de RuntimeError](https://discuss.python.org/t/meaning-of-runtimeerror/56206/2)

### `StopIteration`

Acontece quando o `next` é chamado em um `iterator` e não tem valor para seguir 

```python
def count_up(max_value):
	try:
		count = 1
		while count <= max_value:
			yield count
			count+=1
	except GeneratorExit:
		print("Generator is closing...")
		
counter = count_up(5)
for i in range(6):
	print(next(counter))
```

### `StopAsyncIteration`

Semelhante ao [[#StopIteration]], mas para funções `async` pelo `anext`

### `SyntaxError`

Erro de sintaxe

```python
i = for
```

### `IndentationError`

Erro de indentação dentro do `python`

```python
if True:
print("There is no identation here")
```

### `TabError`

Acontece quando as indentações tem um número diferente de tabs ou espaços, por exemplo

```python
for i in range(5):
	print(i) # 1 tab pressed
    print(i) # 4 spaces pressed
```
[TabError](https://stackoverflow.com/questions/70928106/what-is-taberror-inconsistent-use-of-tabs-and-spaces-in-indentation-and-why-is)

### `SystemError`

Acontece quando o interpretador encontra um erro interno de sistema

### `SystemExit`

Chamada quando se chama o `sys.exit()`, mas é derivada de [[#BaseException]] para que não seja pega pelo [[Try and Except]], pois sempre será necessário sair do programa.

### `TypeError`

Chamada quando uma operação ou função é aplicada em um objeto que não deveria 

```python
1 + 'a'
```

### `UnboundLocalError`

Acontece quando uma referência é feita para uma variável local dentro de uma função ou método, mas não tem valor naquela variável

```python
counter = 0

def increment():
	counter += 1
	
increment()
```
[UnboundLocalError](https://stackoverflow.com/questions/9264763/why-does-this-unboundlocalerror-occur-closure)
### `UnicodeError`

Acontece quando um erro relacionado a codificação ou decodificação de um unicode ocorre 

### `UnicodeEncodeError`

Acontece quando ocorre um erro de codificação do unicode

### `UnicodeDecodeError`

Acontece quando ocorre um erro de decodificação do unicode

### `UnicodeTranslateError`

Ocorre quando tem um erro de tradução de um unicode

### `ValueError`

Acontece quando uma função recebe o tipo certo de dado mas um valor errado 

```python
import math

math.sqrt(-1)
```

### `ZeroDivisionError`

Acontece quando ocorre uma divisão por zero

```python
1/0
```

## `Warnings`

São exceções que são tratadas como [Warnings](https://docs.python.org/3/library/warnings.html#warning-categories) 

### `Warning`

A classe base para todas as warnings e  é uma subclasse de [[#Exception]], então é possível criar suas proprias warnings derivando dessa classe

### `UserWarning`

Classe base para todas as warnings de usuário

### `DeprecationWarning`

Chamada quando uma função está deprecada 

### `PendingDeprecationWarning`

Chamada para funções que estão obsoletas e que serão deprecadas no futuro

### `SyntaxWarning`

Classe base para avisos de sintaxe, normalmente ocorre quando compila o código base do `python`

### `RuntimeWarning`

Acontece quando um comportamento dúbio ocorre durante a execução

### `FutureWarning`

Usada para avisar sobre funções deprecadas para usuários finais de alguma aplicação implementada em `python`


### `ImportWarning` 

Usada para avisar sobre possíveis erros em importação [Python Import Warning](https://stackoverflow.com/questions/28047850/python-import-warning)

### `UnicodeWarning`

Warnings de Unicode

### `EncodingWarning`

Warnings de Enconding

### `BytesWarning`

Warnings de Bytes e Bytearray

### `ResourceWarning`

Warning de recursos, só aparece se estiver usando o mode de desenvolvedor do `python`

