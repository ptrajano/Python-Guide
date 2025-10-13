Em `python`, os programadores de outras linguagens tendem a falar que `python` pode tudo e isso atrapalha o entendimento de linguagens de programação de "verdade", isso é uma das reclamações mais comuns dessa linguagem, porém boa parte disso vêm do fato de que __tudo no `python` é um objeto__, isso é uma filosofia do design da própria linguagem. Mas o que que isso quer dizer?
Em primeiro lugar, tudo no `python` é uma classe, não igual as [[Classes|classes]] que conseguimos implementar, mas de um objeto que é a base de todos os outros o [[Funções Nativas#object|object]], as classes que implementamos vêm também do `object`. Um ponto legal de se ver são os [[Dunder|dunders]], eles são __métodos mágicos__, ou seja se alguma coisa contenha `dunders`, então ele é classe, pois tem métodos, vamos usar o objeto [[Funções Nativas#dir|dir]] para checar isso, em diversas coisas do `python`

```python
print(dir(1))
```

```python
print(dir()) # check the directory itself
```

```python
print(dir('a'))
```

```python
print(dir([1, 2, 3]))
```

```python
print(dir(abs))
```

```python
import math

print(dir(math))
```

```python
print(dir(ValueError))
```

```python
def foo():
	pass
	
print(dir(foo))
```

```python
def foo():
	pass
	
print(dir(foo()))
```

```python
print(dir(None))
```

```python
print(dir(...))
```

Perceba que tudo, é um objeto em `python`, as únicas coisas que não são objetos são os operadores (`+`, `-`, `*`, `**`, `in`, `or`, `=`, `:=`, etc...) e as [[Palavras Restritas|palavras restritas]] (`break`, `def`, `class`, `try`, etc...), tirando isso tudo, literalmente tudo, é um objeto. E consegue-se ver que todos os objetos herdam de `object`, pois todos eles tem um conjunto de `dunders` iguais que são os
- `__class__`
- `__doc__`
- `__module__`
- `__sizeof__`

Por causa disso "tudo é permitido no `python`", pois estamos trabalhando com o mesmo objeto, então funções podem ser argumentos de outras funções, pode ter função dentro de outra função, pode somar [[Float|float]] com [[Integer|inteiro]] o [[Funções Nativas#print|print]] pode receber tipos de dados diferentes de [[String|string]], pois o polimorfismo acontece naturalmente, e dessa forma tudo é possível, essa liberdade é maravilhosa, mas é difícil entender o por quê dessa liberdade existir, e como extrair $100\%$ disso. Eu acho que isso é o que torna o `python` tão belo, pois é uma linguagem (na sua maioria) consistente, pois a mesma mentalidade se aplica para todos os objetos, e por quê todos os objetos podem ter comportamentos adicionais

```python
class Integer(int):
	# New functionality to int !!! 
	...
```

Além de se poder analisar qualquer coisa na linguagem, pois como tudo é objeto, pode se usar as funções [[Funções Nativas#dir|dir]] e [[Funções Nativas#help|help]] em basicamente tudo (tirando operadores e palavras restritas), pois tudo pode ser argumento de uma função (classe)!
E por fim é uma linguagem flexível, pois é fácil para programadores iniciantes entenderem e ao mesmo tempo [[Design Patterns|padrões de design]] surgem naturalmente e de forma simples como o próprio [[Decorators|decorator]], ou seja ajuda iniciantes e da liberdade para programadores avançados para mexer no que quiser na linguagem, criando objetos mirabolantes em cima de coisas que já existem.

É por causa disso que, por exemplo, conseguimos criar novas [[Lista de Exceptions|Exceptions]]

```python
class MyException(Exception):
	pass
```

`MyException` vai [[Herança e Composição|herdar]] todos os comportamentos de uma exception e ao mesmo tempo vai ser intuitiva para quando um erro acontecer eu conseguir identificar o erro de forma melhor. 

Um Fun Fact é que nas versões de `python 2.x-` todas as classes herdavam de forma explícita do [[Funções Nativas#object|object]].

```python
class A(object):
	...
```

Nas versões `3.x+` isso já não existe, mas novamente isso aparece.

E por último a estrutura que se usa uma função dentro de uma [[Bibliotecas nativas|biblioteca]], como por exemplo a `math` é exatamente como se acessa um método de uma classe, mesmo que ela foi escrita como função

```python
import math

print(math.acos(1))
```

Obviamente é possível esconder esse fato usando as `keywords` `from`

```python
from math import acos

print(acos(1))
```

Que o que acontece é que muda o [[Escopos e Namespaces|namespace]] do `acos` de dentro da biblioteca para o dos `built-in`, ou seja só troca de um objeto pra outro.

E não só isso é possível importar bibliotecas usando [[Dunder|dunder]]

```python
math = __import__('math')

print(math.acos(1))
```

Ou mudar o nome de uma função usando variáveis

```python
new_abs = abs

print(new_abs(-10))
```

Essa é a beleza do `python`, tudo é um objeto!