Uma [variável privada](https://www.pp.rhul.ac.uk/~george/PH2150/html/node47.html), é uma variável que pode ser acessada somente dentro do escopo (LINK LINK LINK) de uma classe, o intuito disso é "esconder" o local aonde está sendo armazenado algum dado para , por exemplo, um programador malicioso não fazer coisa que não deve, ou fazer uma interface que funcione com outros softwares, mas a sua implementação é diferente. Além disso, uma variável privada pode ser usada para o programador identificar o que ele pode usar em alguma aplicação e o que é do funcionamento interno da classe. 
`Python` não implementa esse conceito, toda variável de uma classe é pública, porém existe uma convenção para programadores entenderem o que é e não é uma "variável privada" em `python`

```python
class A:
	def __init__(self, a):
		self._a = a

	def _private_foo(self):
		return "Oh No"

instance = A(1)
print(instance._a)
print(instance._private_foo())
```

Perceba que o `_` é o simbolo que indica que uma variável não deve ser usada externamente, mas de qualquer jeito é possível modifica-la. O `python` não tem variáveis privadas, pois acredita que é trabalho do programador ser responsável. Então mesmo que não exista este conceito e não seja necessário, é importante implementa-lo para facilitar o entendimento do código,  um exemplo aonde isso pode ser útil é 

```python
class Circle:
    def __init__(self, radius):
	    if radius < 0:
		    raise ValueError(f"Radius cannot be negative -> {radius}")
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError(f"Radius cannot be negative -> {radius}")
        self._radius = value
            
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

Este exemplo utiliza de [[Decorators]] nativos do `python`  para checar se o valor do raio do circulo não é negativo.

Além disso, existe um mito que diz que `python` tem variáveis privadas, usando o `__`, isso não é verdade o que acontece é uma mudança de nomes implícita, como pode ser visto no [PEP 8](https://peps.python.org/pep-0008/#method-names-and-instance-variables).

```python
class A:
	__var = 0
	
	def __foo(self):
		return 1

a = A()
print(dir(a))
```

Perceba que neste caso, não existe mais a variável `__var` ou o método `__foo`, existe `_A__var` e `_A__foo`,  mesmo que pareça que isso gera uma variável privada, isso não gera, é fácil acessa-la através de 

```python
for name in dir(a):
	if (class_name := a.__class__.__name__) in name:
		print(f"{name}: {getattr(a, name)}")

```

Aqui acessamos essas variáveis com facilidade usando [[Dunder|dunder]]. 
Portanto é importante entender que o conceito de variáveis privadas em `python` não existe, porém é recomendado usar variáveis "não-públicas" que são indicativos para terceiros que aquelas variáveis não devem ser mexidas e se forem mexidas é de responsabilidade deles.