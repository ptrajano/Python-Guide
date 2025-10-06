Essa é uma das estruturas básicas de [[Control Flow|controle de fluxo]] aonde se da a oportunidade de um trecho de código acontecer caso alguma condição seja verdade.

```python
a = 10
b = 5

min_num = a
if b < a:
	min_num = b
	
print(min_num)
```

Neste caso aqui, encontramos o menor número entre duas opções o número `a` e o `b`, se o `a` for menor que o `b` o trecho do código embaixo do `if` e que está identado não será executado, pois a afirmativa `b < a` será [[Palavras Restritas#False|False]], caso ela seja verdadeira `b < a` será [[Palavras Restritas#True|True]], e então o trecho de código será executado. perceba que a entrada do `if` é um [[Boolean|booleano]]. 
Mas e se quisermos trabalhar com comportamentos mais complexos em que caso uma coisa seja verdade aconteça algo, e caso seja falsa aconteça outra coisa, neste caso usamos o `else`.

```python
a = 10
b = 500

if b < a:
	print('b is smaller than a')
else:
	print('b is greater or equal than a')
	
```

O `else` é um trecho de código que só será executado se a afirmativa do `if`, que *precisa* estar a cima do `else`, seja falsa. E por último temos a seguinte situação, e se tiver mais de uma condição, ou seja, a gente, neste caso, quiser separar se o número é menor, maior ou igual que o outro. A palavra `elif` faz este trabalho

```python
a = 100
b = 100

if b < a:
	print('b is smaller than a')
elif b == a:
	print('b is equal to a')
else:
	print('b is greater than a')
```

É possível fazer um conjunto `if/else` em uma linha, da seguinte forma

```python
a = 10
b = 20

print('b is smaller than b') if b < a else print('b is greater or equal than a')
```

Mas não é possível fazer o `elif` também.
É importante ressaltar que é possível analisar mais de uma condicional usando as palavras [[Palavras Restritas#and|and]] e [[Palavras Restritas#or|or]],  aonde um simboliza o "e" lógico e o outro o "ou" lógico.

```python
# Complex System using the internet 
turned_on = True
connected_to_internet = True

if turned_on and connected_to_internet:
	print("Can Work")
else:
	print("Can't work")
```

Além disso é possível usar a palavra [[Palavras Restritas#not|not]], para transformar uma afirmativa verdadeira em false

```python
# Complex System using the internet 
turned_on = False
connected_to_internet = True

if not (turned_on and connected_to_internet):
	if not turned_on:
		print("Turning on")
	if not connect_to_internet:
		print("Connecting to internet")

print("Doing work")
```

É importante ressaltar que é possível usar condicionais dentro das outras, ou seja, tudo e qualquer coisa que você faz fora de um `if/else` ou qualquer outra estrutura de fluxo é possível fazer dentro dela basta apenas identar de forma correta.

O último tópico que será comentado é que, como o parâmetro que o `if` e o `elif` recebem são [[Boolean|booleanos]], então é importante estudar todas os tipos de dados padrões, como [[Integer|int]], [[Float|float]], [[String|str]] e as estruturas de dados padrões como [[Lista|list]], [[Tupla|tuplas]], [[Dicionário|dict]], [[Set|set]] para entender como que essas estruturas podem ser usadas juntas com condicionais.