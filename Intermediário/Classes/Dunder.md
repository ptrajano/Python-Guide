Dunder (Double Under) ou métodos mágicos em Python são métodos que no começo e no final do nome tem dois underscores (`__`), eles são definidos através de classes e comumente usados para sobrecarregar um operador ([Dunders](https://www.geeksforgeeks.org/python/dunder-magic-methods-python/)), mas são encontrados de forma nativa no python, como pode ser usando a função `dir` 

```python
print(dir())
```



Foi usado o seguinte site para pegar todos os dunders ([Lista de dunders](https://www.pythonmorsels.com/every-dunder-method/]))

| Classifciação                                                                      | Operação                                                              | Dunder Method Call         | Returns               | Link                      | Importância |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------- | --------------------- | ------------------------- | ----------- |
| Criação de Objetos                                                                 | `x = T(a, b)`                                                         | `x.__init__(a, b)`         | `None`                | [[#__init__]]             |             |
| Criação de Objetos                                                                 | `x = T(a, b)`                                                         | `T.__new__(T, a, b)`       | New instance (`x`)    | [[#__new__]]              |             |
| Finalização                                                                        | `del x` (ish)                                                         | `x.__del__()`              | `None`                | [[#__del__]]              |             |
| Comparação                                                                         | `x == y`                                                              | `x.__eq__(y)`              | Typically `bool`      | [[#__eq__]]               |             |
| Comparação                                                                         | `x != y`                                                              | `x.__ne__(y)`              | Typically `bool`      | [[#__ne__]]               |             |
| Comparação                                                                         | `x < y`                                                               | `x.__lt__(y)`              | Typically `bool`      | [[#__lt__]]               |             |
| Comparação                                                                         | `x > y`                                                               | `x.__gt__(y)`              | Typically `bool`      | [[#__gt__]]               |             |
| Comparação                                                                         | `x <= y`                                                              | `x.__le__(y)`              | Typically `bool`      | [[#__le__]]               |             |
| Comparação                                                                         | `x >= y`                                                              | `x.__ge__(y)`              | Typically `bool`      | [[#__ge__]]               |             |
| Hashabilidade                                                                      | `hash(x)`                                                             | `x.__hash__()`             | `int`                 | [[#__hash__]]             |             |
| Conversão                                                                          | `repr(x)`                                                             | `x.__repr__()`             | Always `str`          | [[#__repr__]]             |             |
| Conversão                                                                          | `str(x)`                                                              | `x.__str__()`              | Always `str`          | [[#__str__]]              |             |
| Conversão                                                                          | `bool(x)`                                                             | `x.__bool__()`             | Always `bool`         | [[#__bool__]]             |             |
| Conversão                                                                          | `int(x)`                                                              | `x.__int__()`              | Always `int`          | [[#__int__]]              |             |
| Conversão                                                                          | `float(x)`                                                            | `x.__float__()`            | Always `float`        | [[#__float__]]            |             |
| Conversão                                                                          | `bytes(x)`                                                            | `x.__bytes__()`            | Always `bytes`        | [[#__bytes__]]            |             |
| Conversão                                                                          | `complex(x)`                                                          | `x.__complex__()`          | Always `complex`      | [[#__complex__]]          |             |
| Conversão                                                                          | `format(x, s)`                                                        | `x.__format__(s)`          | Always `str`          | [[#__format__]]           |             |
| Gerenciador de contexto                                                            | `with x as c:`                                                        | `x.__enter__()`            | The `c` object        | [[#__enter__]]            |             |
| Gerenciador de contexto                                                            | `with x as c:`                                                        | `x.__exit__()`             | Truthy/falsey value   | [[#__exit__]]             |             |
| Coleção                                                                            | `len(x)`                                                              | `x.__len__()`              | `int`                 | [[#__len__]]              |             |
| Coleção                                                                            | `iter(x)`                                                             | `x.__iter__()`             | An iterator           | [[#__iter__]]             |             |
| Coleção                                                                            | `x[a]`                                                                | `x.__getitem__(a)`         |                       | [[#__getitem__]]          |             |
| Coleção                                                                            | `x[a] = b`                                                            | `x.__setitem__(a, b)`      | `None`                | [[#`__setitem__`]]        |             |
| Coleção                                                                            | `del x[a]`                                                            | `x.__delitem__(a)`         | `None`                | [[#`__delitem__`]]        |             |
| Coleção                                                                            | `a in x`                                                              | `x.__contains__(a)`        | `bool`                | [[#`__contains__`]]       |             |
| Coleção                                                                            | `reversed(x)`                                                         | `x.__reversed__()`         | An iterator           | [[#`__reversed__`]]       |             |
| Coleção                                                                            | `next(x)`                                                             | `x.__next__()`             | Next iterator item    | [[#`__next__`]]           |             |
| Coleção                                                                            | `x[a]`                                                                | `x.__missing__(a)`         |                       | [[#`__missing__`]]        |             |
| Coleção                                                                            |                                                                       | `x.__length_hint__()`      | `int`                 | [[#`__length_hint__`]]    |             |
| Callabilidade                                                                      | `x()`                                                                 | `x.__call__()`             |                       | [[#`__call__`]]           |             |
| Aritmético                                                                         | `x + y`                                                               | `x.__add__(y)`             |                       | [[#`__add__`]]            |             |
| Aritmético                                                                         | `x + y`                                                               | `y.__radd__(x)`            |                       | [[#`__radd__`]]           |             |
| Aritmético                                                                         | `x - y`                                                               | `x.__sub__(y)`             |                       | [[#`__sub__`]]            |             |
| Aritmético                                                                         | `x - y`                                                               | `y.__rsub__(x)`            |                       | [[#`__rsub__`]]           |             |
| Aritmético                                                                         | `x * y`                                                               | `x.__mul__(y)`             |                       | [[#`__mul__`]]            |             |
| Aritmético                                                                         | `x * y`                                                               | `y.__rmul__(x)`            |                       | [[#`__rmul__`]]           |             |
| Aritmético                                                                         | `x / y`                                                               | `x.__truediv__(y)`         |                       | [[#`__truediv__`]]        |             |
| Aritmético                                                                         | `x / y`                                                               | `y.__rtruediv__(x)`        |                       | [[#`__rtruediv__`]]       |             |
| Aritmético                                                                         | `x % y`                                                               | `x.__mod__(y)`             |                       | [[#`__mod__`]]            |             |
| Aritmético                                                                         | `x % y`                                                               | `y.__rmod__(x)`            |                       | [[#`__rmod__`]]           |             |
| Aritmético                                                                         | `x // y`                                                              | `x.__floordiv__(y)`        |                       | [[#`__floordiv__`]]       |             |
| Aritmético                                                                         | `x // y`                                                              | `y.__rfloordiv__(x)`       |                       | [[#`__rfloordiv__`]]      |             |
| Aritmético                                                                         | `x ** y`                                                              | `x.__pow__(y)`             |                       | [[#`__pow__`]]            |             |
| Aritmético                                                                         | `x ** y`                                                              | `y.__rpow__(x)`            |                       | [[#`__rpow__`]]           |             |
| Aritmético                                                                         | `x @ y`                                                               | `x.__matmul__(y)`          |                       | [[#`__matmul__`]]         |             |
| Aritmético                                                                         | `x @ y`                                                               | `y.__rmatmul__(x)`         |                       | [[#`__rmatmul__`]]        |             |
| Aritmético                                                                         | `x & y`                                                               | `x.__and__(y)`             |                       | [[#`__and__`]]            |             |
| Aritmético                                                                         | `x & y`                                                               | `y.__rand__(x)`            |                       | [[#`__rand__`]]           |             |
| Aritmético                                                                         | `x \| y`                                                              | `x.__or__(y)`              |                       | [[#`__or__`]]             |             |
| Aritmético                                                                         | `x \| y`                                                              | `y.__ror__(x)`             |                       | [[#`__ror__`]]            |             |
| Aritmético                                                                         | `x ^ y`                                                               | `x.__xor__(y)`             |                       | [[#`__xor__`]]            |             |
| Aritmético                                                                         | `x ^ y`                                                               | `y.__rxor__(x)`            |                       | [[#`__rxor__`]]           |             |
| Aritmético                                                                         | `x >> y`                                                              | `x.__rshift__(y)`          |                       | [[#`__rshift__`]]         |             |
| Aritmético                                                                         | `x >> y`                                                              | `y.__rrshift__(x)`         |                       | [[#`__rrshift__`]]        |             |
| Aritmético                                                                         | `x << y`                                                              | `x.__lshift__(y)`          |                       | [[#`__lshift__`]]         |             |
| Aritmético                                                                         | `x << y`                                                              | `y.__rlshift__(x)`         |                       | [[#`__rlshift__`]]        |             |
| Aritmético                                                                         | `-x`                                                                  | `x.__neg__()`              |                       | [[#`__neg__`]]            |             |
| Aritmético                                                                         | `+x`                                                                  | `x.__pos__()`              |                       | [[#`__pos__`]]            |             |
| Aritmético                                                                         | `~x`                                                                  | `x.__invert__()`           |                       | [[#`__invert__`]]         |             |
| Funções Matemáticas                                                                | `divmod(x, y)`                                                        | `x.__divmod__(y)`          | 2-item tuple          | [[#`__divmod__`]]         |             |
| Funções Matemáticas                                                                | `divmod(x, y)`                                                        | `y.__rdivmod__(x)`         | 2-item tuple          | [[#`__rdivmod__`]]        |             |
| Funções Matemáticas                                                                | `abs(x)`                                                              | `x.__abs__()`              | `float`               | [[#`__abs__`]]            |             |
| Funções Matemáticas                                                                |                                                                       | `x.__index__()`            | `int`                 | [[#`__index__`]]          |             |
| Funções Matemáticas                                                                | `round(x)`                                                            | `x.__round__()`            | Number                | [[#`__round__`]]          |             |
| Funções Matemáticas                                                                | `math.trunc(x)`                                                       | `x.__trunc__()`            | Number                | [[#`__trunc__`]]          |             |
| Funções Matemáticas                                                                | `math.floor(x)`                                                       | `x.__floor__()`            | Number                | [[#`__floor__`]]          |             |
| Funções Matemáticas                                                                | `math.ceil(x)`                                                        | `x.__ceil__()`             | Number                | [[#`__ceil__`]]           |             |
| Atribuição                                                                         | `x += y`                                                              | `x.__iadd__(y)`            | Typically `self`      | [[#`__iadd__`]]           |             |
| Atribuição                                                                         | `x -= y`                                                              | `x.__isub__(y)`            | Typically `self`      | [[#`__isub__`]]           |             |
| Atribuição                                                                         | `x *= y`                                                              | `x.__imul__(y)`            | Typically `self`      | [[#`__imul__`]]           |             |
| Atribuição                                                                         | `x /= y`                                                              | `x.__itruediv__(y)`        | Typically `self`      | [[#`__itruediv__`]]       |             |
| Atribuição                                                                         | `x %= y`                                                              | `x.__imod__(y)`            | Typically `self`      | [[#`__imod__`]]           |             |
| Atribuição                                                                         | `x //= y`                                                             | `x.__ifloordiv__(y)`       | Typically `self`      | [[#`__ifloordiv__`]]      |             |
| Atribuição                                                                         | `x **= y`                                                             | `x.__ipow__(y)`            | Typically `self`      | [[#`__ipow__`]]           |             |
| Atribuição                                                                         | `x @= y`                                                              | `x.__imatmul__(y)`         | Typically `self`      | [[#`__imatmul__`]]        |             |
| Atribuição                                                                         | `x &= y`                                                              | `x.__iand__(y)`            | Typically `self`      | [[#`__iand__`]]           |             |
| Atribuição                                                                         | `x \|= y`                                                             | `x.__ior__(y)`             | Typically `self`      | [[#`__ior__`]]            |             |
| Atribuição                                                                         | `x ^= y`                                                              | `x.__ixor__(y)`            | Typically `self`      | [[#`__ixor__`]]           |             |
| Atribuição                                                                         | `x >>= y`                                                             | `x.__irshift__(y)`         | Typically `self`      | [[#`__irshift__`]]        |             |
| Atribuição                                                                         | `x <<= y`                                                             | `x.__ilshift__(y)`         | Typically `self`      | [[#`__ilshift__`]]        |             |
| Atributos                                                                          | `x.y`                                                                 | `x.__getattribute__('y')`  |                       | [[#`__getattribute__`]]   |             |
| Atributos                                                                          | `x.y`                                                                 | `x.__getattr__('y')`       |                       | [[#`__getattr__`]]        |             |
| Atributos                                                                          | `x.y = z`                                                             | `x.__setattr__('y', z)`    | `None`                | [[#`__setattr__`]]        |             |
| Atributos                                                                          | `del x.y`                                                             | `x.__delattr__('y')`       | `None`                | [[#`__delattr__`]]        |             |
| Atributos                                                                          | `dir(x)`                                                              | `x.__dir__()`              | An iterable           | [[#`__dir__`]]            |             |
| Descriptors                                                                        | `class T: x = U()`                                                    | `T.x.__set_name__(T, 'x')` | `None`                | [[#`__set_name__`]]       |             |
| Descriptors                                                                        | `t.x`                                                                 | `T.x.__get__(t, T)`        |                       | [[#`__get__`]]            |             |
| Descriptors                                                                        | `t.x = y`                                                             | `T.x.__set__(t, y)`        | `None`                | [[#`__set__`]]            |             |
| Descriptors                                                                        | `del t.x`                                                             | `T.x.__delete__(t)`        | `None`                | [[#`__delete__`]]         |             |
| Coisa de Classe                                                                    | `class U(T): ...`                                                     | `T.__init_subclass__(U)`   | `None`                | [[#`__init_subclass__`]]  |             |
| Coisa de Classe                                                                    | `class U(x): ...`                                                     | `x.__mro_entries__([x])`   | `tuple`               | [[#`__mro_entries__`]]    |             |
| Coisa de Classe                                                                    | `T[y]`                                                                | `T.__class_getitem__(y)`   |                       | [[#`__class_getitem__`]]  |             |
| Metaclasses                                                                        | `class T: ...`                                                        | `type(base).__prepare__()` | `dict`/mapping        | [[#`__prepare__`]]        |             |
| Metaclasses                                                                        | `isinstance(x, T)`                                                    | `T.__instancecheck__(x)`   | `bool`                | [[#`__instancecheck__`]]  |             |
| Metaclasses                                                                        | `issubclass(U, T)`                                                    | `T.__subclasscheck__(U)`   | `bool`                | [[#`__subclasscheck__`]]  |             |
| Async                                                                              | `await x` (ish)                                                       | `x.__await__()`            | An iterator           | [[#`__await__`]]          |             |
| Async                                                                              | `async with x:`                                                       | `x.__aenter__()`           | An awaitable          | [[#`__aenter__`]]         |             |
| Async                                                                              | `async with x:`                                                       | `x.__aexit__()`            | An awaitable          | [[#`__aexit__`]]          |             |
| Async                                                                              | `async for a in x:`                                                   | `x.__aiter__()`            | An awaitable          | [[#`__aiter__`]]          |             |
| Async                                                                              | `async for a in x:`                                                   | `x.__anext__()`            | An awaitable          | [[#`__anext__`]]          |             |
| Buffers                                                                            | `memoryview(x)`                                                       | `x.__buffer__(flags)`      | `memoryview`          | [[#`__buffer__`]]         |             |
| Buffers                                                                            | `del memoryview(x)`                                                   | `x.__release_buffer__(m)`  | `None`                | [[#`__release_buffer__`]] |             |
|                                                                                    |                                                                       |                            |                       |                           |             |
| Dataclasses                                                                        | `x = T(a, b)`                                                         | `T.__post_init__(a, b)`    | `None`                | [[#`__post_init__`]]      |             |
| Copy & replace                                                                     | `copy.replace(x)`                                                     | `x.__replace__(**attrs)`   | New object            | [[#`__replace__`]]        |             |
| Copying                                                                            | `copy.copy(x)`                                                        | `x.__copy__()`             | New object            | [[#`__copy__`]]           |             |
| Copying                                                                            | `copy.deepcopy(x)`                                                    | `x.__deepcopy__(memo)`     | New object            | [[#`__deepcopy__`]]       |             |
| [Pickling](https://docs.python.org/3/library/pickle.html#pickling-class-instances) | `pickle.dumps(x)`                                                     | `x.__getnewargs__()`       | A 2-item tuple        | [[#`__getnewargs__`]]     |             |
| Pickling                                                                           | `pickle.dumps(x)`                                                     | `x.__getnewargs_ex__()`    | A 2-item tuple        | [[#`__getnewargs_ex__`]]  |             |
| Pickling                                                                           | `pickle.dumps(x)`                                                     | `x.__getstate__()`         | A meaningful state    | [[#`__getstate__`]]       |             |
| Pickling                                                                           | `pickle.dumps(x)`                                                     | `x.__reduce__()`           | A 2-6 item tuple      | [[#`__reduce__`]]         |             |
| Pickling                                                                           | `pickle.dumps(x)`                                                     | `x.__reduce_ex__(4)`       | A 2-6 item tuple      | [[#`__reduce_ex__`]]      |             |
| Pickling                                                                           | `pickle.loads(b)`                                                     | `x.__setstate__(state)`    | `None`                | [[#`__setstate__`]]       |             |
| [pathlib](https://www.pythonmorsels.com/pathlib-module/)                           | [`os.fspath(x)`](https://docs.python.org/3/library/os.html#os.fspath) | `p.__fspath__()`           | `str` or `bytes`      | [[#`__fspath__`]]         |             |
| sys                                                                                | `sys.getsizeof(x)`                                                    | `x.__sizeof__()`           | `int` (size in bytes) | [[#`__sizeof__`]]         |             |
| Class stuff                                                                        | None?                                                                 | `x.__subclasses__()`       | Subclasses iterable   | [[#`__subclasses__`]]     |             |
| ABCs                                                                               | `issubclass(U, T)`                                                    | `T.__subclasshook__(U)`    | `bool`                | [[#`__subclasshook__`]]   |             |


`__init__`
Comparação
Coleção
Aritmético
Funções matemáticas

# Criação de Objetos
## `__init__`

O Dunder `__init__` está relacionado a inicialização de atributos de uma classe, ela é necessária para basicamente toda classe que recebe parâmetros como argumento quando é inicializada

```python
class Animal:
	def __init__(self, species: str, name: str, weight: float) -> None:
		self.species = species
		self.name = name
		self.weight = weight
		
puppy_01 = Animal('dog', 'max', 10.2)
puppy_02 = Animal('dog', 'pluto', 14.5)

print(puppy_01.name)
print(puppy_02.name)
```

Ao criar uma instância de uma classe,  os parâmetros que a classe recebe são os parâmetros que são os argumentos do `__init__`, e esse atributo  não retorna nada, pois é um processo interno da criação da classe

## `__new__`
Normalmente em linguagens orientadas a objetos, as classes precisam ter um constructor, que é ligado a criação da classe e um destructor, que é relacionado com a liberação de memória da classe. Python é um pouco diferente, pois ele tem esses dois objetos, mas também tem um inicializador `__init__` que inicia os atributos de um objeto. Na maior parte dos códigos não se usa o `__new__`, que é o constructor, ele é chamado antes do inicializador e está relacionado na criação da instância, e trabalha com o objeto classe de forma direta, e por causa disso deve ser usado com mais cuidado, além de pensar se de fato é necessário trabalhar com esse método. Os exemplos foram tirados de  ([`__init__` vs `__new__`](https://geekpython.in/init-vs-new)) .

```python
class Language:
	def __new__(cls, *args, **kwargs) -> object:
		print("__new__ method called")
		return super().__new__(cls)
	
	def __init__(self, name: str, date: int) -> None:
		print("__init__ method called")
		self.name = name
		self.date = date
		
python = Language('pyhon', 1991)
```

Em primeiro lugar o `__new__` trabalha diretamente com `cls`, ao invés de `self` que é o mais usual, isso se da pois, novamente ele trabalha diretamente com a classe e não com a instância dela (`self`). Além disso ele recebe os mesmos parâmetros do `__init__`, mas não usa eles diretamente, mas é necessário coloca-los para o seu funcionamento. Para as versões de `python2` a criação de classe era da seguinte forma

```python
class Class(object):
	...
```

Essa escrita esta  obsoleta, ainda funciona nas versões de `python3`, mas não é indicada, mas nesse caso ela nos ajuda a entender o `super`, o `super` no `__new__` é herdado do `object` do `python`, ele usa o `__new__` do `object` para fazer o constructor. Não sei se existe alguma outra forma de fazer o constructor sem usar o `super`. 
Uma forma mais direta para entender a criação de uma classe é criar em partes a classe, da seguinte forma

```python
language = object.__new__(Language)
language.__init__('Python', 1991)
```

Aqui está um exemplo de como "seria" o funcionamento interno da criação de uma classe, em primeiro lugar chama o `__new__` diretamente do `object` e em seguida faz o `__init__`.  Perceba que se tentarmos fazer `language.name` entre as duas linhas acontecerá um erro, pois a instância não foi inicializada. Um dos casos mais conhecidos e práticos desse método é usado no padrão de design Singleton (LINK LINK LINK)

# Finalização

## `__del__`

Esse dunder é o destructor do `python`, ele trabalha com a limpeza da memória da classe. Ele é chamado através da keyword `del` (LINK LINK LINK).

```python
class Animal:
	def __init__(self, name: str) -> None:
		self.name = name 
		
	def __del__(self) -> None:
		print("__del__ method call")

dog = Animal('dog')
del dog
```

O `__del__` é outro dunder que é útil por exemplo se o programador estiver fazendo um logging de todas as operações que aconteceram na vida da instância. Um ponto importante para se ressaltar é que o usual em `python` é não tratar diretamente com a alocação e liberação de memória, então todo esse processo acontecesse por trás sem precisar ser explicitado no código, por isso o dunder `__del__` é chamado automaticamente no final da execução do código. Muito provavelmente não será necessário utilizar a ketword `del`, pois o `python` já faz isso, um dos casos que talvez seja necessário utilizar é quando está trabalhando com códigos pesados na memória que tem chance de estoura-la, nesses casos é possível trabalhar mais diretamente com a criação e a destruição de instâncias visando economia de memória,  mas uma prática melhor seria a utilização de estruturas de dados em que isso não é necessário, por exemplo, se você está trabalhando com um banco de dados gigante, e você quer fazer uma análise nos dados, muito provavelmente é melhor trabalhar em batchs de código (uma forma simplória seria uma lista de tamanho fixo em que os elementos são substituídos ao longo da execução).

Outro ponto importante é entender que o contrário do `__del__` é o  `__new__`, e não o `__init__`, isso pode ser visto por esse exemplo  ([__del__ & __init__](https://www.algorithm.co.il/programming/python-gotchas-1-__del__-is-not-the-opposite-of-__init__/)).

```python
class A:
	def __init__(self, x: int) -> None:
		self.x = x
			if x == 0:
				raise ValueError
				
	def __del__(self):
		print("__del__  method called")
```

Neste exemplo ao acontecer o erro na inicialização o destructor vai ser chamado, pois o constructor já foi chamado, mas se fizer o mesmo exemplo com o `__new__` isso não vai, pois a instância da classe não foi criada ainda.

# Comparação

## `__eq__`

O dunder `__eq__` trabalha com a igualdade (`==`) de dois objetos de classe, uma classe sem esse dunder não consegue comparar dois objetos

```python
class Person():
	def __init__(self, name: str, age: int) -> None:
		self.name = name
		self.age = age
		
	def __eq__(self, otr: object) -> bool:
		return self.name == otr.name and self.age == otr.age
```

Esse dunder é bastante útil para a criação de objetos que precisam ser comparados, mas é importante de ressaltar alguns pontos, por exemplo, normalmente tenta comparar dois objetos iguais, mas o `python` aceita que o `otr` seja qualquer objeto possível, como pode ser visto na seguinte classe 

```python
class Integer:
	def __init__(self, num: int) -> None:
		self.num = num
		
	def __eq__(self, otr) -> bool:
		if isinstance(otr, (int, float)):
			return self.num == otr # otr is an integer or float
		if isinstance(otr, self): #otr is an instance of Intenger class
			return self.num == otr.num
			
		return False
```

Outro ponto é saber a diferença entre a igualdade e o `is`, o `is` checa se dois objetos são iguais e não se seus valores são iguais, ele é trabalhado em (LINK LINK LINK).

## `__ne__`

O dunder `__ne__` (not equal) trabalha com a diferença (`!=`) 

```python
class Integer:
	def __init__(self, num: int) -> None:
		self.num = num
		
	def __ne__(self, otr) -> bool:
		if isinstance(otr, (int, float)):
			return self.num != otr # otr is an integer or float
		if isinstance(otr, self): #otr is an instance of Intenger class
			return self.num != otr.num
			
		return True
```
## `__lt__`

O dunder `__lt__` (less than) trabalha com a desigualdade é menor que (`<`) 

```python
class Integer:
	def __init__(self, num: int) -> None:
		self.num = num
		
	def __lt__(self, otr) -> bool:
		return self.num < otr.num
```

## `__gt__`

O dunder `__gt__` (greater than) trabalha com a desigualdade é maior que (`>`) 

```python
class Integer:
	def __init__(self, num: int) -> None:
		self.num = num
		
	def __gt__(self, otr) -> bool:
		return self.num > otr.num
```

## `__le__`

O dunder `__le__` (less or equal than) trabalha com a desigualdade é menor ou igual que (`<=`) 

```python
class Integer:
	def __init__(self, num: int) -> None:
		self.num = num
		
	def __le__(self, otr) -> bool:
		return self.num <= otr.num
```

## `__ge__`

O dunder `__ge__` (greater or equal than) trabalha com a desigualdade é maior ou igual que (`<=`) 

```python
class Integer:
	def __init__(self, num: int) -> None:
		self.num = num
		
	def __ge__(self, otr) -> bool:
		return self.num >= otr.num
```

# Hashabilidade

## `__hash__`

Esse dunder trabalha com o hash de uma classe,  é importante entender o funcionamento do hash para entender essa função

```python
class Point:
	def __init__(self, x: float, y: float) -> None:
		self.x = x
		self.y = y
		
	def __hash__(self) -> int:
		return hash((self.x, self.y))
```

# Conversão

## `__str__`

Esse dunder trata com a representação de uma classe na sua forma de string, ou seja ela é usada para, como por exemplo, o print de uma classe

```python
class Point:
	def __init__(self, x: float, y: float) -> None:
		self.x = x
		self.y = y

point = Point(1, 2)
print(point)
```

Nesse caso, o print vai retornar informações genéricas da classe pois o método em questão não foi implementado

```python
class Point:
	def __init__(self, x: float, y: float) -> None:
		self.x = x
		self.y = y
		
	def __str__(self) -> str:
		return f"({self.x}, {self.y})"

point = Point(1, 2)
print(point)
```

Neste caso, o output é o que esperamos normalmente, além disso outro caso que é útil é a conversão para a representação `str` dela.

```python
class Integer:
	def __init__(self, num: int) -> None:
		self.num = num
		
	def __str__(self) -> str:
		return str(self.num)
		
num = Integer(10)
str_num = str(num)
print(str_num[::-1])
```

Esse é provavelmente é um dos dunders mais importantes, pois ele é útil em basicamente todos os casos de classe, e nem só isso, é uma boa prática sempre cria-lo. Além disso, é importante ressaltar que o output do `__str__` tem que ser uma string, se não acontecerá erro.
## `__repr__`

Esse dunder é idêntico ao [[#__str__]], mas o seu propósito é diferente, e de fato, esse dunder é útil e entra em boa prática, deveria ser feito para todas as classes, enquanto o `__str__` é voltado a representar algo legível, como por exemplo para o usuário, o `__repr__` tem o intuito de não ter ambiguidade, ou seja ele é muito mais voltado para o programador em si, é possível que ele seja usado para debugging, ou logging, mas para isso existem opções melhores. Aonde o `__repr__` se mostra útil é pensar no seguinte. Eu quero ter informação o suficiente para fazer uma cópia de si próprio, ou seja `eval(repr(c)) = c` essa igualdade não é no sentido de atribuição (usual de programação)  e sim no matemático de igualdade, esse é o propósito mais otimista, mas faz bastante sentido, ele é a representação mais clara de todo o objeto. Aqui está uma forma de representar buscando esse ideal

```python
class Person:
	def __init__(self, name: str, age: int) -> None:
		self.name = name
		self.age = age
		
	def __repr__(self) -> str
		return f"{self.__class__.__name__}({', '.join([f"{d} = {repr(getattr(person, d))}" for d in dir(self) if '__' not in d])})"


person = Person('Pedro', 24)

print(repr(person))
```

Se fizer o `eval` nesse `repr` o objeto criado vai ser idêntico a nossa classe, sua implementação foi tal que essa solução funciona para muitos casos, em primeiro lugar ele trabalha com os dunders internos da classe para obter o próprio nome da classe `self.__class__.__name__` e em seguida monta a estrutura dos seus parâmetros, checando quais métodos não contêm um `__` (double under). Perceba que  não estamos checando de fato se não é um método dunder estamos só evitando um método que se contêm dois underscores, além disso não estamos checando se é um método ou atributo, e não só isso, não está chegando se o atributo é de inicialização ou não (pode ser uma variável interna da classe), além disso se a classe tiver outras classes como atributos de inicialização é necessário que essas classes também tenham o `repr` que tenha a característica de replicação. Por causa disso é otimista fazer uma solução que englobe todos os casos, talvez seja possível, mas vale a pena a complexidade do código para isso? Muitas das vezes algo simples, como de fato escrever os atributos diretamente seja melhor

```python
class Person:
	def __init__(self, name: str, age: int) -> None:
		self.name = name
		self.age = age
		
	def __repr__(self) -> str
		return f"Person(name = {self.name}, age = {self.age})"


person = Person('Pedro', 24)

print(repr(person))
```

O output é o mesmo, mas a escrita é mais simples, porém perde na portabilidade. Esse é um tradeoff de cada projeto, e é necessário estudar cada um caso a caso. 
Por último é importante ressaltar que se `__str__` não estiver implementado o `__repr__` é chamado nas funcionalidades do `__str__`, mas o caso contrário não ocorre ([`__str__ vs __repr__`](https://stackoverflow.com/questions/1436703/what-is-the-difference-between-str-and-repr#2626364)).
## `__bool__`

Esse dunder é simples, o intuito dele é criar o significado de `bool(classe)` [[Funções Nativas#bool|bool]]

```python
class Bit:
	def __init__(self, state: bool) -> None:
		self.state = state
		
	def __bool__(self) -> bool:
		return state
```

## `__int__`

Esse dunder implementa o `int(classe)` [[Funções Nativas#int|int]]

```python
class Bit:
	def __init__(self, state: bool) -> None:
		self.state = state
		
	def __int__(self) -> int:
		return int(state)

```

## `__float__`

Esse dunder implementa o `float(classe)` [[Funções Nativas#float|float]]

```python
class Bit:
	def __init__(self, state: bool) -> None:
		self.state = state
		
	def __float__(self) -> float:
		return float(state)

```

## `__bytes__`

Esse dunder implementa o `bytes(classe)` [[Funções Nativas#bytes|bytes]]

```python
class Bit:
	def __init__(self, state: bool) -> None:
		self.state = state
		
	def __bytes__(self) -> bytes:
		return bytes(state)

```

## `__complex__`

Esse dunder implementa o `complex(classe)` [[Funções Nativas#complex|complex]]

```python
class Bit:
	def __init__(self, state: bool) -> None:
		self.state = state
		
	def __complex__(self) -> complex:
		return complex(state)

```

## `__format__`
# Gerenciador de contexto

Esses dunders geram o comportamento do [[Gerenciador de Contexto]] em classe, deixando fazer

```python
with Class as c:
	...
```

## `__enter__`

Esse daqui implementa o que precisa fazer ao entrar no gerenciador de contexto

## `__exit__`

Esse daqui implementa o que precisa fazer ao sair no gerenciador de contexto

# Coleção

## `__len__`

## `__iter__`

## `__getitem__`

## `__setitem__`

## `__delitem__`

## `__contains__`

## `__reversed__`

## `__next__`

## `__missing__`

## `__length_hint__`

# Callabilidade

## `__call__`

# Aritmético

## `__add__`

## `__radd__`

## `__sub__`

## `__rsub__`

## `__mul__`

## `__rmul__`

## `__truediv__`

## `__rtruediv__`

## `__mod__`

## `__rmod__`

## `__floordiv__`

## `__rfloordiv__`

## `__pow__`

## `__rpow__`

## `__matmul__`

## `__rmatmul__`

## `__and__`

## `__rand__`

## `__or__`

## `__ror__`

## `__xor__`

## `__rxor__`

## `__rshift__`

## `__rrshift__`

## `__lshift__`

## `__rlshift__`

## `__neg__`

## `__pos__`

## `__invert__`

# Funções Matemáticas

## `__divmod__`

## `__rdivmod__`

## `__abs__`

## `__index__`

## `__round__`

## `__trunc__`

## `__floor__`

## `__ceil__`

# Atribuição

## `__iadd__`

## `__isub__`

## `__imul__`

## `__itruediv__`

## `__imod__`

## `__ifloordiv__`

## `__ipow__`

## `__imatmul__`

## `__iand__`

## `__ior__`

## `__ixor__`

## `__irshift__`

## `__ilshift__`


# Atributos

## `__getattribute__`

## `__getattr__`

## `__setattr__`

## `__delattr__`

## `__dir__`

# Descriptors

## `__set_name__`

## `__get__`

## `__set__`

## `__delete__`

# Coisa de Classe

## `__init_subclass__`

## `__mro_entries__`

## `__class_getitem__`

## `__subclasses__`

# Metaclasses

## `__prepare__`

## `__instancecheck__`

## `__subclasscheck__`

# Async

## `__await__`

## `__aenter__`

## `__aexit__`

## `__aiter__`

## `__anext__`


# Buffers

## `__buffer__`

## `__release_buffer__`

# Dataclasses

## `__post_init__`

# Copy & replace

## `__replace__`

# Copying

## `__copy__`

## `__deepcopy__`


# Pickling

## `__getnewargs__`

## `__getnewargs_ex__`

## `__getstate__`

## `__reduce__`

## `__reduce_ex__`

## `__setstate__`

# pathlib

## `__fspath__`

# sys

## `__sizeof__`

# ABCs

## `__subclasshook__`

