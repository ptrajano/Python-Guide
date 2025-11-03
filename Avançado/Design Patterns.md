Um [design em software](https://en.wikipedia.org/wiki/Software_design) é o processo de montar o conceito da estrutura do software antes de implementa-lo, além disso pode representar a implementação já feita da estrutura pré-determinada, fazer o design do software ajuda no processo de criação do algoritmo e na escrita do código, diminuindo o tempo de depuração, além disso facilita na documentação do código.

[Design Patterns](https://refactoring.guru/design-patterns/what-is-pattern) (padrões de design), são soluções comuns para problemas de design de software, ou seja, são algoritmos padrões que podem ser customizados para problemas recorrentes de design.  A diferença do conceito padrão de algoritmo e um padrão de design é que o padrão de design é algo de mais alto nível, não se limitando ao passo a passo em si, mas o comportamento desejado. Os padrões de design são soluções já encontradas e problemas resolvidos, por causa disso, existe uma documentação muito grande sobre elas e isso facilita a manutenção e documentação, para que outras pessoas possam fazer parte do projeto sem ter que fazer o processo de entender o passo a passo para então entender o objetivo, o caminho mais fácil é entender o objetivo e então ver o passo a passo.

Não é necessário saber o que é um padrão de design para ser um programador, muitos nem sabem o que é, mas podem implementar sem saber. O intuito disso é ter estruturas de códigos que já foram testadas e validadas de tal forma que o processo de criação de um projeto seja menor, pois as soluções já existem para a maior parte dos problemas.

É importante ressaltar que os padrões de design são conceitos complexos, abstratos e para problemas grandes, dessa forma é comum que soluções de padrões de design são ineficientes para problemas específicos. Isso é causado por acharem que os padrões de design são dogmas que tem que ser implementadas ao pé da letra, mas os padrões de design são guias para encontrar a solução, de tal forma que a estrutura de cada software vai ser diferente, mesmo se eles tiverem o mesmo padrão de design como base.

Aqui serão apresentados alguns padrões de design comumente utilizados na industria, não necessariamente mostrando as suas implementações.

## Singleton


O padrão [Singleton](https://refactoring.guru/design-patterns/singleton) é um padrão de criação que garante que haverá apenas uma instância da classe que proverá acesso global para todas as instâncias.

```python
class Singleton:
	pass

a = Singleton()
b = Singleton()

print(a is b)
```

Neste caso existe duas instâncias da mesma classe, dessa forma o que for modificado em `a` não acontecerá em `b`, para definir o Singleton, existe duas formas principais em `python` a primeira é a mais simples, que implementa diretamente em cada [[Classes|classe]] usando o  dunder [[Dunder#`__new__` | __new__]], essa implementação é a mais simples mas ao mesmo tempo é bastante complexa.

```python
class Singleton:
	_instance = None
	def __new__(cls, *args, **kwargs):
		if not cls._instance:
			cls._instance = super().__new__(cls)
		return cls._instance
```

O `__new__`, trata da construção da classe (antes da inicialização `__init__`), o que ela faz é que ao tentar construir a classe ela checa se uma instância da classe já foi criada, dessa forma se caso já tiver sido criada alguma instância, ela irá apontar para a criada, ao invés de criar uma nova.

E a segunda forma é utilizando [[MetaClasse|metaclass]], essa é a forma mais "correta", pois é um método estático e todo o processo Singleton está escondido

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

## Decorator

Esse padrão de design já é implementado diretamente no `python` através dos [[Decorators]], mas os decorators são feitos para funcionar melhor em [[Funções|funções]]. Os decorators servem para adicionar funcionalidade adicional para um outro objeto.

```python
def fib_cache(foo):
	_cache = {}
	def wrapper(number):
		if number not in _cache:
			_cache[number] = foo(number)
		return _cache[number]

@fib_cache
def fibonacci(number):
	if number <= 1:
		return number
	return fibonacci(number - 1) + fibonacci(number - 2)
```

## Facade

Este padrão de design serve para fazer uma faixada para códigos complexos, aonde estamos trabalhando com um código muito complexo e com várias coisas, mas nosso usuário ou programador final não precisa trabalhar com tudo que está por trás, por isso criamos uma classe que irá trabalhar com tudo e ao mesmo tempo não deixará na mão de outros programadores ou usuários para fazer as coisas que não precisa. 

## State

Esse padrão implementa a [máquina de estados](https://en.wikipedia.org/wiki/Finite-state_machine#:~:text=A%20finite%2Dstate%20machine%20(FSM,states%20at%20any%20given%20time.), que é um objeto bastante importante para ter fluxos complexos de operações funcionando de forma fácil. Esse padrão de design é a base para diversos sistemas complexos reais, como por exemplo, [Teoria de Filas](https://en.wikipedia.org/wiki/Queueing_theory), implementação de [Diagrama de Blocos](https://pt.wikipedia.org/wiki/Diagrama_de_bloco), [Redes de Petri](https://pt.wikipedia.org/wiki/Rede_de_Petri), [Autômatos](https://pt.wikipedia.org/wiki/Teoria_dos_aut%C3%B4matos), etc...

## Mediator

Padrão de design feito para mediar dependências entre classes, o intuito dele é ser um "gerente" de tudo que está acontecendo no sistema, como por exemplo, um boneco em um jogo, o boneco vai ter inventario, vai poder andar, vai poder bater, vai poder falar, para que as coisas não fiquem confusas, naturalmente já implementamos esse padrão, gerando a [[Classes|classe]] `player`. Outro exemplo, é a implementação de um algoritmo [Mestre Escravo](https://en-wikipedia-org.translate.goog/wiki/Master%E2%80%93slave_(technology)?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc), que um mediador passa tarefas para vários computadores diferentes fazerem.