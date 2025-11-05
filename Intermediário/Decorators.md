Um [decorator](https://www.geeksforgeeks.org/python/decorators-in-python/) é um jeito de modificar ou estender comportamentos de uma função ou um método sem ter que modificar o código interno desse objeto. Um decorator é basicamente uma função que recebe uma função como parâmetro e retorna uma nova função, ela funciona como um encapsulador, uma estrutura externa que trabalha diretamente com uma função ou método

A cara base de um decorador é a seguinte

```python
def decorator(foo):
	def wrapper(*args, **kwargs):
		print("Before calling the function")
		result = foo(*args, **kwargs)
		print("After calling the function")
		return result
	return wrapper

@decorator
def add(x, y)
	return x + y
	
print(add(1, 1))
```

Em cima da função que usará o decorator adiciona o `@decorator_name`, isso é uma simplificação para não ter que escrever 

```python
print(decorator(add)(1, 1))
```

 Em uma primeira olhada o funcionamento do decorator é um pouco confuso, mas vamos explicar parte a parte, em primeiro lugar, a função `decorator`, recebe como parâmetro a função que se está trabalhando, e ele retorna uma nova função, ou seja

```python
new_function = decorator(add)
```

Essa nova função receberá qualquer parâmetro para que a função base `add` possa receber seus parâmetros de forma correta, e se os parâmetros estiverem errados estarão errados em relação a função base e não ao decorator.
Dentro do `decorator` existe uma definição de uma função interna que é o encapsulamento em si e irá tratar sobre o que se quer adicionar de funcionalidade na função base. Em seguida chamamos a função `new_function` como se fosse a própria função de análise

```python
new_function(1, 1)
```

Para não ter que fazer esse processo confuso é feito essa simplificação internamente pelo `python` e ai toda vez que será chamada essa função irá ter as funcionalidades desejadas.

Um exemplo objetivo e claro para a utilização de decorators é se quiser entender o fluxo de controle das funções de um código, ou seja `logging`

```python
def logging(func):
    def wrapper(*args, **kwrds):
        print(f'Starting {func.__name__}(args = ({args}), kwargs = ({kwargs}))')
        res = func(*args, **kwrds)
        print(f'End {func.__name__} -> result = {res}')
        return res
    return wrapper

@logging
def hello_world(a):
    print("Hello world")

@logging
def add(x, y):
	return x + y
```

Esse código utiliza de [[Dunder]] para conseguir o nome das funções e assim fazer um `logging` descente.

E se por exemplo, estivermos fazendo uma função que checa se um site está ligado ou não, e queremos checar ele uma certa quantidade de vezes antes de decidir, mas queremos que essa quantidade seja determinada no código, por exemplo

```python
@repeat(times = 5)
def check_internet(site: str) -> bool:
	pass # code to check the internet
```

Como que adiciona parâmetros para o decorator, para isso é preciso adicionar mais um grau de complexidade 

```python
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwrds):
            for _ in range(times):
                func(*args, **kwrds)
        return wrapper
    return decorator
```

Para adicionar parâmetros é necessário fazer três funções dentro da outra, mas como que ela funciona, ela é traduzida como

```python
repeat(times = 5)(func = check_internet)(site)
```

O que acontece, já explicamos como funciona as duas funções, aqui é o mesmo raciocínio, mas tratamos do parâmetro como sendo algo que vem antes do decorator, pois gera-se uma função que tem como constante o valor times e em seguida é o mesmo comportamento, pois 

```python
decorator = repeat(times = 5)
new_function = decorator(func = check_internet)
new_function(site)
```

Um último ponto que é importante falar é saber fazer um decorator dentro de uma [[Classes|classe]], isso trará mais um nível de função, mas é útil quando está trabalhando com uma classe e o decorator só é útil dentro da classe 

```python
class A:
    def repeat(self, times):
        def decorator(func):
            def wrapper(*args, **kwrds):
                for _ in range(times):
                    func(*args, **kwrds)
            return wrapper
        return decorator
    
    def hello_world(self):
        @self.repeat(times= 3)
        def hello_world_02():
            print("Hello world")
        return hello_world_02()

print(A().hello_world())
```

É necessário fazer dessa forma por causa do  `self` da classe

Existem alguns [decorators padrões](https://www.geeksforgeeks.org/python/decorators-in-python/) do `python`

### `staticmethod`

O `staticmethod` é usado dentro de uma classe, ele é um método que está dentro da classe mas não irá utilizar qualquer atributo ou método da classe em si, somente os parâmetros que foram entregues na sua chamada 

```python
class MathOperations:
    @staticmethod
    def add(x, y):
        return x + y

# Using the static method
res = MathOperations.add(5, 3)
print(res)
```

### `classmethod`

Usado para um métodos de classe que trabalham diretamente com informações da classe em si ao invés do objeto

```python
class Employee:
    raise_amount = 1.05
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        
    @classmethod
    def set_raise_amount(cls, amount):
        cls.raise_amount = amount

# Using the class method
Employee.set_raise_amount(1.10)
print(Employee.raise_amount)
```

### `property`

O `property` é usado para métodos serem tratados como atributos

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value >= 0:
            self._radius = value
        else:
            raise ValueError("Radius cannot be negative")

    @property
    def area(self):
        return 3.14159 * (self._radius ** 2)

# Using the property
c = Circle(5)
print(c.radius) 
print(c.area)    
c.radius = 10
print(c.area)
```

Neste caso, também aparece os decorators das propertys, eles são os decorators que estão relacionados aos [[Dunder | dunders]], [[Dunder#`__setattr__` | __setattr__]] e [[Dunder#`__getattr__` | __getattr__]], neste caso o `__getattr__` não está definido mas o seu funcionamento é parecido, nele ele checa se ao tentar modificar o valor do `radius` se o valor é válido (positivo).
## Múltiplos decorators

A questão principal é entender que a ordem é muito importante para isso, obviamente, dessa forma é preciso entender que se fizermos o seguinte decorator a ordem das funções é 

```python
@decorator2
@decorator1
def func(*args, **kwargs):
	...
```

Isso é equivalente a

```python
new_decorator = decorator2(func = decorator1)
new_function = new_decorator(func = func)
new_function(*args, **kwargs)
```

### Decorators em lambda

É possível usar um decorator em um [[Funções Lambda|lambda]]

```python
@decorator
lambda x: x + 1
```

