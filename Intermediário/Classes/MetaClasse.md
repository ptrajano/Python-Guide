
[Metaclasses](https://hub.asimov.academy/tutorial/o-que-sao-metaclasses-em-python/) são as "classes das classes". Enquanto classes são "moldes" para criar objetos, metaclass são "moldes" de classes. Acredito que  uma forma boa de se ver isso é usando a função [[Funções Nativas#type|type]] que está escondida em toda classe

```python
class A:
	...
	
print(type(A.__class__))
```

o `type` é um metaclass que define as classes, ou seja, existe uma forma de usar o `type` para gerar uma classe, mesmo que essa classe não exista

```python
# Tradicional
class A:
	attr = 42
	
	def method(self):
		return 'my method'
		

def method_with_type(self):
	return 'my method'
	
TypeClass = type(
	'TypeClass', # Name of Class
	(), # Inheritance
	{ # attr and methods
		'attr': 42,
		'method': method_with_type
	}
) 

obj1 = A()
obj2 = TypeClass()

print(obj1.method())
print(obj2.method())
```


Mas é possível criar uma MetaClass de forma explícta, como por exemplo

```python
class MetaRegister(type):
	_registered_classes = {}
	
	def __init__(cls, name, bases, namespace):
        super().__init__(name, bases, namespace)
        
        if not name.startswith('_'):
            MetaRegister._registered_classes[name] = cls
            print(f"Registered Class: {name}")
    
    @classmethod
    def list_classes(cls):
        return list(cls._registered_classes.keys())
        
class Animal(metaclass=MetaRegister):
    pass

class Dog(Animal):
    pass

class Cat(Animal):
    pass
    
print(f"All classes: {MetaRegister.list_classes()}")
```

Aqui temos uma classe que vai salvar todas as classes que foram geradas (não instâncias) partidas de animais. O intuito aqui não é ensinar tudo sobre metaclasses pois é um conceito bastante avançado, mas passar somente a visão do que é. Resumidamente metaclasses permitem a criação e personalização dinâmica de um objetos de classes, normalmente não é necessário usar esse conceito, só para locais que de fato precisa de um certo dinamismo na criação, como em API's ou frameworks, isso é um conceito que acontece no fundo do `python`.