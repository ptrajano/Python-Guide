Dunder (Double Under) ou métodos mágicos em Python são métodos que no começo e no final do nome tem dois underscores (`__`), eles são definidos através de classes e comumente usados para sobrecarregar um operador ([Dunders](https://www.geeksforgeeks.org/python/dunder-magic-methods-python/)), mas são encontrados de forma nativa no python, como pode ser usando a função `dir` 

```python
print(dir())
```



Foi usado o seguinte site para pegar todos os dunders ([Lista de dunders](https://www.pythonmorsels.com/every-dunder-method/]))

| Classifciação                                                                      | Operação                                                              | Dunder Method Call         | Returns               | Link                                      | Importância |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------- | --------------------- | ----------------------------------------- | ----------- |
| Criação de Objetos                                                                 | `x = T(a, b)`                                                         | `x.__init__(a, b)`         | `None`                | [[#__init__]]                             |             |
| Criação de Objetos                                                                 | `x = T(a, b)`                                                         | `T.__new__(T, a, b)`       | New instance (`x`)    | [[#__new__]]                              |             |
| Finalização                                                                        | `del x` (ish)                                                         | `x.__del__()`              | `None`                | [[#__del__]]                              |             |
| Comparação                                                                         | `x == y`                                                              | `x.__eq__(y)`              | Typically `bool`      | [[#__eq__]]                               |             |
| Comparação                                                                         | `x != y`                                                              | `x.__ne__(y)`              | Typically `bool`      | [[#__ne__]]                               |             |
| Comparação                                                                         | `x < y`                                                               | `x.__lt__(y)`              | Typically `bool`      | [[#__lt__]]                               |             |
| Comparação                                                                         | `x > y`                                                               | `x.__gt__(y)`              | Typically `bool`      | [[#__gt__]]                               |             |
| Comparação                                                                         | `x <= y`                                                              | `x.__le__(y)`              | Typically `bool`      | [[#__le__]]                               |             |
| Comparação                                                                         | `x >= y`                                                              | `x.__ge__(y)`              | Typically `bool`      | [[#__ge__]]                               |             |
| Hashabilidade                                                                      | `hash(x)`                                                             | `x.__hash__()`             | `int`                 | [[#__hash__]]                             |             |
| Conversão                                                                          | `repr(x)`                                                             | `x.__repr__()`             | Always `str`          | [[#__repr__]]                             |             |
| Conversão                                                                          | `str(x)`                                                              | `x.__str__()`              | Always `str`          | [[#__str__]]                              |             |
| Conversão                                                                          | `bool(x)`                                                             | `x.__bool__()`             | Always `bool`         | [[#__bool__]]                             |             |
| Conversão                                                                          | `int(x)`                                                              | `x.__int__()`              | Always `int`          | [[#__int__]]                              |             |
| Conversão                                                                          | `float(x)`                                                            | `x.__float__()`            | Always `float`        | [[#__float__]]                            |             |
| Conversão                                                                          | `bytes(x)`                                                            | `x.__bytes__()`            | Always `bytes`        | [[#__bytes__]]                            |             |
| Conversão                                                                          | `complex(x)`                                                          | `x.__complex__()`          | Always `complex`      | [[#__complex__]]                          |             |
| Conversão                                                                          | `format(x, s)`                                                        | `x.__format__(s)`          | Always `str`          | [[#__format__]]                           |             |
| Gerenciador de contexto                                                            | `with x as c:`                                                        | `x.__enter__()`            | The `c` object        | [[#`__enter__` e `__exit__`\| __enter__]] |             |
| Gerenciador de contexto                                                            | `with x as c:`                                                        | `x.__exit__()`             | Truthy/falsey value   | [[#`__enter__` e `__exit__`\|__exit__]]   |             |
| Coleção                                                                            | `len(x)`                                                              | `x.__len__()`              | `int`                 | [[#__len__]]                              |             |
| Coleção                                                                            | `iter(x)`                                                             | `x.__iter__()`             | An iterator           | [[#__iter__]]                             |             |
| Coleção                                                                            | `x[a]`                                                                | `x.__getitem__(a)`         |                       | [[#__getitem__]]                          |             |
| Coleção                                                                            | `x[a] = b`                                                            | `x.__setitem__(a, b)`      | `None`                | [[#`__setitem__`]]                        |             |
| Coleção                                                                            | `del x[a]`                                                            | `x.__delitem__(a)`         | `None`                | [[#`__delitem__`]]                        |             |
| Coleção                                                                            | `a in x`                                                              | `x.__contains__(a)`        | `bool`                | [[#`__contains__`]]                       |             |
| Coleção                                                                            | `reversed(x)`                                                         | `x.__reversed__()`         | An iterator           | [[#`__reversed__`]]                       |             |
| Coleção                                                                            | `next(x)`                                                             | `x.__next__()`             | Next iterator item    | [[#`__next__`]]                           |             |
| Coleção                                                                            | `x[a]`                                                                | `x.__missing__(a)`         |                       | [[#`__missing__`]]                        |             |
| Coleção                                                                            |                                                                       | `x.__length_hint__()`      | `int`                 | [[#`__length_hint__`]]                    |             |
| Callabilidade                                                                      | `x()`                                                                 | `x.__call__()`             |                       | [[#`__call__`]]                           |             |
| Aritmético                                                                         | `x + y`                                                               | `x.__add__(y)`             |                       | [[#`__add__`]]                            |             |
| Aritmético                                                                         | `x + y`                                                               | `y.__radd__(x)`            |                       | [[#`__radd__`]]                           |             |
| Aritmético                                                                         | `x - y`                                                               | `x.__sub__(y)`             |                       | [[#`__sub__`]]                            |             |
| Aritmético                                                                         | `x - y`                                                               | `y.__rsub__(x)`            |                       | [[#`__rsub__`]]                           |             |
| Aritmético                                                                         | `x * y`                                                               | `x.__mul__(y)`             |                       | [[#`__mul__`]]                            |             |
| Aritmético                                                                         | `x * y`                                                               | `y.__rmul__(x)`            |                       | [[#`__rmul__`]]                           |             |
| Aritmético                                                                         | `x / y`                                                               | `x.__truediv__(y)`         |                       | [[#`__truediv__`]]                        |             |
| Aritmético                                                                         | `x / y`                                                               | `y.__rtruediv__(x)`        |                       | [[#`__rtruediv__`]]                       |             |
| Aritmético                                                                         | `x % y`                                                               | `x.__mod__(y)`             |                       | [[#`__mod__`]]                            |             |
| Aritmético                                                                         | `x % y`                                                               | `y.__rmod__(x)`            |                       | [[#`__rmod__`]]                           |             |
| Aritmético                                                                         | `x // y`                                                              | `x.__floordiv__(y)`        |                       | [[#`__floordiv__`]]                       |             |
| Aritmético                                                                         | `x // y`                                                              | `y.__rfloordiv__(x)`       |                       | [[#`__rfloordiv__`]]                      |             |
| Aritmético                                                                         | `x ** y`                                                              | `x.__pow__(y)`             |                       | [[#`__pow__`]]                            |             |
| Aritmético                                                                         | `x ** y`                                                              | `y.__rpow__(x)`            |                       | [[#`__rpow__`]]                           |             |
| Aritmético                                                                         | `x @ y`                                                               | `x.__matmul__(y)`          |                       | [[#`__matmul__`]]                         |             |
| Aritmético                                                                         | `x @ y`                                                               | `y.__rmatmul__(x)`         |                       | [[#`__rmatmul__`]]                        |             |
| Aritmético                                                                         | `x & y`                                                               | `x.__and__(y)`             |                       | [[#`__and__`]]                            |             |
| Aritmético                                                                         | `x & y`                                                               | `y.__rand__(x)`            |                       | [[#`__rand__`]]                           |             |
| Aritmético                                                                         | `x \| y`                                                              | `x.__or__(y)`              |                       | [[#`__or__`]]                             |             |
| Aritmético                                                                         | `x \| y`                                                              | `y.__ror__(x)`             |                       | [[#`__ror__`]]                            |             |
| Aritmético                                                                         | `x ^ y`                                                               | `x.__xor__(y)`             |                       | [[#`__xor__`]]                            |             |
| Aritmético                                                                         | `x ^ y`                                                               | `y.__rxor__(x)`            |                       | [[#`__rxor__`]]                           |             |
| Aritmético                                                                         | `x >> y`                                                              | `x.__rshift__(y)`          |                       | [[#`__rshift__`]]                         |             |
| Aritmético                                                                         | `x >> y`                                                              | `y.__rrshift__(x)`         |                       | [[#`__rrshift__`]]                        |             |
| Aritmético                                                                         | `x << y`                                                              | `x.__lshift__(y)`          |                       | [[#`__lshift__`]]                         |             |
| Aritmético                                                                         | `x << y`                                                              | `y.__rlshift__(x)`         |                       | [[#`__rlshift__`]]                        |             |
| Aritmético                                                                         | `-x`                                                                  | `x.__neg__()`              |                       | [[#`__neg__`]]                            |             |
| Aritmético                                                                         | `+x`                                                                  | `x.__pos__()`              |                       | [[#`__pos__`]]                            |             |
| Aritmético                                                                         | `~x`                                                                  | `x.__invert__()`           |                       | [[#`__invert__`]]                         |             |
| Funções Matemáticas                                                                | `divmod(x, y)`                                                        | `x.__divmod__(y)`          | 2-item tuple          | [[#`__divmod__`]]                         |             |
| Funções Matemáticas                                                                | `divmod(x, y)`                                                        | `y.__rdivmod__(x)`         | 2-item tuple          | [[#`__rdivmod__`]]                        |             |
| Funções Matemáticas                                                                | `abs(x)`                                                              | `x.__abs__()`              | `float`               | [[#`__abs__`]]                            |             |
| Funções Matemáticas                                                                |                                                                       | `x.__index__()`            | `int`                 | [[#`__index__`]]                          |             |
| Funções Matemáticas                                                                | `round(x)`                                                            | `x.__round__()`            | Number                | [[#`__round__`]]                          |             |
| Funções Matemáticas                                                                | `math.trunc(x)`                                                       | `x.__trunc__()`            | Number                | [[#`__trunc__`]]                          |             |
| Funções Matemáticas                                                                | `math.floor(x)`                                                       | `x.__floor__()`            | Number                | [[#`__floor__`]]                          |             |
| Funções Matemáticas                                                                | `math.ceil(x)`                                                        | `x.__ceil__()`             | Number                | [[#`__ceil__`]]                           |             |
| Atribuição                                                                         | `x += y`                                                              | `x.__iadd__(y)`            | Typically `self`      | [[#`__iadd__`]]                           |             |
| Atribuição                                                                         | `x -= y`                                                              | `x.__isub__(y)`            | Typically `self`      | [[#`__isub__`]]                           |             |
| Atribuição                                                                         | `x *= y`                                                              | `x.__imul__(y)`            | Typically `self`      | [[#`__imul__`]]                           |             |
| Atribuição                                                                         | `x /= y`                                                              | `x.__itruediv__(y)`        | Typically `self`      | [[#`__itruediv__`]]                       |             |
| Atribuição                                                                         | `x %= y`                                                              | `x.__imod__(y)`            | Typically `self`      | [[#`__imod__`]]                           |             |
| Atribuição                                                                         | `x //= y`                                                             | `x.__ifloordiv__(y)`       | Typically `self`      | [[#`__ifloordiv__`]]                      |             |
| Atribuição                                                                         | `x **= y`                                                             | `x.__ipow__(y)`            | Typically `self`      | [[#`__ipow__`]]                           |             |
| Atribuição                                                                         | `x @= y`                                                              | `x.__imatmul__(y)`         | Typically `self`      | [[#`__imatmul__`]]                        |             |
| Atribuição                                                                         | `x &= y`                                                              | `x.__iand__(y)`            | Typically `self`      | [[#`__iand__`]]                           |             |
| Atribuição                                                                         | `x \|= y`                                                             | `x.__ior__(y)`             | Typically `self`      | [[#`__ior__`]]                            |             |
| Atribuição                                                                         | `x ^= y`                                                              | `x.__ixor__(y)`            | Typically `self`      | [[#`__ixor__`]]                           |             |
| Atribuição                                                                         | `x >>= y`                                                             | `x.__irshift__(y)`         | Typically `self`      | [[#`__irshift__`]]                        |             |
| Atribuição                                                                         | `x <<= y`                                                             | `x.__ilshift__(y)`         | Typically `self`      | [[#`__ilshift__`]]                        |             |
| Atributos                                                                          | `x.y`                                                                 | `x.__getattribute__('y')`  |                       | [[#`__getattribute__`]]                   |             |
| Atributos                                                                          | `x.y`                                                                 | `x.__getattr__('y')`       |                       | [[#`__getattr__`]]                        |             |
| Atributos                                                                          | `x.y = z`                                                             | `x.__setattr__('y', z)`    | `None`                | [[#`__setattr__`]]                        |             |
| Atributos                                                                          | `del x.y`                                                             | `x.__delattr__('y')`       | `None`                | [[#`__delattr__`]]                        |             |
| Atributos                                                                          | `dir(x)`                                                              | `x.__dir__()`              | An iterable           | [[#`__dir__`]]                            |             |
| Descriptors                                                                        | `class T: x = U()`                                                    | `T.x.__set_name__(T, 'x')` | `None`                | [[#`__set_name__`]]                       |             |
| Descriptors                                                                        | `t.x`                                                                 | `T.x.__get__(t, T)`        |                       | [[#`__get__`]]                            |             |
| Descriptors                                                                        | `t.x = y`                                                             | `T.x.__set__(t, y)`        | `None`                | [[#`__set__`]]                            |             |
| Descriptors                                                                        | `del t.x`                                                             | `T.x.__delete__(t)`        | `None`                | [[#`__delete__`]]                         |             |
| Coisa de Classe                                                                    | `class U(T): ...`                                                     | `T.__init_subclass__(U)`   | `None`                | [[#`__init_subclass__`]]                  |             |
| Coisa de Classe                                                                    | `class U(x): ...`                                                     | `x.__mro_entries__([x])`   | `tuple`               | [[#`__mro_entries__`]]                    |             |
| Coisa de Classe                                                                    | `T[y]`                                                                | `T.__class_getitem__(y)`   |                       | [[#`__class_getitem__`]]                  |             |
| Metaclasses                                                                        | `class T: ...`                                                        | `type(base).__prepare__()` | `dict`/mapping        | [[#`__prepare__`]]                        |             |
| Metaclasses                                                                        | `isinstance(x, T)`                                                    | `T.__instancecheck__(x)`   | `bool`                | [[#`__instancecheck__`]]                  |             |
| Metaclasses                                                                        | `issubclass(U, T)`                                                    | `T.__subclasscheck__(U)`   | `bool`                | [[#`__subclasscheck__`]]                  |             |
| Async                                                                              | `await x` (ish)                                                       | `x.__await__()`            | An iterator           | [[#`__await__`]]                          |             |
| Async                                                                              | `async with x:`                                                       | `x.__aenter__()`           | An awaitable          | [[#`__aenter__`]]                         |             |
| Async                                                                              | `async with x:`                                                       | `x.__aexit__()`            | An awaitable          | [[#`__aexit__`]]                          |             |
| Async                                                                              | `async for a in x:`                                                   | `x.__aiter__()`            | An awaitable          | [[#`__aiter__`]]                          |             |
| Async                                                                              | `async for a in x:`                                                   | `x.__anext__()`            | An awaitable          | [[#`__anext__`]]                          |             |
| Buffers                                                                            | `memoryview(x)`                                                       | `x.__buffer__(flags)`      | `memoryview`          | [[#`__buffer__`]]                         |             |
| Buffers                                                                            | `del memoryview(x)`                                                   | `x.__release_buffer__(m)`  | `None`                | [[#`__release_buffer__`]]                 |             |
|                                                                                    |                                                                       |                            |                       |                                           |             |
| Dataclasses                                                                        | `x = T(a, b)`                                                         | `T.__post_init__(a, b)`    | `None`                | [[#`__post_init__`]]                      |             |
| Copy & replace                                                                     | `copy.replace(x)`                                                     | `x.__replace__(**attrs)`   | New object            | [[#`__replace__`]]                        |             |
| Copying                                                                            | `copy.copy(x)`                                                        | `x.__copy__()`             | New object            | [[#`__copy__`]]                           |             |
| Copying                                                                            | `copy.deepcopy(x)`                                                    | `x.__deepcopy__(memo)`     | New object            | [[#`__deepcopy__`]]                       |             |
| [Pickling](https://docs.python.org/3/library/pickle.html#pickling-class-instances) | `pickle.dumps(x)`                                                     | `x.__getnewargs__()`       | A 2-item tuple        | [[#`__getnewargs__`]]                     |             |
| Pickling                                                                           | `pickle.dumps(x)`                                                     | `x.__getnewargs_ex__()`    | A 2-item tuple        | [[#`__getnewargs_ex__`]]                  |             |
| Pickling                                                                           | `pickle.dumps(x)`                                                     | `x.__getstate__()`         | A meaningful state    | [[#`__getstate__`]]                       |             |
| Pickling                                                                           | `pickle.dumps(x)`                                                     | `x.__reduce__()`           | A 2-6 item tuple      | [[#`__reduce__`]]                         |             |
| Pickling                                                                           | `pickle.dumps(x)`                                                     | `x.__reduce_ex__(4)`       | A 2-6 item tuple      | [[#`__reduce_ex__`]]                      |             |
| Pickling                                                                           | `pickle.loads(b)`                                                     | `x.__setstate__(state)`    | `None`                | [[#`__setstate__`]]                       |             |
| [pathlib](https://www.pythonmorsels.com/pathlib-module/)                           | [`os.fspath(x)`](https://docs.python.org/3/library/os.html#os.fspath) | `p.__fspath__()`           | `str` or `bytes`      | [[#`__fspath__`]]                         |             |
| sys                                                                                | `sys.getsizeof(x)`                                                    | `x.__sizeof__()`           | `int` (size in bytes) | [[#`__sizeof__`]]                         |             |
| Class stuff                                                                        | None?                                                                 | `x.__subclasses__()`       | Subclasses iterable   | [[#`__subclasses__`]]                     |             |
| ABCs                                                                               | `issubclass(U, T)`                                                    | `T.__subclasshook__(U)`    | `bool`                | [[#`__subclasshook__`]]                   |             |


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

É importante ressaltar que só é possível usar o [[Palavras Restritas#with|with]] se esses dois dunders forem definidos na classe.

## `__enter__` e `__exit__`

Esses métodos implementam, respectivamente a entrada e a saída do [[Gerenciador de Contexto|gerenciador de contexto]].

```python
from io import TextIOWrapper

class File:
	def __init__(self, file_name: str, mode: str) -> None:
		self.name = file_name = file_name
		self.mode = mode
		self.file = None
		
	def __enter__(self) -> TextIOWrapper:
		print(f'Opening file: {self.name}, with mode: {self.mode}')
		self.file = open(self.name, self.mode)
		
		return self.file # Object attributed to the as statement (_io.TextIOWrapper)
		
	def __exit__(self, exc_type, exc_val, exc_tb) -> bool:
		"""
		Args:
			exc_type: Type of exception raised | None
			exc_val: Exception instance | None
			exc_tb: Traceback of the exception | None
		"""
		
		print('Exiting File, with or without errors')
		if self.file:
			self.file.close()
		
		return False # if raise False | None than the exception will be supressed, if True than it will raise the exception
```

# Coleção

## `__len__`

Este método tem o intuito de retornar o "tamanho" da sua classe, o que o tamanho do seu objeto vai depender do que seu objeto faz, mas além disso ele é chamado usando a função nativa [[Funções Nativas#len|len]].

```python
class Music:
	...

class Playlist:
	def __init__(self, name: str) -> None:
		self.name = name
		self._playlist = []
		
	def add_music(self, music: Music) -> None:
		self._playlist.append(music)
		
	def __len__(self) -> int:
		return len(self._playlist)
```

## `__iter__`

Este método transforma a classe em um [[Iteradores e Geradores|iterador]].

```python
class Tree:
	def __init__(self, value: int) -> None:
		self.value = value
		self._childrens = []
		
	def __iter__(self) -> Tree:
		yield self # Return the node
		for children in self._childrens:
			yield from children # iterate recursively over childrens node
```


## `__getitem__`

Permite usar a notação de [[Lista|lista]], [[Tupla|tupla]] e [[Dicionário|dicts]] em objetos, conseguindo acessar elementos através de um índice (ou [[Lista#Slicing|slice]])

```python
class List:
	def __init__(self, *args) -> None:
		self._data = list(args)
		
	def __getitem__(self, idx: int):
		return self._data[idx]
		
# my_list = List(1, 2, 3, 4)
# print(my_list[1]) # 2
```

## `__setitem__`

Comportamento parecido com o [[#`__getitem__`|__getitem__]], porém este é para modificar o valor

```python
class List:
	def __init__(self, *args) -> None:
		self._data = list(args)
		
	def __getitem__(self, idx: int):
		return self._data[idx]
		
	def __setitem__(self, idx: int, value) -> None:
		self._data[idx] = value
		
# my_list = List(1, 2, 3, 4)
# my_list[1] = 6
```


## `__delitem__`

Parecido com o [[#`__getitem__`|__getitem__]] e o [[#`__setitem__`|__setitem__]], porém este é para deletar um valor

```python
class List:
	def __init__(self, *args) -> None:
		self._data = list(args)
		
	def __getitem__(self, idx: int):
		return self._data[idx]
		
	def __setitem__(self, idx: int, value) -> None:
		self._data[idx] = value
		
	def __delitem__(self, idx: int) -> None:
		del self._data[idx]
		
# my_list = List(1, 2, 3, 4)
# del my_list[1]
```

## `__contains__`

Implementa o [[Palavras Restritas#in|in]] para classes

```python
print(1 in obj)
```

```python
class Interval:
	def __init__(self, ini: int, end: int) -> None:
		self.ini = ini
		self.end = end
		
	def __contains__(self, item: int) -> bool:
		return self.ini <= item <= self.end # if item in interval
		
# interval = Interval(10, 20)
# print(1 in interval) # False
# print(15 in interval) #True
```

## `__reversed__`

Implementa a função [[Funções Nativas#reversed|reversed]] para [[Iteradores e Geradores|iterações]]  em objetos

```python
class RegressiveCount:
	def __init__(self, ini: int) -> None:
		self.ini = ini
		
	def __iter__(self) -> int:
		for i in range(self.ini, -1, -1):
			yield i
			
	def __reversed__(self) -> int:
		for i in range(0, self.ini + 1)
			yield i
```

## `__next__`

Método que retorna o próximo item do [[Iteradores e Geradores|iterador]] da classe

```python
class Evens:
    def __init__(self, maximum: int) -> None:
        self.maximum = maximum
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current >= self.maximum:
            raise StopIteration
        value = self.current
        self.current += 2
        return value
        
# Return the pair numbers
```

## `__missing__`

Implementa o comportamento que deve ser seguido quando uma chave não é encontrada em subclasses de [[Dicionário|dict]].

```python
class DictDefault(dict):
	def __missing__(self, key) -> str:
		return f"Could not find key: {key}" 
```

## `__length_hint__`

Este método é usado em otimizações, especialemnte quando esta se construindo uma [collection](https://docs.python.org/3/library/collections.html), este valor não precisa ser o tamanho real, podendo ser maior ou menor, mas precisa ser um número e positivo, se retornar um [[Lista de Exceptions#`NotImplementedError`|NotImplemented]], então indica que não é possível ter uma estimativa do tamanho do container [PEP 424](https://peps.python.org/pep-0424/).

```python
class List(list):
	def __length_hint__(self) -> int:
		return len(self) 
```

# Callabilidade

## `__call__`

Torna um objeto em um [callable](https://svn.python.org/projects/python/trunk/Objects/object.c), ou seja, ter o comportamento de uma [[Funções|função]].

```python
class Multiplier:
	def __init__(self, factor: float) -> None:
		self.factor = factor
		
	def __call__(self, x: float) -> float:
		return x * self.factor
		
double = Multiplier(2)

print(double(5))
print(double(10))
```

# Aritmético

## `__add__`

Implementa o operador de adição, se o objeto estiver a esquerda do operador `+`, para adicionar quando o operador esta a direita usa-se o [[#`__radd__`|__radd__]].

```python
class Complex:
	def __init__(self, real: float, imag: float) -> None:
		self.real = real
		self.imag = imag
		
	def __add__(self, otr: Complex | int | float) -> Complex:
		if isinstance(otr, (int, float)):
			otr = Complex(otr, 0)
			
		return Complex(otr.real + self.real, otr.imag + self.imag)
		
	def __str__(self) -> str:
		return f"{self.real} + {self.imag}j"
		
num_01 = Complex(1, 2)
print(num_01 + 1) 
print(1 + num_01) # error
```

## `__radd__`

Implementa o operador de adição, se o objeto estiver a direita do operador `+`, para adicionar quando o operador esta a esquerda usa-se o [[#`__radd__`|__radd__]].

```python
class Complex:
	def __init__(self, real: float, imag: float) -> None:
		self.real = real
		self.imag = imag
		
	def __add__(self, otr: Complex | int | float) -> Complex:
		if isinstance(otr, (int, float)):
			otr = Complex(otr, 0)
			
		return Complex(otr.real + self.real, otr.imag + self.imag)
		
	def __radd__(self, otr: Complex | int | float) -> Complex:
		return self + otr # callback to __add__ functionality
		
	def __str__(self) -> str:
		return f"{self.real} + {self.imag}j"
		
num_01 = Complex(1, 2)
print(num_01 + 1) 
print(1 + num_01) # no error
```

## `__sub__`

Implementa a subtração quando o objeto estiver na esquerda do operador `-`

```python
class Complex:
	def __init__(self, real: float, imag: float) -> None:
		self.real = real
		self.imag = imag
		
	def __add__(self, otr: Complex | int | float) -> Complex:
		if isinstance(otr, (int, float)):
			otr = Complex(otr, 0)
			
		return Complex(otr.real + self.real, otr.imag + self.imag)
		
	def __radd__(self, otr: Complex | int | float) -> Complex:
		return self + otr # callback to __add__ functionality
	
	def __sub__(self, otr: Complex | int | float) -> Complex:
		if isinstance(otr, (int, float)):
			otr = Complex(otr, 0)
			
		return Complex(self.real - otr.real, self.imag - otr.imag)
	
	def __str__(self) -> str:
		return f"{self.real} + {self.imag}j"
		
num_01 = Complex(1, 2)
print(num_01 - 1) 
print(1 - num_01) # error
```

## `__rsub__`

Implementa a subtração quando o objeto estiver na direita do operador `-`

```python
class Complex:
	def __init__(self, real: float, imag: float) -> None:
		self.real = real
		self.imag = imag
		
	def __add__(self, otr: Complex | int | float) -> Complex:
		if isinstance(otr, (int, float)):
			otr = Complex(otr, 0)
			
		return Complex(otr.real + self.real, otr.imag + self.imag)
		
	def __radd__(self, otr: Complex | int | float) -> Complex:
		return self + otr # callback to __add__ functionality
	
	def __sub__(self, otr: Complex | int | float) -> Complex:
		if isinstance(otr, (int, float)):
			otr = Complex(otr, 0)
			
		return Complex(self.real - otr.real, self.imag - otr.imag)
		
	def __rsub__(self, otr: Complex | int | float) -> Complex:
		return Complex(-self.real, -self.imag) + otr # callback to __add__
	
	def __str__(self) -> str:
		return f"{self.real} + {self.imag}j"
		
num_01 = Complex(1, 2)
print(num_01 - 1) 
print(1 - num_01) # no error
```

## `__mul__`

Implementa a multiplicação quando o objeto estiver na esquerda do operador `*`

```python
class Complex:
	def __init__(self, real: float, imag: float) -> None:
		self.real = real
		self.imag = imag
		
	def _check_instance(self, otr):
		if isinstance(otr, Complex):
			return otr
		if isinstance(otr, (float, int)):
			return Complex(otr, 0)
			
		raise ValueError
		
	def __add__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
			
		return Complex(otr.real + self.real, otr.imag + self.imag)
		
	def __radd__(self, otr: Complex | int | float) -> Complex:
		return self + otr # callback to __add__ functionality
	
	def __sub__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
			
		return Complex(self.real - otr.real, self.imag - otr.imag)
		
	def __rsub__(self, otr: Complex | int | float) -> Complex:
		return Complex(-self.real, -self.imag) + otr # callback to __add__
		
	def __mul__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
		
		return Complex(self.real * otr.real - self.imag * otr.imag, 
					   self.imag * otr.real + self.real * otr.imag)
	
	def __str__(self) -> str:
		return f"{self.real} + {self.imag}j"
		
num_01 = Complex(1, 2)
print(num_01 * 2) 
print(2 * num_01) # error
```

## `__rmul__`

Implementa a multiplicação quando o objeto estiver na direita do operador `*`

```python
class Complex:
	def __init__(self, real: float, imag: float) -> None:
		self.real = real
		self.imag = imag
		
	def _check_instance(self, otr):
		if isinstance(otr, Complex):
			return otr
		if isinstance(otr, (float, int)):
			return Complex(otr, 0)
			
		raise ValueError
		
	def __add__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
			
		return Complex(otr.real + self.real, otr.imag + self.imag)
		
	def __radd__(self, otr: Complex | int | float) -> Complex:
		return self + otr # callback to __add__ functionality
	
	def __sub__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
			
		return Complex(self.real - otr.real, self.imag - otr.imag)
		
	def __rsub__(self, otr: Complex | int | float) -> Complex:
		return Complex(-self.real, -self.imag) + otr # callback to __add__
		
	def __mul__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
		
		return Complex(self.real * otr.real - self.imag * otr.imag, 
					   self.imag * otr.real + self.real * otr.imag)
					   
	def __rmul__(self, otr: Complex | int | float) -> Complex:
		return self * otr
	
	def __str__(self) -> str:
		return f"{self.real} + {self.imag}j"
		
num_01 = Complex(1, 2)
print(num_01 * 2) 
print(2 * num_01) # no error
```

## `__truediv__`

Implementa a divisão quando o objeto estiver na esquerda do operador `/`

```python
class Complex:
	def __init__(self, real: float, imag: float) -> None:
		self.real = real
		self.imag = imag
		
	def _check_instance(self, otr):
		if isinstance(otr, Complex):
			return otr
		if isinstance(otr, (float, int)):
			return Complex(otr, 0)
			
		raise ValueError
	
	@property
	def modulus(self) -> float:
		return ((self.real)**2 + (self.imag)**2)**(0.5)
		
	@property
	def conjugate(self) -> Complex:
		return Complex(self.real, -self.imag)
		
	def __add__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
			
		return Complex(otr.real + self.real, otr.imag + self.imag)
		
	def __radd__(self, otr: Complex | int | float) -> Complex:
		return self + otr # callback to __add__ functionality
	
	def __sub__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
			
		return Complex(self.real - otr.real, self.imag - otr.imag)
		
	def __rsub__(self, otr: Complex | int | float) -> Complex:
		return Complex(-self.real, -self.imag) + otr # callback to __add__
		
	def __mul__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
		
		return Complex(self.real * otr.real - self.imag * otr.imag, 
					   self.imag * otr.real + self.real * otr.imag)
					   
	def __rmul__(self, otr: Complex | int | float) -> Complex:
		return self * otr
	
	def __truediv__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
		
		if otr.modulus == 0:
			raise ZeroDvisionError
			
		mul = self * otr.conjugate
		
		return Complex(mul.real / ((otr.modulus)**2), 
						mul.imag / ((otr.modulus)**2))
	
	def __str__(self) -> str:
		return f"{self.real} + {self.imag}j"
		
num_01 = Complex(1, 2)
print(num_01 / 2) 
print(2 / num_01) #  error
```


## `__rtruediv__`

Implementa a divisão quando o objeto estiver na direita do operador `/`

```python
class Complex:
	def __init__(self, real: float, imag: float) -> None:
		self.real = real
		self.imag = imag
		
	def _check_instance(self, otr):
		if isinstance(otr, Complex):
			return otr
		if isinstance(otr, (float, int)):
			return Complex(otr, 0)
			
		raise ValueError
	
	@property
	def modulus(self) -> float:
		return ((self.real)**2 + (self.imag)**2)**(0.5)
		
	@property
	def conjugate(self) -> Complex:
		return Complex(self.real, -self.imag)
		
	def __add__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
			
		return Complex(otr.real + self.real, otr.imag + self.imag)
		
	def __radd__(self, otr: Complex | int | float) -> Complex:
		return self + otr # callback to __add__ functionality
	
	def __sub__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
			
		return Complex(self.real - otr.real, self.imag - otr.imag)
		
	def __rsub__(self, otr: Complex | int | float) -> Complex:
		return Complex(-self.real, -self.imag) + otr # callback to __add__
		
	def __mul__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
		
		return Complex(self.real * otr.real - self.imag * otr.imag, 
					   self.imag * otr.real + self.real * otr.imag)
					   
	def __rmul__(self, otr: Complex | int | float) -> Complex:
		return self * otr
	
	def __truediv__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
		
		if otr.modulus == 0:
			raise ZeroDvisionError
			
		mul = self * otr.conjugate
		
		return Complex(mul.real / ((otr.modulus)**2), 
						mul.imag / ((otr.modulus)**2))
	
	def __rtruediv__(self, otr: Complex | int | float) -> Complex:
		otr = self._check_instance(otr)
		
		return otr // self # make otr a Complex so that __add__ is implemented
	
	def __str__(self) -> str:
		return f"{self.real} + {self.imag}j"
		
num_01 = Complex(1, 2)
print(num_01 / 2) 
print(2 / num_01) # no error
```

## `__mod__`

Implementa o operador de módulo (`%`), quando o objeto estiver a esquerda

```python
class NumberMod:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __mod__(self, otr: NumberMod):
        return NumeroMod(self.value % otr.value)
    
    def __repr__(self):
        return f"NumberMod({self.value})"


n1 = NumberMod(10)
n2 = NumberMod(3)
res = n1 % n2
print(res)
```

## `__rmod__`

Implementa o operador de módulo (`%`), quando o objeto estiver a direita

```python
class Divisor:
    def __init__(self, divisor: int):
        self.divisor = divisor
    
    def __rmod__(self, value: int):
        return value % self.divisor

# Uso
divisor = Divisor(4)
res = 10 % divisor 
print(res)
```

## `__floordiv__`

Implementa o operador de divisão inteira `//` quando o objeto estiver a esquerda.

```python
class IntDivision:
    def __init__(self, value: int):
        self.value = value
    
    def __floordiv__(self, otr):
        return DivisorInteiro(self.value // otr.value)
        
	def __repr__(self):
        return f"{self.value}"
        
d1 = IntDivision(10)
d2 = IntDivision(3)
res = d1 // d2
print(res)
```

## `__rfloordiv__`

Implementa divisão inteira quando o objeto está à direita do `//`

```python
class Denominator:
    def __init__(self, denominator: int):
        self.denominator = denominator
    
    def __rfloordiv__(self, numerator):
        return numerator // self.denominator

# Uso
denominator = Denominator(3)
res = 10 // denominator
print(res)
```

## `__pow__`

Implementa a potência `**` quando o objeto for a base

```python
class Base:
    def __init__(self, value: float):
        self.value = value
    
    def __pow__(self, exponent: float):
        return Base(self.value ** exponent)
    
    def __repr__(self):
        return f"Base({self.valor})"

# Uso
base = Base(2)
res = base ** 3
print(res)
```

## `__rpow__`

Implementa a potência `**` quando o objeto for o expoente

```python
class Expoent:
    def __init__(self, expoent: float) -> None:
        self.expoent = expoent
    
    def __rpow__(self, base):
        return base ** self.expoent

expoent = Expoent(3)
res = 2 ** expoent  
print(res)
```

## `__matmul__`

Implementa operador de multiplicação de matrizes `@` (`Python 3.5+`).

```python
class Matrix:
    def __init__(self, data: list) -> None:
        self.data = data
    
    def __matmul__(self, other: Matrix):
        result = [
            [sum(a * b for a, b in zip(row, col)) 
            for col in zip(*other.data)]
            for row in self.data
        ]
        return Matrix(result)
    
    def __repr__(self) -> str:
        return f"Matrix({self.data})"

A = Matrix([[1, 2], [3, 4]])
B = Matrix([[2, 0], [1, 2]])
result = A @ B
print(result)  
```

## `__rmatmul__`

Implementa multiplicação de matrizes quando o objeto está à direita do `@`.

```python
class Vector:
    def __init__(self, x: int, y: int) -> None:
        self.x = x
        self.y = y
    
    def __rmatmul__(self, matrix: list) -> Vector:
        return Vector(
            matrix[0][0] * self.x + matrix[0][1] * self.y,
            matrix[1][0] * self.x + matrix[1][1] * self.y
        )
    
    def __repr__(self) -> str:
        return f"Vector({self.x}, {self.y})"

v = Vector(2, 3)
matrix = [[1, 2], [3, 4]]
result = matrix @ v 
print(result) 
```

## `__and__`

**Implementa:** operador AND bit-a-bit `&`.

```python
class BitFlags:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __and__(self, other: BitFlags) -> BitFlags:
        return BitFlags(self.value & other.value)
    
    def __repr__(self) -> None:
        return f"BitFlags({self.value})"


flags1 = BitFlags(0b1100)  # 12
flags2 = BitFlags(0b1010)  # 10
result = flags1 & flags2
print(result)  # BitFlags(8)  # 0b1000
```

## `__rand__`

Implementa AND quando o objeto está à direita do `&`.

```python
class Mask:
    def __init__(self, mask: int) -> None:
        self.mask = mask
    
    def __rand__(self, value: int) -> int:
        return value & self.mask
    
    def __repr__(self) -> str:
        return f"Mask({self.mask})"


mask = Mask(0b1111)  # 15
result = 0b11001100 & mask  
print(bin(result))  # 0b1100
```

## `__or__`

Implementa operador OR bit-a-bit `|`.

```python
class Permissions:
    def __init__(self, flags):
        self.flags = flags
    
    def __or__(self, other):
        return Permissions(self.flags | other.flags)
    
    def __repr__(self):
        return f"Permissions({self.flags})"

read = Permissions(0b100)
write = Permissions(0b010)
result = read | write
print(result)  # 0b110
```

## `__ror__`

**Implementa:** OR quando o objeto está à direita do `|`.

```python
class DefaultFlags:
    def __init__(self, default):
        self.default = default
    
    def __ror__(self, user_flags):
        return user_flags | self.default
    
    def __repr__(self):
        return f"DefaultFlags({self.default})"

defaults = DefaultFlags(0b001)
user_flags = 0b100
result = user_flags | defaults  
print(bin(result))  # 0b101
```

## `__xor__`

Implementa operador XOR bit-a-bit `^`.

```python
class BitField:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __xor__(self, other: 'BitField') -> 'BitField':
        return BitField(self.value ^ other.value)
    
    def __repr__(self) -> str:
        return f"BitField({self.value})"

field1 = BitField(0b1100)
field2 = BitField(0b1010)
result = field1 ^ field2
print(result)
```

## `__rxor__`

Implementa XOR quando o objeto está à direita do `^`.

```python
class XorMask:
    def __init__(self, mask: int) -> None:
        self.mask = mask
    
    def __rxor__(self, value: int) -> int:
        return value ^ self.mask

mask = XorMask(0b1111)
result = 0b1100 ^ mask
print(bin(result))
```

## `__rshift__`

Implementa operador de deslocamento à direita `>>`.

```python
class Shiftable:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __rshift__(self, bits: int) -> 'Shiftable':
        return Shiftable(self.value >> bits)
    
    def __repr__(self) -> str:
        return f"Shiftable({self.value})"

num = Shiftable(16)
result = num >> 2
print(result)
```

## `__rrshift__`

Implementa deslocamento à direita quando o objeto está à direita do `>>`.

```python
class RightShifter:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __rrshift__(self, target: int) -> int:
        return target >> self.value

shifter = RightShifter(2)
result = 16 >> shifter
print(result)
```

## `__lshift__`

Implementa operador de deslocamento à esquerda `<<`.

```python
class LeftShiftable:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __lshift__(self, bits: int) -> 'LeftShiftable':
        return LeftShiftable(self.value << bits)
    
    def __repr__(self) -> str:
        return f"LeftShiftable({self.value})"

num = LeftShiftable(4)
result = num << 2
print(result)
```

## `__rlshift__`

Implementa deslocamento à esquerda quando o objeto está à direita do `<<`.

```python
class LeftShifter:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __rlshift__(self, target: int) -> int:
        return target << self.value

shifter = LeftShifter(3)
result = 2 << shifter
print(result)
```

## `__neg__`

Implementa operador de negação unária `-`.

```python
class SignedNumber:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __neg__(self) -> 'SignedNumber':
        return SignedNumber(-self.value)
    
    def __repr__(self) -> str:
        return f"SignedNumber({self.value})"

num = SignedNumber(10)
result = -num
print(result)
```

## `__pos__`

Implementa operador de positivo unário `+`.

```python
class PositiveNumber:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __pos__(self) -> 'PositiveNumber':
        return PositiveNumber(+self.value)
    
    def __repr__(self) -> str:
        return f"PositiveNumber({self.value})"

num = PositiveNumber(-5)
result = +num
print(result)
```

## `__invert__`

Implementa operador de inversão bit-a-bit `~`.

```python
class Invertible:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __invert__(self) -> 'Invertible':
        return Invertible(~self.value)
    
    def __repr__(self) -> str:
        return f"Invertible({self.value})"

num = Invertible(5)
result = ~num
print(result)
```

# Funções Matemáticas

## `__divmod__`

Implementa a função [[Funções Nativas#divmod|divmod]] que retorna quociente e resto.

```python
class DivModNumber:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __divmod__(self, other: int) -> tuple:
        quotient = self.value // other
        remainder = self.value % other
        return (quotient, remainder)

num = DivModNumber(10)
result = divmod(num, 3)
print(result)
```

## `__rdivmod__`

Implementa [[Funções Nativas#divmod|divmod]] quando o objeto está à direita.

```python
class RDivModNumber:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __rdivmod__(self, other: int) -> tuple:
        quotient = other // self.value
        remainder = other % self.value
        return (quotient, remainder)

num = RDivModNumber(3)
result = divmod(10, num)
print(result)
```

## `__abs__`

Implementa a função [[Funções Nativas#abs|abs]] para valor absoluto.

```python
class AbsoluteValue:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __abs__(self) -> 'AbsoluteValue':
        return AbsoluteValue(abs(self.value))
    
    def __repr__(self) -> str:
        return f"AbsoluteValue({self.value})"

num = AbsoluteValue(-5)
result = abs(num)
print(result)
```

## `__index__`

Implementa conversão para inteiro em contextos de indexação.

```python
class Indexable:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __index__(self) -> int:
        return self.value

idx = Indexable(2)
my_list = [10, 20, 30, 40]
result = my_list[idx]
print(result)

```

## `__round__`

Implementa a função [[Funções Nativas#round|round]] para arredondamento.

```python
class Roundable:
    def __init__(self, value: float) -> None:
        self.value = value
    
    def __round__(self, ndigits: int = 0) -> float:
        return round(self.value, ndigits)

num = Roundable(3.14159)
result1 = round(num)
result2 = round(num, 2)
print(result1, result2)
```

## `__trunc__`

Implementa a função `math.trunc()` para truncamento.

```python
import math

class Truncatable:
    def __init__(self, value: float) -> None:
        self.value = value
    
    def __trunc__(self) -> int:
        return math.trunc(self.value)

num = Truncatable(3.9)
result = math.trunc(num)
print(result)
```

## `__floor__`

Implementa a função `math.floor()` para arredondamento para baixo.

```python
import math

class Floorable:
    def __init__(self, value: float) -> None:
        self.value = value
    
    def __floor__(self) -> int:
        return math.floor(self.value)

num = Floorable(3.9)
result = math.floor(num)
print(result)
```

## `__ceil__`

Implementa a função `math.ceil()` para arredondamento para cima.

```python
import math

class Ceilable:
    def __init__(self, value: float) -> None:
        self.value = value
    
    def __ceil__(self) -> int:
        return math.ceil(self.value)

num = Ceilable(3.1)
result = math.ceil(num)
print(result)
```

# Atribuição

## `__iadd__`

Implementa operador de adição in-place `+=`.

```python
class Accumulator:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __iadd__(self, other: int) -> 'Accumulator':
        self.value += other
        return self
    
    def __repr__(self) -> str:
        return f"Accumulator({self.value})"

acc = Accumulator(5)
acc += 3
print(acc)
```

## `__isub__`

Implementa operador de subtração in-place `-=`.

```python
class Decrementor:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __isub__(self, other: int) -> 'Decrementor':
        self.value -= other
        return self
    
    def __repr__(self) -> str:
        return f"Decrementor({self.value})"

dec = Decrementor(10)
dec -= 4
print(dec)
```

## `__imul__`

Implementa operador de multiplicação in-place `*=`.

```python
class Multiplier:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __imul__(self, other: int) -> 'Multiplier':
        self.value *= other
        return self
    
    def __repr__(self) -> str:
        return f"Multiplier({self.value})"

mult = Multiplier(3)
mult *= 5
print(mult)
```

## `__itruediv__`

Implementa operador de divisão verdadeira in-place `/=`.

```python
class Divider:
    def __init__(self, value: float) -> None:
        self.value = value
    
    def __itruediv__(self, other: float) -> 'Divider':
        self.value /= other
        return self
    
    def __repr__(self) -> str:
        return f"Divider({self.value})"

div = Divider(15.0)
div /= 3.0
print(div)
```

## `__imod__`

Implementa operador de módulo in-place `%=`.

```python
class Modulo:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __imod__(self, other: int) -> 'Modulo':
        self.value %= other
        return self
    
    def __repr__(self) -> str:
        return f"Modulo({self.value})"

mod = Modulo(10)
mod %= 3
print(mod)
```

## `__ifloordiv__`

Implementa operador de divisão inteira in-place `//=`.

```python
class FloorDivider:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __ifloordiv__(self, other: int) -> 'FloorDivider':
        self.value //= other
        return self
    
    def __repr__(self) -> str:
        return f"FloorDivider({self.value})"

fd = FloorDivider(10)
fd //= 3
print(fd)
```

## `__ipow__`

Implementa operador de potenciação in-place `**=`.

```python
class Power:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __ipow__(self, other: int) -> 'Power':
        self.value **= other
        return self
    
    def __repr__(self) -> str:
        return f"Power({self.value})"

pwr = Power(2)
pwr **= 3
print(pwr)
```

## `__imatmul__`

Implementa operador de multiplicação de matrizes in-place `@=`.

```python
class Matrix:
    def __init__(self, data: list) -> None:
        self.data = data
    
    def __imatmul__(self, other: 'Matrix') -> 'Matrix':
        result = [
            [sum(a * b for a, b in zip(row, col)) 
            for col in zip(*other.data)]
            for row in self.data
        ]
        self.data = result
        return self
    
    def __repr__(self) -> str:
        return f"Matrix({self.data})"

A = Matrix([[1, 2], [3, 4]])
B = Matrix([[2, 0], [1, 2]])
A @= B
print(A)
```

## `__iand__`

Implementa operador AND bit-a-bit in-place `&=`.

```python
class BitFlags:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __iand__(self, other: int) -> 'BitFlags':
        self.value &= other
        return self
    
    def __repr__(self) -> str:
        return f"BitFlags({self.value})"

flags = BitFlags(0b1100)
flags &= 0b1010
print(bin(flags.value))
```

## `__ior__`

Implementa operador OR bit-a-bit in-place `|=`.

```python
class Permissions:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __ior__(self, other: int) -> 'Permissions':
        self.value |= other
        return self
    
    def __repr__(self) -> str:
        return f"Permissions({self.value})"

perms = Permissions(0b100)
perms |= 0b010
print(bin(perms.value))
```

## `__ixor__`

Implementa operador XOR bit-a-bit in-place `^=`.

```python
class XorField:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __ixor__(self, other: int) -> 'XorField':
        self.value ^= other
        return self
    
    def __repr__(self) -> str:
        return f"XorField({self.value})"

xf = XorField(0b1100)
xf ^= 0b1010
print(bin(xf.value))
```

## `__irshift__`

Implementa  operador de deslocamento à direita in-place `>>=`.

```python
class ShiftRight:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __irshift__(self, bits: int) -> 'ShiftRight':
        self.value >>= bits
        return self
    
    def __repr__(self) -> str:
        return f"ShiftRight({self.value})"

sr = ShiftRight(16)
sr >>= 2
print(sr)
```

## `__ilshift__`

Implementa operador de deslocamento à esquerda in-place `<<=`.

```python
class ShiftLeft:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __ilshift__(self, bits: int) -> 'ShiftLeft':
        self.value <<= bits
        return self
    
    def __repr__(self) -> str:
        return f"ShiftLeft({self.value})"

sl = ShiftLeft(4)
sl <<= 2
print(sl)
```

# Atributos

## `__getattribute__`

Implementa acesso a todos os atributos (chamado para CADA acesso).

```python
class LoggingAccess:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __getattribute__(self, name: str):
        print(f"Accessing attribute: {name}")
        return super().__getattribute__(name) # accessing via Object implementation because in this class every action will go trough __getattribute__

obj = LoggingAccess(42)
print(obj.value)
```

## `__getattr__`

Implementa acesso a atributos quando não são encontrados normalmente.

```python
class DefaultAttributes:
    def __init__(self) -> None:
        self.existing = "I exist"
    
    def __getattr__(self, name: str) -> str:
        return f"Attribute '{name}' not found, but I'll return this"

obj = DefaultAttributes()
print(obj.existing)
print(obj.non_existing)
```

## `__setattr__`

Implementa atribuição a atributos.

```python
class ValidatedAttributes:
    def __init__(self) -> None:
        self.allowed_attrs = {"name", "age"}
        super().__setattr__("name", "default")
    
    def __setattr__(self, name: str, value) -> None:
        if name not in self.allowed_attrs:
            raise AttributeError(f"Cannot set attribute '{name}'")
        super().__setattr__(name, value)

obj = ValidatedAttributes()
obj.name = "John"
print(obj.name)
```

## `__delattr__`

Implementa deleção de atributos.

```python
class ProtectedAttributes:
    def __init__(self) -> None:
        self.protected = {"important"}
        self.important = "Don't delete me"
        self.temp = "You can delete this"
    
    def __delattr__(self, name: str) -> None:
        if name in self.protected:
            raise AttributeError(f"Cannot delete protected attribute '{name}'")
        super().__delattr__(name)

obj = ProtectedAttributes()
del obj.temp
print(hasattr(obj, "temp"))
```

## `__dir__`

Implementa personalização da função [[Funções Nativas#dir|dir]].

```python
class CustomDirectory:
    def __init__(self) -> None:
        self.public_attr = "I'm public"
        self._private_attr = "I'm private"
    
    def public_method(self) -> str:
        return "public method"
    
    def _private_method(self) -> str:
        return "private method"
    
    def __dir__(self) -> list:
        return [attr for attr in super().__dir__() if not attr.startswith('_')]

obj = CustomDirectory()
print(dir(obj))
```

# Descriptors

## `__set_name__`

Implementa chamado quando o descriptor é criado para saber a qual atributo pertence.

```python
class TrackedAttribute:
    def __set_name__(self, owner: type, name: str) -> None:
        self.name = name
        print(f"Attribute '{name}' created in class '{owner.__name__}'")
    
    def __get__(self, instance, owner: type) -> str:
        return f"Value of {self.name}"

class MyClass:
    attr = TrackedAttribute()

obj = MyClass()
print(obj.attr)

```
## `__get__`

Implementa acesso a atributos quando usado como descriptor.

```python
class UppercaseDescriptor:
    def __set_name__(self, owner: type, name: str) -> None:
        self.name = name
    
    def __get__(self, instance, owner: type) -> str:
        if instance is None:
            return self
        return getattr(instance, f"_{self.name}", "").upper()

class Person:
    name = UppercaseDescriptor()
    
    def __init__(self, name: str) -> None:
        self._name = name

person = Person("john")
print(person.name)
```

## `__set__`

Implementa atribuição a atributos quando usado como descriptor.

```python
class PositiveNumber:
    def __set_name__(self, owner: type, name: str) -> None:
        self.name = name
    
    def __get__(self, instance, owner: type) -> int:
        return getattr(instance, f"_{self.name}", 0)
    
    def __set__(self, instance, value: int) -> None:
        if value < 0:
            raise ValueError("Value must be positive")
        setattr(instance, f"_{self.name}", value)

class BankAccount:
    balance = PositiveNumber()
    
    def __init__(self, balance: int) -> None:
        self.balance = balance

account = BankAccount(100)
print(account.balance)
```

## `__delete__`

Implementa deleção de atributos quando usado como descriptor.

```python
class ReadOnlyAttribute:
    def __set_name__(self, owner: type, name: str) -> None:
        self.name = name
    
    def __get__(self, instance, owner: type) -> str:
        return getattr(instance, f"_{self.name}", "default")
    
    def __set__(self, instance, value: str) -> None:
        raise AttributeError("This attribute is read-only")
    
    def __delete__(self, instance) -> None:
        raise AttributeError("This attribute cannot be deleted")

class Configuration:
    version = ReadOnlyAttribute()
    
    def __init__(self) -> None:
        self._version = "1.0.0"

config = Configuration()
print(config.version)
```

# Coisa de Classe

## `__init_subclass__`

Implementa o hook chamado quando uma subclasse é criada.

```python
class PluginBase:
    plugins = []
    
    def __init_subclass__(cls, **kwargs) -> None:
        super().__init_subclass__(**kwargs)
        cls.plugins.append(cls)
        print(f"Registered plugin: {cls.__name__}")

class EmailPlugin(PluginBase):
    pass

class SMSTPlugin(PluginBase):
    pass

print(PluginBase.plugins)
```

## `__mro_entries__`

Implementa permite que objetos customizados sejam usados em [[Herança e Composição#Method Resolution Order (MRO)|herança múltipla]].

```python
class GenericAlias:
    def __mro_entries__(self, bases: tuple) -> tuple:
        return (list,)  # makes class inherits from list

class MyClass(GenericAlias()):
    pass

obj = MyClass()
obj.append(1)
obj.append(2)
print(obj)
print(MyClass.__mro__)
```

## `__class_getitem__`

Implementa suporte a generic types com `Class[Type]`.

```python
from typing import Generic, TypeVar

T = TypeVar('T')

class Container(Generic[T]):
    def __init__(self, value: T) -> None:
        self.value = value
    
    @classmethod
    def __class_getitem__(cls, item) -> type:
        print(f"Creating generic type: Container[{item}]")
        return super().__class_getitem__(item)

IntContainer = Container[int]
str_container = Container[str]("hello")
print(str_container.value)
```

## `__subclasses__`

Retorna as subclasses diretas de uma classe.

```python
class Animal:
    pass

class Dog(Animal):
    pass

class Cat(Animal):
    pass

class Labrador(Dog):
    pass

print(Animal.__subclasses__())
print(Dog.__subclasses__())
```

# Metaclasses

## `__prepare__`

Personalização do [[Escopos e Namespaces|namespace]] durante a criação da classe.

```python
class UpperCaseMeta(type):
    def __prepare__(name: str, bases: tuple) -> dict:
        return {'__annotations__': {}}
    
    def __new__(cls, name: str, bases: tuple, namespace: dict) -> type:
        upper_namespace = {k.upper(): v for k, v in namespace.items()}
        return super().__new__(cls, name, bases, upper_namespace)

class MyClass(metaclass=UpperCaseMeta):
    value = 42

print(hasattr(MyClass, 'VALUE'))
```

## `__instancecheck__`

Personalização do comportamento de [[Funções Nativas#isinstance|isinstance]].

```python
class VirtualNumber:
    def __instancecheck__(self, instance) -> bool:
        return isinstance(instance, (int, float, str))

virtual_num = VirtualNumber()
print(isinstance(10, virtual_num))
print(isinstance("123", virtual_num))
print(isinstance([], virtual_num))
```
## `__subclasscheck__`

personalização do comportamento de [[Funções Nativas#issubclass|issubclass]].

```python
class DuckTyping:
    def __subclasscheck__(self, subclass: type) -> bool:
        return hasattr(subclass, 'quack') # is subclass if duck has quack

class RealDuck:
    def quack(self) -> str:
        return "Quack!"

class FakeDuck:
    pass

duck_check = DuckTyping()
print(issubclass(RealDuck, duck_check))
print(issubclass(FakeDuck, duck_check))
```

# Async

## `__await__`

Retorna um [[Iteradores e Geradores|iterável]] para ser usado em expressões [[Assync|assincrona]] [[Palavras Restritas#await|await]].

```python
import asyncio

class AsyncResult:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __await__(self):
        yield from asyncio.sleep(0.1)
        return self.value

async def main():
    result = await AsyncResult(42)
    print(result)

asyncio.run(main())
```

## `__aenter__`

[[Gerenciador de Contexto|Contexto]] para ser usado em expressões [[Assync|assincrona]] [[Palavras Restritas#with|with]]. Parecido com o [[#`__enter__` e `__exit__`|__enter__]]

```python
import asyncio

class AsyncConnection:
    async def __aenter__(self) -> 'AsyncConnection':
        print("Opening async connection")
        await asyncio.sleep(0.1)
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb) -> bool:
        print("Closing async connection")
        await asyncio.sleep(0.1)
        return False

async def main():
    async with AsyncConnection() as conn:
        print("Inside async context")

asyncio.run(main())
```

## `__aexit__`

[[Gerenciador de Contexto|Contexto]] para ser usado em expressões [[Assync|assincrona]] [[Palavras Restritas#with|with]]. Parecido com o [[#`__enter__` e `__exit__`|__exit__]]

```python
import asyncio

class AsyncConnection:
    async def __aenter__(self) -> 'AsyncConnection':
        print("Opening async connection")
        await asyncio.sleep(0.1)
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb) -> bool:
        print("Closing async connection")
        await asyncio.sleep(0.1)
        return False

async def main():
    async with AsyncConnection() as conn:
        print("Inside async context")

asyncio.run(main())
```

## `__aiter__`

Retorna um objeto [[Assync|assincrono]] [[Iteradores e Geradores|iterável]].

```python
import asyncio

class AsyncCounter:
    def __init__(self, stop: int) -> None:
        self.stop = stop
        self.current = 0
    
    def __aiter__(self):
        return self
    
    async def __anext__(self) -> int:
        if self.current >= self.stop:
            raise StopAsyncIteration
        await asyncio.sleep(0.1)
        self.current += 1
        return self.current

async def main():
    async for number in AsyncCounter(3):
        print(number)

asyncio.run(main())
```

## `__anext__`

Retorna o próximo item em iteração assíncrona.

```python
import asyncio

class AsyncData:
    def __init__(self, data: list) -> None:
        self.data = data
        self.index = 0
    
    def __aiter__(self):
        return self
    
    async def __anext__(self) -> str:
        if self.index >= len(self.data):
            raise StopAsyncIteration
        await asyncio.sleep(0.1)
        item = self.data[self.index]
        self.index += 1
        return item

async def main():
    async for item in AsyncData(["a", "b", "c"]):
        print(item)

asyncio.run(main())
```

# Buffers

## `__buffer__`

Protocolo de buffer para acesso a dados [[Bytes|binários]].

```python
class SimpleBuffer:
    def __init__(self, data: bytes) -> None:
        self.data = data
    
    def __buffer__(self, flags: int) -> memoryview:
        return memoryview(self.data)

buffer = SimpleBuffer(b"hello")
mv = memoryview(buffer)
print(bytes(mv))
```

## `__release_buffer__`

Liberação de recursos do buffer.

```python
class ManagedBuffer:
    def __init__(self, data: bytes) -> None:
        self.data = data
        self.active_views = 0
    
    def __buffer__(self, flags: int) -> memoryview:
        self.active_views += 1
        return memoryview(self.data)
    
    def __release_buffer__(self, view: memoryview) -> None:
        self.active_views -= 1
        print(f"Buffer released. Active views: {self.active_views}")

buffer = ManagedBuffer(b"test")
with memoryview(buffer) as mv:
    print(bytes(mv))
```

# Dataclasses

## `__post_init__`

Inicialização adicional em dataclasses.

```python
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    
    def __post_init__(self) -> None:
        self.is_adult = self.age >= 18

person = Person("John", 20)
print(person.is_adult)
```

# Copy & replace

## `__replace__`

Criação de cópias com substituição de campos imutáveis como namedtuples e dataclasses.

```python
import copy

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email

    def __replace__(self, **kwargs):
        # Create a new instance with updated values
        new_name = kwargs.get('name', self.name)
        new_email = kwargs.get('email', self.email)
        return User(new_name, new_email)

    def __repr__(self):
        return f"User(name='{self.name}', email='{self.email}')"

user1 = User("Alice", "alice@example.com")
user2 = copy.replace(user1, name="Bob")

print(user1)
print(user2)
```

# Copying

## `__copy__`

Cópia rasa com `copy.copy()`

```python
import copy

class Copyable:
    def __init__(self, data: list) -> None:
        self.data = data
    
    def __copy__(self):
        new_instance = self.__class__(self.data.copy())
        return new_instance

original = Copyable([1, 2, 3])
shallow_copy = copy.copy(original)
original.data.append(4)
print(original.data)
print(shallow_copy.data)
```

## `__deepcopy__`

Cópia profunda com `copy.deepcopy()`.

```python
import copy

class DeepCopyable:
    def __init__(self, data: list) -> None:
        self.data = data
    
    def __deepcopy__(self, memo: dict):
        new_instance = self.__class__(copy.deepcopy(self.data, memo))
        return new_instance

original = DeepCopyable([[1, 2], [3, 4]])
deep_copy = copy.deepcopy(original)
original.data[0].append(5)
print(original.data)
print(deep_copy.data)
```

# Pickling

## `__getnewargs__`

Fornece argumentos para `__new__` durante unpickling.

```python
import pickle

class Point:
    def __init__(self, x: int, y: int) -> None:
        self.x = x
        self.y = y
    
    def __getnewargs__(self) -> tuple:
        return (self.x, self.y)
    
    def __repr__(self) -> str:
        return f"Point({self.x}, {self.y})"

p = Point(3, 4)
data = pickle.dumps(p)
p2 = pickle.loads(data)
print(p2)
```

## `__getnewargs_ex__`

Fornece argumentos posicionais e nomeados para [[#`__new__`|__new__]] durante unpickling.

```python
import pickle

class Rectangle:
    def __init__(self, width: int, height: int, color: str = "red") -> None:
        self.width = width
        self.height = height
        self.color = color
    
    def __getnewargs_ex__(self) -> tuple:
        return (self.width, self.height), {"color": self.color}
    
    def __repr__(self) -> str:
        return f"Rectangle({self.width}, {self.height}, '{self.color}')"


r = Rectangle(10, 5, "blue")
data = pickle.dumps(r)
r2 = pickle.loads(data)
print(r2)
```

## `__getstate__`

Personaliza o estado do objeto para serialização.

```python
import pickle

class SecureData:
    def __init__(self, public: str, secret: str) -> None:
        self.public = public
        self.secret = secret
    
    def __getstate__(self) -> dict:
        state = self.__dict__.copy()
        state.pop('secret', None)
        return state


data = SecureData("public info", "super secret")
state = data.__getstate__()
print(state)
```

## `__reduce__`

Controle total sobre o processo de pickling.

```python
import pickle

class CustomPickle:
    def __init__(self, value: int) -> None:
        self.value = value
    
    def __reduce__(self) -> tuple:
        return (self.__class__, (self.value * 2,))

obj = CustomPickle(5)
data = pickle.dumps(obj)
obj2 = pickle.loads(data)
print(obj2.value)
```

## `__reduce_ex__`

Controle sobre pickling com versão de protocolo.

```python
import pickle

class VersionedPickle:
    def __init__(self, data: str) -> None:
        self.data = data
    
    def __reduce_ex__(self, protocol: int) -> tuple:
        if protocol >= 4:
            return (self.__class__, (self.data.upper(),))
        else:
            return (self.__class__, (self.data.lower(),))

obj = VersionedPickle("hello")
data = pickle.dumps(obj, protocol=4)
obj2 = pickle.loads(data)
print(obj2.data)
```

## `__setstate__`

Personaliza a restauração do estado durante unpickling.

```python
class StatefulObject:
    def __init__(self) -> None:
        self.default = "default"
        self.custom = None
    
    def __getstate__(self) -> dict:
        return {"custom": "custom_data"}
    
    def __setstate__(self, state: dict) -> None:
        self.default = "restored"
        self.custom = state.get("custom")

import pickle
obj = StatefulObject()
data = pickle.dumps(obj)
obj2 = pickle.loads(data)
print(obj2.default)
print(obj2.custom)
```

# pathlib

## `__fspath__`

Conversão para caminho de arquivo compatível com pathlib.

```python
from pathlib import Path

class CustomPath:
    def __init__(self, path_str: str) -> None:
        self.path_str = path_str
    
    def __fspath__(self) -> str:
        return self.path_str.replace('//', '/')

custom_path = CustomPath('home//user//file.txt')
path = Path(custom_path)
print(path)
```

# sys

## `__sizeof__`

Retorna o tamanho em bytes do objeto.

```python
class MemoryTracked:
    def __init__(self, data: list) -> None:
        self.data = data
        self.extra_info = "additional data"
    
    def __sizeof__(self) -> int:
        total = super().__sizeof__()
        total += self.data.__sizeof__()
        total += len(self.extra_info.encode('utf-8'))
        return total

obj = MemoryTracked([1, 2, 3, 4, 5])
print(f"Size: {obj.__sizeof__()} bytes")
```

# ABCs

## `__subclasshook__`

Personaliza verificações de subclasse para ABCs.

```python
from abc import ABC

class DuckType(ABC):
    @classmethod
    def __subclasshook__(cls, subclass: type) -> bool:
        return (hasattr(subclass, 'quack') and 
                callable(subclass.quack))

class RealDuck:
    def quack(self) -> str:
        return "Quack!"

class FakeDuck:
    def speak(self) -> str:
        return "Hello!"

print(issubclass(RealDuck, DuckType))
print(issubclass(FakeDuck, DuckType))
```

# Atributos Especiais 

## `__slots__`

Otimiza o uso de memória impedindo a criação de `__dict__`, e impossibilitando de criar novos atributos dentro da classe.

```python
class Person:
    __slots__ = ['name', 'age']
    
    def __init__(self, name: str, age: int) -> None:
        self.name = name
        self.age = age

person = Person("João", 30)
print(person.name)

pessoa.email = "joao@email.com"  # AttributeError
```

## `__annotations__`

Armazena type hints da classe.

```python
class MyClass:
    name: str
    age: int = 0
    
    def __init__(self, name: str) -> None:
        self.name = name

print(MyClass.__annotations__)
```

## `__doc__`

Armazena a docstring da classe.

```python
class MyClass:
    """This is my class.
    
    Attributes:
        value (int): a value
    """
    
    def __init__(self, value: int) -> None:
        self.value = value

print(MyClass.__doc__)
```

## `__module__`

Indica em qual módulo a classe foi definida.

```python
class MyClass:
    pass

print(MyClass.__module__)
```

## `__qualname__`

Nome qualificado da classe (incluindo classes externas).

```python
class Extern:
    class Intern:
        pass

print(Extern.Intern.__qualname__)
```

## `__match_args__`

Define a ordem dos argumentos para pattern matching (`Python 3.10+`).

```python
class Point:
    __match_args__ = ('x', 'y')
    
    def __init__(self, x: int, y: int) -> None:
        self.x = x
        self.y = y

point = Point(10, 20)
match point:
    case Point(x, y):
        print(f"X: {x}, Y: {y}")
```

## `__dict__`

[[Escopos e Namespaces|Namespace]] da classe contendo seus atributos.

```python
class Example:
    attr_class = "value"
    
    def __init__(self) -> None:
        self.attr_instance = "otr value"

print(Example.__dict__.keys())
```

## `__weakref__`

Suporte a referências fracas (automaticamente adicionado se necessário).

```python
import weakref

class ComWeakref:
    pass

obj = ComWeakref()
ref = weakref.ref(obj)
print(hasattr(obj, '__weakref__'))
```

## `__build_class__`

Built-in function usado para criar classes internamente.

```python
def custom_class_builder(name: str, bases: tuple, namespace: dict) -> type:
    namespace['custom_attr'] = "added_by_builder"
    return type(name, bases, namespace)

result = __build_class__(custom_class_builder, 'DynamicClass')
print(result.__name__)
```

## `__import__`

Built-in function para importação dinâmica de bibliotecas.

```python
math = __import__('math')

print(math.cos(1))
```

## `__loader__`

Referencia para o loader que carrega um módulo

```python
import math

class CustomLoader:
    def load_module(self, fullname: str) -> object:
        return math

print(type(math.__loader__))
```

## `__bases__`

Tupla de bases classes que são herdadas.

```python
class Animal:
    pass

class Mammal(Animal):
    pass

class Dog(Mammal):
    pass

print(Dog.__bases__)
print(Mammal.__bases__)
```

## `__debug__`

Indica se o `python` está em modo debug ([[Boolean|booleano]]).

```python
print(__debug__)
```

## `__name__`

Retorna o nome da classe, módulo ou função

```python
class MyClass:
	pass
	
def foo() -> None:
	pass

print(MyClass.__name__)
print(foo.__name__)
print(__name__)
```

É por causa disso que se cria uma "main" no `python` usando este dunder 

```python
if __name__ == '__main__':
	pass
```

Isso só funciona se o módulo, quando for chamado, for chamado diretamente pelo interpretador

## `__package__`

Nome do package que contêm o módulo.

```python
import collections.abc

print(collections.abc.__package__)
print(__package__)
```

## `__spec__`

Contêm as especificações de um módulo

```python
import math

print(math.__spec__)
```

## `__class__`

Referencia para a classe de um objeto (do tipo [[Funções Nativas#type|type]])

```python
class A:
	pass
	
a = A()

print(a.__class__.__name__) # give access to classes dunders in an object
```

## `__abstractmethods__`

Conjunto de métodos abstratos

```python
from abc import ABC, abstractmethod

class AbstractExample(ABC):
    @abstractmethod
    def required_method(self) -> str:
        pass
    
    @abstractmethod
    def another_required(self) -> int:
        pass
    
    def concrete_method(self) -> str:
        return "Implemented"

class ConcreteClass(AbstractExample):
    def required_method(self) -> str:
        return "Implemented required_method"
    
    def another_required(self) -> int:
        return 42

print(f"Abstract methods: {AbstractExample.__abstractmethods__}")
print(f"Concrete methods: {ConcreteClass.__abstractmethods__}")
```

## `__base__`

A primeira classe base de uma herança

```python
class FirstBase:
    first_value: int = 1

class SecondBase:
    second_value: int = 2

class MultipleInheritance(FirstBase, SecondBase):
    derived_value: int = 3

class SingleInheritance(FirstBase):
    single_value: int = 4

print(f"Multiple inheritance base: {MultipleInheritance.__base__}")
print(f"Single inheritance base: {SingleInheritance.__base__}")
print(f"FirstBase base: {FirstBase.__base__}")
```

## `__basicsize__`

Tamanho básico da classe na memória

```python
print(int.__class__.__basicsize__)
```

## `__dictoffset__`

Offset na memória da instância do dicionário na memória

```python
class WithDict:
    def __init__(self, value: int) -> None:
        self.value = value
        self.extra_data: str = "additional"

class WithoutDict:
    __slots__: tuple = ('value', 'data')
    
    def __init__(self, value: int) -> None:
        self.value = value
        self.data: str = "slots"

print(f"Class with dict offset: {WithDict.__dictoffset__}")
try:
    print(f"Class without dict offset: {WithoutDict.__dictoffset__}")
except AttributeError as e:
    print(f"No dict offset: {e}")
```

## `__mro__`

[[Herança e Composição#Method Resolution Order (MRO)|MRO]]

```python
class A:
    def method(self) -> str:
        return "A"

class B(A):
    def method(self) -> str:
        return "B"

class C(A):
    def method(self) -> str:
        return "C"

class D(B, C):
    def method(self) -> str:
        return "D"

def analyze_mro(cls: type) -> None:
    mro: tuple = cls.__mro__
    print(f"Class: {cls.__name__}")
    print("MRO:", [c.__name__ for c in mro])
    
    # Demonstrate MRO in action
    instance: D = cls()
    print(f"Method result: {instance.method()}")

analyze_mro(D)
analyze_mro(B)
analyze_mro(A)
```

## `__text_signature__`

Assinatura em [[String|string]] usada para documentação e spec

```python
from typing import Optional

class DocumentedClass:
    def __init__(self, name: str, value: int = 0) -> None:
        self.name = name
        self.value = value
    
    def calculate(self, x: int, y: Optional[int] = None) -> int:
        """Perform calculation."""
        return x * self.value

def analyze_signatures(cls: type) -> None:
    print(f"Class: {cls.__name__}")
    
    if hasattr(cls, '__text_signature__'):
        print(f"Class signature: {cls.__text_signature__}")
    
    if hasattr(cls.__init__, '__text_signature__'):
        print(f"Init signature: {cls.__init__.__text_signature__}")
    
    if hasattr(cls.calculate, '__text_signature__'):
        print(f"Method signature: {cls.calculate.__text_signature__}")

analyze_signatures(DocumentedClass)
```

## `__type_params__`

Parâmetros de typing para classes genérias (`python3.12+`)

```python
from typing import Generic, TypeVar

T = TypeVar('T')
U = TypeVar('U')

class GenericContainer(Generic[T, U]):
    def __init__(self, first: T, second: U) -> None:
        self.first = first
        self.second = second

def analyze_type_params(cls: type) -> None:
    print(f"Class: {cls.__name__}")
    
    if hasattr(cls, '__type_params__'):
        params = cls.__type_params__
        print(f"Type parameters: {params}")
        for param in params:
            print(f"  - {param}")
    else:
        print("No type parameters")

analyze_type_params(GenericContainer)
analyze_type_params(object)
```

## `__weakrefoffset__`

Offset do [[#`__weakref__`|__weakref__]]

```python
class WithWeakref:
    def __init__(self, data: str) -> None:
        self.data = data

class WithoutWeakref:
    __slots__: tuple = ('data',)
    
    def __init__(self, data: str) -> None:
        self.data = data

def analyze_weakref_layout() -> None:
    print(f"WithWeakref weakrefoffset: {WithWeakref.__weakrefoffset__}")
    
    try:
        print(f"WithoutWeakref weakrefoffset: {WithoutWeakref.__weakrefoffset__}")
    except AttributeError as e:
        print(f"WithoutWeakref: {e}")

analyze_weakref_layout()
```

