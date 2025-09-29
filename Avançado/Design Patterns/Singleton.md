
O padrão [Singleton](https://refactoring.guru/design-patterns/singleton) é um padrão de criação que garante que haverá apenas uma instância da classe que proverá acesso global para todas as instâncias.

```python
class Singleton:
	pass

a = Singleton()
b = Singleton()

print(a is b)
```

Neste caso existe duas instâncias da mesma classe, dessa forma o que for modificado em `a` não acontecerá em `b`, para definir o Singleton, existe duas formas principais em `python` a primeira é a mais simples, que implementa diretamente em cada classe (LINK LINK LINK) usando o  dunder [[Dunder#`__new__` | __new__]], essa implementação é a mais simples mas ao mesmo tempo é bastante complexa.

```python
class Singleton:
	_instance = None
	def __new__(cls, *args, **kwargs):
		if not cls._instance:
			cls._instance = super().__new__(cls)
		return cls._instance
```

O `__new__`, trata da construção da classe (antes da inicialização `__init__`), o que ela faz é que ao tentar construir a classe ela checa se uma instância da classe já foi criada, dessa forma se caso já tiver sido criada alguma instância, ela irá apontar para a criada, ao invés de criar uma nova.

E a segunda forma é utilizando metaclass (LINK LINK LINK), essa é a forma mais "correta", pois é um método estático e todo o processo Singleton está escondido

```python
class Singletonmeta(type):
	_instances = {}
	
	def __call__(cls, *args, **kwargs):
		if cls not in super()._instances:
			cls._instances[cls] = super().__call__(*args, **kwargs)
		return cls._instances[cls]
		
class Singleton(metaclass=SingletonMeta)
	pass

```
[referência](https://refactoring.guru/design-patterns/singleton/python/example#example-0)

```python

a = Singleton()
b = Singleton()

print(a is b) # True
a.var = 1
print(b.var) # 1
```

Esse padrão de design é padrão para soluções que se houver mais de uma instância da classe pode quebrar o sistema, como por exemplo um jogo, se houver mais de uma instância de um jogo rodando ao mesmo tempo provavelmente o jogo irá quebrar.

Além disso se o código estiver rodando em multi-thread a solução não será completa e pode acontecer de mais de uma instância ser criada caso houver mais de uma chamada ao mesmo tempo, por isso existem soluções mais complexas para esses problemas, como essa [referência](https://refactoring.guru/design-patterns/singleton/python/example#example-1). 
