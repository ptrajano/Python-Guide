Trabalhar com [classes](https://docs.python.org/3/tutorial/classes.html) é uma forma diferente de se programar se comparado com programação usando funções, como por ser visto nesta discussão [Functional Programming vs Object Oriented Programming ](https://www.reddit.com/r/ProgrammingLanguages/?f=flair_name%3A%22Discussion%22),pois o paradigma é diferente.

 [Programa orientada a objetos](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_objetos) (OOP) é uma forma de se programar que visa estruturar o programa, suas propriedades e o seu comportamento estão relacionados a apenas um objeto (LINK LINK LINK). ([OOP](https://realpython.com/python3-object-oriented-programming/))

A programação orientada a objetos visa construir objetos que contenham ao mesmo tempo  atributos (variáveis) e métodos ([[Funções|funções]]), pois todas essas coisas estão relacionadas, por exemplo neste caso. Vamos tentar construir o equivalente a dois animais, sendo um cachorro e um gato sem usar classe.

```python

def speak(species, name, breed, age):
	species_dict = {
		'dog': 'Woof'
		'cat': 'Miau'
	}
	is species not in species_dict:
		return
	return f'The {species} {name} of age {age} and breed {breed}, says {species_dict[species]}!'

name_dog = 'Rex'
breed_dog = 'Poodle'
age_dog = 5

name_cat = 'Tom'
breed_cat = 'Persian'
age_cat = 3

print(speak('dog', name_dog, breed_dog, age_dog))
print(speak('cat', name_cat, breed_cat, age_cat))
```

Percebe que esse código é confuso, pois qualquer erro do programador pode misturar os dados, ou quebrar todo o sistema, e olha que este caso é extremamente simples. Visando resolver esse tipo de problema usamos OOP, aqui estará um código completo e sem muita explicação, mas que ao longo desse capítulo será explicado

```python
class Animal:
	def __init__(self, name, breed, age):
		self.name = name
		self.breed = breed
		self.age = age
		
		self._sound = None
	
	def speak(self):
		return f'The {self.__class__.__name__} {self.name} of age {self.age} and breed {self.breed}, says {self._sound}!'
		

class Dog(Animal):
	def __init__(self, name, breed, age):
		super().__init__(name, breed, age)
		
		self._sound = 'Woof'
		
class Cat(Animal):
	def __init__(self, name, breed, age):
		super().__init__(name, breed, age)
	
		self._sound = 'Miau'
		

dog = Dog('Rex', 'Poodle', 5)
cat = Cat('Tom', 'Persian', 3)

print(dog.speak())
print(cat.speak())
```

Essa é uma solução extremamente completa, aonde usa-se de herança (LINK LINK LINK) de uma classe mais genérica que seria o animal, essa classe representaria um ponto comum em todos os animais, informações e ações que todos os animais tem, independente da espécie, isso da uma liberdade altíssima para criar novas especies e adicionar novas funcionalidades, tanto para os animais como um todo, mas como também para espécies específicas, por exemplo se criarmos pássaros e quisermos saber se ele tá voando ou não, conseguimos só criando um novo método (LINK LINK LINK), dentro de pássaro sem perder todas as outras funcionalidades que os animais tem, além disso a estrutura final

```python
print(dog.speak())
print(cat.speak())
```

Faz muito mais sentido que 

```python
print(speak('dog', name_dog, breed_dog, age_dog))
print(speak('cat', name_cat, breed_cat, age_cat))
```

pois, pensando de uma forma mais filosófica, não é como se a fala fosse uma coisa a parte, a fala é uma coisa que o animal faz, e se perguntar para alguém que não programa o que é mais intuitivo, muito provavelmente essa pessoa irá falar que a solução OOP faz mais sentido.

## Criando uma Classe

Para criar uma classe, usa-se da palavra [[Palavras Restritas#class|class]] para definir que irá se escrever uma classe, ela equivale ao [[Palavras Restritas#def|def]] de uma função, em seguida coloca-se o nome da classe, que por convenção (em basicamente todas as linguagens de programação), que toda palavra começa com letra maiúscula e não é separada

```python
class FinancialMarket:
	...
```

Em seguida para definir a inicialização, que seria os parâmetros que a classe recebe ao ser criada usa-se o [[Dunder|dunder]] [[Dunder#`__init__`|__init__]], para quem vêm de linguagens de outras linguagens de programação recomendo ler a discussão em [[Dunder#`__new__`|__new__]], pois o `__init__` não é o constructor.

```python
class Animal:
	def __init__(self, name, breed, age):
		self.name = name
		self.breed = breed
		self.age = age
```

o `__init__` é tratado como se fosse uma função, mas em todos os métodos é importante colocar um primeiro parâmetro, que por convenção, se chama self (LINK LINK LINK), esse objeto será discutido mais a frente.

Ao iniciar uma classe com valores, cria-se um objeto (LINK LINK LINK), que seria uma [instância de uma classe](https://www.reddit.com/r/learnprogramming/comments/pp9cx2/an_object_is_an_instance_of_a_class_what_is_it/), de uma forma simples, enquanto que a classe é uma definição abstrata do que seria um animal, um objeto seria um animal em si.

Para criar um método, usa-se da noção de função identada dentro da classe

```python
class Animal:
	def __init__(self, name, breed, age):
		self.name = name
		self.breed = breed
		self.age = age

	def speak(self):
		return f'The {self.__class__.__name__} {self.name} of age {self.age} and breed {self.breed}, says {self._sound}!'
		
```

Não vamos entrar agora no `self.__class__.__name__`, pois é um conceito mais complexo de [[Dunder|dunder]], mas uma boa forma de se pensar no `self` é que o primeiro parâmetro está passando o objeto em si, então no caso do nosso cachorrinho `Rex`, o `self` passaria todas as informações do cachorro junto com tudo que ele poderia fazer para dentro do método, mas esse parâmetro é implícito, ao se chamar um método não precisa colocar o `self`

```python
print(dog.speak()) # dog.speak(dog)
```

Além disso é possível adicionar outros parâmetros pós `self`, como foi feito no `__init__`, o seu funcionamento é idêntico ao [[Argumentos de uma Função|argumento de uma função]].

Por último é importante falar sobre a diferença entre um atributo de classe e um atributo da instância, um atributo da classe é uma atributo que é compartilhado entre todas as instâncias da classe, já um atributo de instância é único para cada instância, por exemplo

```python
class Class:
	counter = 0
	
	def __init__(self, value):
		self.value = value
		
	def count(self):
		Class.counter += 1
		
a = Class(100)
b = Class(200)

a.count()
b.count()

print(f"{a.counter=}")
print(f"{b.counter=}")

print(f"{a.value=}")
print(f"{b.value=}")
```

É possível criar e deletar atributos de forma dinâmica, tanto dentro quanto fora da classe

```python
class A:
	...
	
a = A()
a.value = 10

print(a.value)

del a.value

print(hasattr(a, 'value'))
```
