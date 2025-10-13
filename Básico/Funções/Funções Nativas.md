As [funções nativas](https://docs.python.org/3/library/functions.html) do `python` são funções que não precisam ser chamadas através de bibliotecas, elas já estão implementadas de forma direta na linguagem
## abs

Essa função retorna o valor absoluto de um número, podendo ser um [[Integer | inteiro]], [[Float | float]] ou [[Complex | número complexo]], e pode ser implementada utilizando o [[Dunder | dunder]] [[Dunder#`__abs__` | __abs__]], para  usar em um outro objeto não nativo do `python`. Além disso os [[Boolean | booleanos]] por serem classes que herdam do `int`, ela também funciona, mas não tem pra que

```python
print(abs(-1))
print(abs(5.13))
print(abs(1 + 2j))
print(True)
```

## `aiter` e `anext`

Funções para trabalhar com **[[Iteradores e Geradores|iteradores]] [[Assync|assíncronos]]** (`Python 3.10+`).

```python
import asyncio

class AsyncCounter:
    def __init__(self, stop):
        self.stop = stop
        self.current = 0
    
    def __aiter__(self):
        return self
    
    async def __anext__(self):
        if self.current >= self.stop:
            raise StopAsyncIteration
        await asyncio.sleep(0.1)  # some assync operation
        self.current += 1
        return self.current - 1

async def example():
    async for num in AsyncCounter(3):
        print(f"Number: {num}")


async def example_next():
    counter = AsyncCounter(3)
    a_iter = aiter(counter) 
    
    try:
        while True:
            num = await anext(a_iter)
            print(f"Number: {num}")
    except StopAsyncIteration:
        print("End of Iteration")

# Running
# asyncio.run(example())
# asyncio.run(example_anext())
```
## all

Essa função é usada para checar **se todos os elementos** em um [[Iteradores e Geradores|iterador]] são verdadeiros ([[Palavras Restritas#True|True]])

```python
print(any([True, True, True]))
print(any([True, True, False]))
print(any([]))
```
## any

Retorna [[Palavras Restritas#True]] se **pelo menos um** elemento do iterável for verdadeiro.

```python
print(any([False, False, True]))
print(any([]))
```
## ascii

Retorna uma [[String|string]] contendo uma representação imprimível de um objeto (LINK LINK LINK), escapando caracteres não-[ASCII](https://pt.wikipedia.org/wiki/ASCII).

```python
print(ascii("hello"))
print(ascii("ñandú"))
print(ascii("🚀"))
```

## bin

Converte um número inteiro para uma [[String|string]] binária com prefixo "0b" (Diferente de [[Bytes]]). 

```python
print(bin(10))

print(bin(-5))
```
## bool

Converte um valor para [[Boolean|booleano]] ([[Palavras Restritas#True|True]] ou [[Palavras Restritas#False|False]]).

```python
print(bool(False))      # Output: False
print(bool(0))          # Output: False
print(bool(0.0))        # Output: False
print(bool(""))         # Output: False
print(bool([]))         # Output: False
print(bool({}))         # Output: False
print(bool(None))       # Output: False

print(bool(True))       # Output: True
print(bool(1))          # Output: True
print(bool(0.1))        # Output: True
print(bool("hello"))    # Output: True
print(bool([1, 2, 3]))  # Output: True
print(bool({"a": 1}))   # Output: True
```
## breakpoint

Inicia um debugger no ponto onde é chamada (`Python 3.7+`).

```python
def foo(x, y):
    res = x + y
    
    breakpoint() # stop here in execution
    
    res *= 2
    return res
```
## bytearray

Cria um [[Lista|array]] mutável de [[Bytes|bytes]], perceba que é diferente do [[Bytes]], que foi apresentado, pois é mutável, ele é um objeto (LINK LINK LINK) por si só.

```python
ba1 = bytearray()
ba2 = bytearray(5)
b3 = bytes(b'hello')

print(ba1)
print(ba2)
print(ba3)
```

## bytes

Cria um objeto de [[Bytes|bytes]] imutável.

```python
b1 = bytes()
b2 = bytes(5)
b3 = bytes(b'hello')

print(b1)
print(b2)
print(b3)
```

## callable

Verifica se um objeto pode ser chamado (como uma [[Funções|função]] ou método (LINK LINK LINK)).

```python
def foo():
	print("Hello")
	
class A:
	pass
	
print(callable(foo))

print(callable(A))

print(callable(callable))

print(callable("Hello"))
```

## chr

Retorna o caractere correspondente a um código Unicode.

```python
print(chr(65))
print(chr(97))

print(chr(128512))
```

## classmethod

Transforma um método em método de classe (LINK LINK LINK), isso é um [[Decorators|decorator]].

```python
class Person:
    counter = 0
    
    def __init__(self, name):
        self.name = name
        Person.counter += 1
    
    @classmethod
    def get_counter(cls):
        return cls.counter
    
    @classmethod
    def create_annonymous(cls):
        return cls("Annonymous")
    
    @classmethod
    def from_dict(cls, data):
        return cls(data['name'])
```
## compile

Compila código `Python` em um objeto (LINK LINK LINK) código que pode ser executado, usando [[#eval]].

```python
code = "x + y"
compiled_code = compile(code, '<string>', 'eval')

x, y = 10, 20
res = eval(compiled_code)
print(res)
```
## complex

Cria [[Complex|números complexos]].

```python
c1 = complex(3, 4)  
c2 = complex(5)     
c3 = complex('2+3j')

print(c1)
print(c2)
print(c3)
```
## copyright, credits e license

Funções que exibem informações de copyright, créditos e licença do `Python`.

```python
copyright()
```

```python
credits()
```

```python
license()
```
## delattr

Deleta um atributo (LINK LINK LINK) de um objeto (LINK LINK LINK) dinamicamente.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
p = Person("João", 30)

delattr(p, 'age')
# equiv to del p.age

print(hasattr(p, 'age'))
```
## dict

Cria um [[Dicionário|dicionário]].

```python
d1 = dict()                          
d2 = dict([('a', 1), ('b', 2)])      
d3 = dict(a=1, b=2, c=3)            
d4 = {'a': 1, 'b': 2}               
d5 = dict(zip(['a', 'b'], [1, 2]))

print(d1)
print(d2)
print(d3)
print(d4)
print(d5)
```
## dir

Retorna [[Lista|lista]] de nomes no escopo local (LINK LINK LINK) ou atributos (LINK LINK LINK) de um objeto (LINK LINK LINK).

```python
print(dir(str))

x = 10

print(dir(x))

print(dir)
```

```python
class A:
	def method():
		...
		
dir(A())
```

```python
import math

dir(math)
```

## divmod

Retorna quociente e resto da divisão de dois números ([[Integer|inteiros]] ou [[Float|floats]]).

```python
print(divmod(10, 3))
print(divmod(10.5, 3))
```
## enumerate

Retorna um [[Iteradores e Geradores|iterador]] de uma [[Tupla|tupla]] (índice, valor) de uma sequência.

```python
fruit_list = ['apple', 'banana', 'orange']
for idx, fruit in enumerate(fruit_list):
    print(f"{idx}: {fruit}")
```
## eval

Avalia uma expressão `Python` passada como [[String|string]]. Essa função é extremamente perigosa, não se deve usa-la se não houver qualquer tipo de validação antes de usa-la.

```python
res = eval("2 + 3 * 4")
print(res)

x = 10
y = 20
res = eval("x + y")
print(res)
```
## exec

Executa código `Python` dinamicamente (para statements, não expressões). Leia o que foi falado em [[#eval]], essa função é perigosa.

```python
code = """
x = 10
y = 20
res = x + y
"""

exec(code)
print(res)
```
## exit

Sai do interpretador `Python` ou termina a execução do programa.

```python
exit(0) # No error occured
```

```python
	exit(1) # There was an error with code 1
```

## filter

Filtra elementos de um [[Iteradores e Geradores|iterável]] baseado em uma [[Funções|função]].

```python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = filter(lambda x: x % 2 == 0, nums)
print(list(evnes))
```
## float

Converte para [[Float|número de ponto flutuante]].

```python
print(float(10))
print(float(-5))

print(float(True))
print(float(False))
```

## format

Formata um valor usando formatação específica (Parecido com a [[String#`f-string`|f-string]]).

```python
print(format(3.14159, ".2f"))    
print(format(1000000, ","))      
print(format(255, "x"))          
print(format(255, "b"))          

print(format("hello", ">10"))    
print(format("hello", "^10"))    
print(format("hello", "<10"))
```

## frozenset

Cria um conjunto imutável (similar ao [[Set|set]], mas não pode ser modificado), tem um melhor desempenho comparado ao [[Set|set]].

```python
fs1 = frozenset()                    
fs2 = frozenset([1, 2, 3, 2, 1])    
fs3 = frozenset('banana')           
fs4 = frozenset({'a': 1, 'b': 2})

print(fs1)
print(fs2)
print(fs3)
print(fs4)
```

## getattr

Obtém o valor de um atributo de um objeto dinamicamente (LINK LINK LINK).

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def hello(self):
        return f"Hello, i am {self.name}"
        
p = Person('Pedro', 24)

print(getattr(p, 'name')) #  equiv to p.name
```
## globals

Retorna um [[Dicionário|dicionário]] representando a tabela de símbolos globais atual (LINK LINK LINK).

```python
x = 10
y = "hello"
my_list = [1, 2, 3]

print(globals())

print(globals()['x'])

print(globals()['my_list'])
```

## hasattr

Verifica se um objeto (LINK LINK LINK) possui um atributo (LINK LINK LINK) com o nome especificado.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def hello(self):
        return f"Hello, i am {self.name}"
        
p = Person('Pedro', 24)

print(hasattr(p, 'age'))
```
## hash

Retorna o valor hash (LINK LINK LINK)de um objeto (LINK LINK LINK) (se ele for hasheável).

```python
print(hash("hello"))           
print(hash(42))                
print(hash(3.14))              
print(hash((1, 2, 3)))
```

## help

Invoca o sistema de ajuda integrado do `Python`.

```python
help(print)

import math

help(math)
```
## hex

Converte um [[Integer|número inteiro]] para uma [[String|string]] hexadecimal com prefixo "0x".

```python
print(hex(255))     
print(hex(16))      
print(hex(0))       
print(hex(-42))
```

## id

Retorna a "identidade" de um objeto (LINK LINK LINK) (um inteiro único e constante durante a vida do objeto). A palavra restrita [[Palavras Restritas#is|is]] `x is y` equivale a comparação `id(x) == id(y)`

```python
x = [1, 2, 3]
y = [1, 2, 3]

print(id(x))
print(id(y))
```

## input

Lê uma linha da [[Input e Output|entrada padrão]] (normalmente o teclado).

```python
name = input('What is your name')

print(name)
```
## int

Converte para [[Integer|número inteiro]].

```python
print(int("42"))        
print(int("101", 2))    # base 2
print(int("FF", 16))    # base hex
print(int("77", 8))     # base oct

print(int(3.14))
```
## isinstance

Verifica se um objeto (LINK LINK LINK) é uma instância de uma classe (LINK LINK LINK) ou de uma [[Tupla|tupla]] de classes.

```python
print(isinstance(10, int))
print(isinstance("hello", str))

class Animal:
	...
	
class Dog(Animal):
	...
	
rex = Dog()

print(isinstance(rex, Dog))
print(isinstance(rex, Animal))
```
## issubclass

Verifica se uma classe é subclasse de outra classe (LINK LINK LINK).

```python
class Animal:
	...
	
class Dog(Animal):
	...
	
print(issubclass(Dog, Animal))

print(issubclass(bool, int))
```

## iter

Retorna um [[Iteradores e Geradores|iterador]] para um objeto (LINK LINK LINK).

```python
my_list = [1, 2, 3]
iter_list = iter(my_list)

print(next(iter_list))
print(next(iter_list))
```

## len

Retorna o comprimento (número de itens) de um objeto (LINK LINK LINK).

```python
print(len("hello"))

print(len([1, 2, 3]))
```

## list

Cria uma nova [[Lista|lista]].

```python
list1 = list()
list2 = list([1, 2, 3])
list3 = list("hello")
list4 = list(range(5))

print(list1)
print(list2)
print(list3)
print(list4)
```

## locals

Retorna um [[Dicionário|dicionário]] representando a tabela de símbolos locais (LINK LINK LINK) atual.

```python
def foo():
    x = 10
    y = "hello"
    z = [1, 2, 3]
    
    local = locals()
    print(local)
    
abc = 20

foo()
```
## map

Aplica uma [[Funções|função]] a todos os itens de um [[Iteradores e Geradores|iterável]].

```python
nums = [1, 2, 3, 4, 5]
double = map(lambda x: x * 2, nums)

print(double)
```
## max

Retorna o maior item em um [[Iteradores e Geradores|iterável]] ou o maior de dois ou mais argumentos.

```python
print(max([1, 5, 2, 8, 3]))
```
## memoryview

Retorna um objeto "memory view" que expõe o buffer protocol de um objeto.

```python
data = b'hello world'
mv = memoryview(data)

print(mv)
```
## min

Retorna o menor item em um [[Iteradores e Geradores|iterável]] ou o maior de dois ou mais argumentos.

```python
print(min([1, 5, 2, 8, 3]))
```

## next

Retorna o próximo item de um [[Iteradores e Geradores|iterador]].

```python
my_list = [1, 2, 3]
iter_list = iter(my_list)

print(next(iter_list))
print(next(iter_list))
```
## object

Retorna um novo objeto sem características (a classe base de todas as classes (LINK LINK LINK)). É uma classe, mas é colocada aqui.

```python
obj = object()
print(type(obj))

print(isinstance(obj, object))
print(isinstance(10, object))
print(isinstance("hello", object))
```
## oct

Converte um [[Integer|número inteiro]] para uma [[String|string]] octal com prefixo "0o".

```python
print(oct(8))  
print(oct(255))
print(oct(0))  
print(oct(-10))
```
## open

Abre um arquivo e retorna um objeto arquivo, deve ser usado com [[Gerenciador de Contexto]].

```python
with open('file.txt', 'w') as f
	f.write('Hello World!')
```

## ord

Retorna o código Unicode de um caractere (inverso do [[#chr]]).

```python
print(ord('A'))    
print(ord('a'))    
print(ord('0'))

print(ord('😀'))
```

## pow

Retorna a base elevada à potência exp, ou base^exp módulo mod.

```python
print(pow(2, 3)) # 2 ** 3 = 8

print(pow(4, 3, 5)) # (4 ** 3) % 5 = (64) % 5 = 4
```

## print

Imprime objetos no [[Input e Output|stream de texto]], separados por sep e seguidos por end.

```python
print("Hello, World!")
```

## property

Retorna uma propriedade de atributo (usado como [[Decorators|decorator]] para criar getters, setters e deleters).

```python
class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    @property
    def name(self):
        """Getter"""
        return self._name.title() 
    
    @nome.setter
    def name(self, value):
        if not value or not isinstance(value, str):
            raise ValueError("Name must be a non empty string")
        self._name = value
    
    @nome.deleter
    def nome(self):
        print("Deleting Name...")
        self._nome = None
```
## quit

Sai do interpretador `Python`, normalmente usado no interpretador iterativo.

```python
>>> quit()
```

## range

Retorna uma [[Iteradores e Geradores|sequência]] imutável de [[Integer|números inteiros]].

```python
print(list(range(5)))
print(list(range(10, 0, -1)))	
```

## repr

Retorna uma [[String|string]] representando o objeto, ler [[Dunder#`__repr__`|__repr__]].

```python
print(repr("hello"))       
print(repr(42))
```

## reversed

Retorna um [[Iteradores e Geradores|iterador]] reverso.

```python
my_list = [1, 2, 3, 4, 5]
print(list(reversed(my_list)))
```
## round

Arredonda um número para um determinado número de dígitos decimais.

```python
print(round(3.14159)) # 3        
print(round(3.14159, 2)) # 3.14

print(round(1234, -2)) # 1200
print(round(1234, -3)) # 1000
```
## set

Cria um [[Set|set].

```python
s1 = set()                          
s2 = set([1, 2, 3, 2, 1])          
s3 = set("banana")                 
s4 = {1, 2, 3}

print(s1)
print(s2)
print(s3)
print(s4)
```

## setattr

Define o valor de um atributo (LINK LINK LINK) de um objeto dinamicamente.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        

p = Person('Pedro', 24)

setattr(p, 'age', 25) # equiv to p.age = 25

print(p.age)
```
## slice

Retorna um objeto [[Lista#Slicing|slice]] (usado para [[Lista#Slicing|fatiamento]]).

```python
s1 = slice(5)           # equiv to my_list[0:5]
s2 = slice(2, 8)        # equiv to my_list[2:8]
s3 = slice(1, 10, 2)    # equiv to my_list[1:10:2] 

my_list = list(range(10))

print(f"{my_list=}")
print(f"{my_list[s1]=}")
print(f"{my_list[s2]=}")
print(f"{my_list[s3]=}")
```

## sorted

Retorna uma nova [[Lista|lista]] ordenada a partir dos itens do [[Iteradores e Geradores|iterável]].

```python
nums = [3, 1, 4, 1, 5, 9, 2]
print(sorted(nums))

print(sorted(nums, reverse=True))

words = ["banana", "apple", "cherry", "date"]

print(sorted(words, key=len))
```
## staticmethod

Transforma um método em método (LINK LINK LINK) estático (não recebe `self` ou `cls`), é um [[Decorators|decorator]].

```python
class Calculator:
    @staticmethod
    def sum_nums(a, b):
        return a + b
        
print(Calculator.sum_nums(1, 2))
```
## str

Converte um objeto para [[String|string]].

```python
print(str(42))             
print(str(3.14))           
print(str(True))           
print(str([1, 2, 3]))
```
## sum

Retorna a soma dos itens de um [[Iteradores e Geradores|iterável]].

```python
print(sum([1, 2, 3, 4, 5]))
print(sum((10, 20, 30)))

print(sum([1, 2, 3], 10)) # initial value is 10
```
## super

Retorna um objeto proxy que delega chamadas de método para uma classe pai ou irmã (LINK LINK LINK).

```python
class Animal:
	def __init__(self, name):
		self.name = name
		
	def get_info(self):
		return f"His name is {name}"
		
class Dog(Animal):
	def __init__(self, name, breed):
		super().__init__(name)
		self.breed = breed
		
	def get_info(self):
		return f"{super().get_info()} and it's breed is {self.breed}"
	
rex = Dog('Rex', 'Poodle')

print(rex.get_info())
```

## tuple

Cria uma [[Tupla|tupla]].

```python
t1 = tuple()                   
t2 = tuple([1, 2, 3])          
t3 = tuple("hello")
```
## type

Retorna o tipo de um objeto ou cria uma nova classe (LINK LINK LINK).

```python
print(type(42))             
print(type("hello"))        
print(type([1, 2, 3]))      
print(type({"a": 1}))
```

## vars

Retorna o [[Dicionário|dicionário]] `__dict__` (LINK LINK LINK) de um objeto (LINK LINK LINK) ou o dicionário de símbolos locais.

```python
def foo():
    x = 10
    y = "hello"
    print(vars())
    
foo()
```
## zip

Agrupa elementos de múltiplos [[Iteradores e Geradores|iteráveis]].

```python
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
titles = ["Dev", "Analyst", "Manager"]

print(list(zip(names, ages, titles)))

for name, age, title in zip(names, ages, titles):
	print(name, age, title)
```